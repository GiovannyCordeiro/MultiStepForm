import classes from "./FeedbackStepsBar.module.css";
import StepItem from "./StepItem";


export default function FeedbackStepsBar() {
  return (
    <div className={classes.feedback_bar}>
      <StepItem step={1} describe="Your Info" active={true}/>
      <StepItem step={2} describe="Select Plan" active={false}/>
      <StepItem step={3} describe="Add-ons" active={false}/>
      <StepItem step={4} describe="Summary" active={false}/>
    </div>
  )
}