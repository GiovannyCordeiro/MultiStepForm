import { Link } from "react-router-dom";
import  "./SecondStep.css";
//
import { useAppDispath } from "../../../hooks/reduxStateHooks";
import { actionsButton } from "../../../store/handlerButton";
import { useState } from "react";

export default function SecondStep() {
  const dispath = useAppDispath();
  const handlerButton = () => {
    dispath(actionsButton.activeOne());
  }

  const [hoverPlain, setHoverPlain] = useState(0);
  const definedPlain = (n:number) => {
    setHoverPlain(n);
  }

  const [pricePlain, setPricePlain] = useState("month");
  function eventTheCheckbox(e:React.ChangeEvent<HTMLInputElement>){
    e.target.checked === true ? setPricePlain("year") : setPricePlain("month");
  }

  const planeHoverHandler = pricePlain === "month";

  const plainsPriceMonth = [9, 12, 15];
  const plainsPriceYear = [90, 120, 150];
  
  const submitPlainData = () => {
    if(pricePlain === "month"){
      return localStorage.setItem("pricePlain",`${plainsPriceMonth[hoverPlain - 1]}`);
    }
    localStorage.setItem("pricePlain",`${plainsPriceYear[hoverPlain - 1]}`);
  }
  
  return (
    <div className="second_step">
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="wrapper_plans">
        <div className={hoverPlain  === 1 ? "plans active" : "plans"} onClick={() => {definedPlain(1)}}>
          <img src="../assets/images/icon-arcade.svg"/>
          <b>Arcade</b>
          <span>${planeHoverHandler ? plainsPriceMonth[0] : plainsPriceYear[0]}/mo</span>
        </div>
        <div className={hoverPlain  === 2 ? "plans active" : "plans"} onClick={() => {definedPlain(2)}}>
          <img src="../assets/images/icon-advanced.svg"/>
          <b>Advanced</b>
          <span>${planeHoverHandler ? plainsPriceMonth[1] : plainsPriceYear[1]}/mo</span>
        </div>
        <div className={hoverPlain  === 3 ? "plans active" : "plans"} onClick={() => {definedPlain(3)}}>
          <img src="../assets/images/icon-pro.svg"/>
          <b>Pro</b>
          <span>${planeHoverHandler ? plainsPriceMonth[2] : plainsPriceYear[2]}/mo</span>
        </div>
      </div>
      <div className="moth_or_yearly">
        <span>Monthly</span>
        <input type="checkbox" name="" id="chk" onChange={eventTheCheckbox}/>
        <label htmlFor="chk" className="switch">
          <span className="slider"></span>
        </label>
        <span>Yearly</span>
      </div>

      <div className="navigate">
        <Link to="/" onClick={handlerButton} className="back">Go Back</Link>
        {hoverPlain === 0 ? 
          <p id="none-plain">Select you plain</p> : 
          <Link onClick={submitPlainData} to="/ThirdStep" className="next_ste">Next Step</Link>}
      </div>
    </div>
  )
}