import { Link } from "react-router-dom";
import  "./SecondStep.css";

import { useAppDispath } from "../../../hooks/reduxStateHooks";
import { actionsButton } from "../../../store/handlerButton";

export default function SecondStep() {
  const dispath = useAppDispath();
  const handlerButton = () => {
    dispath(actionsButton.activeOne());
  }

  return (
    <div className="second_step">
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="wrapper_plans">
        <div className="plans">
          <img src="../assets/images/icon-arcade.svg"/>
          <b>Arcade</b>
          <span>$9/mo</span>
        </div>
        <div className="plans">
          <img src="../assets/images/icon-advanced.svg"/>
          <b>Arcade</b>
          <span>$9/mo</span>
        </div>
        <div className="plans">
          <img src="../assets/images/icon-pro.svg"/>
          <b>Arcade</b>
          <span>$9/mo</span>
        </div>
      </div>
      <div className="moth_or_yearly">
        <span>Monthly</span>
        <input type="checkbox" name="" id="chk" />
        <label htmlFor="chk" className="switch">
          <span className="slider"></span>
        </label>
        <span>Yearly</span>
      </div>

      <div className="navigate">
        <Link to="/" onClick={handlerButton} className="back">Go Back</Link>
        <Link to="/ThirdStep" className="next_ste">Next Step</Link>
      </div>
    </div>
  )
}