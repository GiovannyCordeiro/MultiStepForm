import { Link } from "react-router-dom";
import classes from "./style.module.css";

export default function ErrorPage(){
  
  return(
    <div className={classes.container}>
      <h1>404</h1>
      <div className={classes.helper_text}>
        <h2>This page was not found</h2>
        <h3>Please go back to the main page.</h3>
        <Link to="/">Click here!</Link>
      </div>
    </div>
  )
}