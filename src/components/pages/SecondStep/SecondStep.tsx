import { Link } from "react-router-dom";
import classes from "./SecondStep.module.css";

import { actions } from "../../../store";
import { useAppDispath } from "../../../hooks/reduxStateHooks";

export default function SecondStep() {
  const dispath = useAppDispath();
  const handlerButton = () => {
    dispath(actions.activeOne());
  }

  return (
    <div className={classes.second_step}>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <div className={classes.wrapper_plans}>
        <div className={classes.plans}>
          <img src="../assets/images/icon-arcade.svg"/>
          <b>Arcade</b>
          <span>$9/mo</span>
        </div>
        <div className={classes.plans}>
          <img src="../assets/images/icon-advanced.svg"/>
          <b>Arcade</b>
          <span>$9/mo</span>
        </div>
        <div className={classes.plans}>
          <img src="../assets/images/icon-pro.svg"/>
          <b>Arcade</b>
          <span>$9/mo</span>
        </div>
      </div>
      <div className={classes.moth_or_yearly}>
        <span>Monthly</span>
        <button>Change</button>
        <span>Yearly</span>
      </div>

      <div className={classes.navigate}>
        <Link to="/" onClick={handlerButton} className={classes.back}>Go Back</Link>
        <Link to="/ThirdStep" className={classes.next_step}>Next Step</Link>
      </div>
    </div>
  )
}