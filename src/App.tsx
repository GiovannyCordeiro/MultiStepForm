import { createBrowserRouter, RouterProvider} from "react-router-dom";
import classes from "./app.module.css";
import ContainerForm from "./components/ContainerForm/ContainerForm";
import FirstStep from "./components/pages/FirstStep/FirstStep";
import ErrorPage from "./components/pages/404";
import SecondStepPage, {loader} from "./components/pages/SecondStep/SecondStepPage";

const router = createBrowserRouter([
  {
    path:"/",
    element:<ContainerForm/>,
    errorElement: <ErrorPage/>,
    children: [
      {index:true, element: <FirstStep/>},
      {path:"SecondStep", element:<SecondStepPage/>, loader:loader},
      {path:"ThirdStep", element:<p>second step</p>},
      {path:"FourthStep", element:<p>second step</p>}
    ],
  }
])

export default function App() {

  return (
    <div className={classes.app}>
      <RouterProvider router={router}/>
    </div>
  )
}