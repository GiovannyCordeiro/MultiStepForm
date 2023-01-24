import classes from "./app.module.css";
import ContainerForm from "./components/ContainerForm";

export default function App() {

  return (
    <div className={classes.app}>
      <ContainerForm>
        <p>salve</p>
      </ContainerForm>
    </div>
  )
}