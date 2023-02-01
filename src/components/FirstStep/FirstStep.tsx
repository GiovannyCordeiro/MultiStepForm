import React, { HtmlHTMLAttributes, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./FirstStep.module.css";


export const verifyDataUser = (data:string, type:string) => {
  if(type === "name"){
    const regex = /(\D+) (\D+) (\D+)/i;
    return regex.test(data)
  } 

  if(type === "e-mail"){
    const regex = /\D+@\D+\.\D{3,5}/
    return regex.test(data)
  }

  if(type === "number"){
    const number = parseInt(data);
    const regex = /\+1(\d{3})(\d{3})(\d{7})/
    return regex.test(data);
  }

}

export default function FirstStep() {
  const navigate = useNavigate();

  const [nameUser, setNameUser] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [numberUser, setNumberUser] = useState("");

  const submitForm = (e:React.SyntheticEvent) => {
    e.preventDefault();
    navigate("/SecondStep");
  }

  const captureName = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNameUser(e.target.value);
  }

  const captureEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmailUser(e.target.value);
  }

  const capturePhone = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNumberUser(e.target.value);
  }



  return (
    <form data-testid="form" onSubmit={submitForm} className={classes.form}>
      <h1>Personal info</h1>
      <p>Please provide you name, email adress, and phone number.</p>
      <div className={classes.wrapper_inputs}>
        <div>
          <label htmlFor="Name">Name</label>
          <br/>
          <input onChange={captureName} data-testid="user-name" type="text" name="Name" id="Name" placeholder="Your full name"/>
        </div>
        <div>
          <label htmlFor="Email">Email Address</label>
          <br/>
          <input onChange={captureEmail} data-testid="user-email" type="email" name="Email" id="Email" placeholder="Exemple@exemple.com"/>
        </div>
        <div>
          <label htmlFor="Phone">Phone Number</label>
          <br/>
          <input onChange={capturePhone} data-testId="user-number" type="number" name="Phone" id="Phone" placeholder="e.g +1 234 567 890"/>
        </div>
      </div>
      <button disabled aria-label="Button to submit form" type="submit">Next Step</button>
    </form>
  )
}