import classes from "./ContainerForm.module.css";
import FeedbackStepsBar from './FeedbackStepsBar';
import FirstStep from "./FirstStep";

interface ContainerForm{
  children?: JSX.Element | JSX.Element[];
}

export default function ContainerForm(props:ContainerForm) {
  return (
    <div className={classes.container_form}>
      <FeedbackStepsBar />
      <FirstStep/>
    </div>
  )
}