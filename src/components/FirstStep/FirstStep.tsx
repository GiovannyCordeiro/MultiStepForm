import React from "react";
import classes from "./FirstStep.module.css";

type inputEvent = React.FormEvent<HTMLInputElement>;

interface datasToUser{
  name:string,
  email:string,
  number:string
}

export const verifyDataUser = (data:datasToUser) => {
  // example for testing
  return {name:data.name, email: data.email, number:data.number};
}

export default function FirstStep() {

  return (
    <form data-testid="form"  className={classes.form}>
      <h1>Personal info</h1>
      <p>Please provide you name, email adress, and phone number.</p>
      <div className={classes.wrapper_inputs}>
        <div>
          <label htmlFor="Name">Name</label>
          <br/>
          <input data-testid="user-name" type="text" name="Name" id="Name" placeholder="Your full name"/>
        </div>
        <div>
          <label htmlFor="Email">Email Address</label>
          <br/>
          <input data-testid="user-email" type="email" name="Email" id="Email" placeholder="Exemple@exemple.com"/>
        </div>
        <div>
          <label htmlFor="Phone">Phone Number</label>
          <br/>
          <input data-testId="user-number" type="number" name="Phone" id="Phone" placeholder="e.g +1 234 567 890"/>
        </div>
      </div>
      <button aria-label="Button to submit form" type="submit">Next Step</button>
    </form>
  )
}