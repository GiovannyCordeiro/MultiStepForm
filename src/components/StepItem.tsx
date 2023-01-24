import classes from "./StepItem.module.css";

interface StepItem{
  step: number;
  describe: string;
  active: boolean;
}


function StepItem(props:StepItem) {
  const handlerActive = props.active ? classes.circle_active: classes.circle_disabled;

  return (
    <div className={classes.step_item}>
      <div className={handlerActive}>{props.step}</div>
      <div className={classes.description}>
        <p className={classes.step}>
          {`Step ${props.step}`}
        </p>
        <p className={classes.label}>
          {props.describe}
        </p>
      </div>
    </div>
  )
}

export default StepItem;