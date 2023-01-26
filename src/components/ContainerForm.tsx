import { Outlet } from "react-router";

import classes from "./ContainerForm.module.css";
import FeedbackStepsBar from './FeedbackStepsBar';

interface ContainerForm{
  children?: JSX.Element | JSX.Element[];
}

export default function ContainerForm(props:ContainerForm) {
  return (
    <div className={classes.container_form}>
      <FeedbackStepsBar />
      <div className={classes.wrapper_steps}>
        <Outlet/>
      </div>
    </div>
  )
}