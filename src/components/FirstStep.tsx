import classes from "./FirstStep.module.css";

function FirstStep() {
  return (
    <form className={classes.form}>
      <h1>Personal info</h1>
      <p>Please provide you name, email adress, and phone number.</p>
      <div className={classes.wrapper_inputs}>
        <div>
          <label htmlFor="Name">Name</label>
          <br/>
          <input type="text" name="Name" id="Name" placeholder="Your name"/>
        </div>
        <div>
          <label htmlFor="Email">Email Address</label>
          <br/>
          <input type="email" name="Email" id="Email" placeholder="Exemple@exemple.com"/>
        </div>
        <div>
          <label htmlFor="Phone">Phone Number</label>
          <br/>
          <input type="number" name="Phone" id="Phone" placeholder="e.g +1 234 567 890"/>
        </div>
      </div>
      <button>Next Step</button>
    </form>
  )
}

export default FirstStep;