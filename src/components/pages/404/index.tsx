import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "./style.module.css";

export default function ErrorPage(){
  const error = useRouteError();
  let status;
  let title = "Somethin went wrong!";
  if(isRouteErrorResponse(error)){
    if(error.status === 403){
      status = error.status;
      title = JSON.parse(error.data).message;
    }
    if(error.status === 404){
      status = 404;
      title = "This page was not found";
    }
  }

  return(
    <div className={classes.container}>
      <h1>{status}</h1>
      <div className={classes.helper_text}>
        <h2>{title}</h2>
        <h3>Please go back to the before step.</h3>
        <Link to="..">Click here!</Link>
      </div>
    </div>
  )
}