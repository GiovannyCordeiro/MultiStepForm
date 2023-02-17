import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./FirstStep.module.css";

import { useAppDispath } from "../../../hooks/reduxStateHooks";
import { actionsButton } from "../../../store/handlerButton";

export const verifyDataUser = (data:string, type:string) => {
  if(type === "name"){
    const regex = /\D{3,} \D{4,}/i;
    return regex.test(data);
  } 

  if(type === "e-mail"){
    const regex = /\D{2,}@\D{2,}\.\D{3,}/;
    return regex.test(data);
  }

  if(type === "number"){
    const regex = /1(\d{3})(\d{3})(\d{6})/;
    return regex.test(data);
  }
}

export default function FirstStep() {
  const navigate = useNavigate();

  const [nameUser, setNameUser] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [numberUser, setNumberUser] = useState("");

  const [errorName, setErrorName] = useState(true);
  const [errorEmail, setErrorEmail] = useState(true);
  const [errorPhone, setErrorPhone] = useState(true);

  const userData = JSON.parse(localStorage.getItem("userData") || "{}");

  const dispatch = useAppDispath();

  let inputsValid = {
    name: true,
    email: true,
    phone:true,
  }

  const [button, setButton] = useState(false);

  const submitForm = (e:React.SyntheticEvent) => {
    e.preventDefault();
    const allDataUser = {
      user: nameUser, 
      email:emailUser, 
      number: numberUser
    }
    const JSONAllDataUser = JSON.stringify(allDataUser);
    localStorage.setItem("userData", JSONAllDataUser)
    dispatch(actionsButton.activeTwo())
    navigate("/SecondStep");
  }

  const changeStateButton = () => {
    if(inputsValid.name && inputsValid.email && inputsValid.phone){
      setButton(true)
    }
  }

  const captureName = (e:React.ChangeEvent<HTMLInputElement>) => {
    const result = verifyDataUser(e.target.value,"name");
    if(!result){
      inputsValid.name = false;
      setErrorName(false);
      return setButton(false)
    }
    inputsValid.name = true;
    setErrorName(true);
    setNameUser(e.target.value);
    changeStateButton();
  }

  const captureEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(!verifyDataUser(e.target.value,"e-mail")){
      setErrorEmail(false);
      inputsValid.email = false;
      return setButton(false);
    }
    inputsValid.email = true;
    setErrorEmail(true);
    changeStateButton();
    setEmailUser(e.target.value);
  }

  const capturePhone = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(!verifyDataUser(e.target.value,"number")){
      inputsValid.phone = false;
      setErrorPhone(false);
      return setButton(false)
    }
    inputsValid.phone = true;
    setErrorPhone(true);
    setNumberUser(e.target.value);
    changeStateButton();
  }

  return (
    <form data-testid="form" onSubmit={submitForm} className={classes.form}>
      <h1>Personal info</h1>
      <p>Please provide you name, email adress, and phone number.</p>
      <div className={classes.wrapper_inputs}>
        <div>
          <div className={classes.wrapper_labels}>
            <label htmlFor="Name">Name</label>
            {errorName ? "" : <label id={classes.errLabel} htmlFor="Name">This field is required</label>}
          </div>
          <input required onChange={captureName} className={errorName ? "" : classes.input_error } data-testid="user-name" type="text" name="Name" id="Name" placeholder="Your full name" />
        </div>
        <div>
          <div className={classes.wrapper_labels}>
            <label htmlFor="Email">Email Address</label>
            {errorEmail ? "" : <label id={classes.errLabel} htmlFor="Name">This field is required</label>}
          </div>
          <input required onChange={captureEmail} className={errorEmail ? "" : classes.input_error } data-testid="user-email" type="email" name="Email" id="Email" placeholder="Exemple@exemple.com" />
        </div>
        <div>
          <div className={classes.wrapper_labels}>
            <label htmlFor="Phone">Phone Number</label>
            {errorPhone ? "" : <label id={classes.errLabel} htmlFor="Name">This field is required</label>}
          </div>
          <input required onChange={capturePhone} className={errorPhone ? "" : classes.input_error } data-testId="user-number" type="number" name="Phone" id="Phone" placeholder="e.g +1 234 567 890" />
        </div>
      </div>
      <button disabled={!button} aria-label="Button to submit form" type="submit">Next Step</button>
    </form>
  )
}