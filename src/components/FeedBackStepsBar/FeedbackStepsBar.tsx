import classes from "./FeedbackStepsBar.module.css";
import StepItem from "../StepItem/StepItem";
import { useAppSelector } from "../../hooks/reduxStateHooks";

export default function FeedbackStepsBar() {
  const state = useAppSelector(state => state.button);
  const handler = (type:string):boolean => {
    return type === state.button && true
  }

  return (
    <aside className={classes.feedback_bar}>
      <StepItem step={1} describe="Your Info" active={handler("first")}/>
      <StepItem step={2} describe="Select Plan" active={handler("second")}/>
      <StepItem step={3} describe="Add-ons" active={handler("third")}/>
      <StepItem step={4} describe="Summary" active={handler("fourth")}/>
    </aside>
  )
}