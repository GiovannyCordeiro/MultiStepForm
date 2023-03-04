import { useLoaderData } from "react-router-dom";
import SecondStep from "./SecondStep";


export default function SecondStepPage() {
  const data = useLoaderData();
  console.log(data);
  return(
    <>
      {data === true && <SecondStep/>}
    </>
  )
}

export function loader(){
  if(localStorage.getItem("userData") === null){
    throw new Response(JSON.stringify({message: "This step is not available for you yet!"}), {status: 403});
  }
  return true;
}