
import { useLoaderData } from 'react-router-dom'
import ThirdStep from './ThirdStepComponent';

export default function ThirdStepPage() {
  const data = useLoaderData(); 
  return (
    <>
      {data && <ThirdStep/>}
    </>
  )
}

export function loader(){
  if(!localStorage.getItem("pricePlain")){
    throw new Response(JSON.stringify({message: "This step is not avaliable for you yet!"}), {status: 403})
  }
  return true;
}