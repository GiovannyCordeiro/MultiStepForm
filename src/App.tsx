import { createBrowserRouter, RouterProvider} from "react-router-dom";
import classes from "./app.module.css";

import ContainerForm from "./components/ContainerForm/ContainerForm";

import FirstStep from "./components/pages/FirstStep/FirstStep";
import ErrorPage from "./components/pages/404";

import SecondStepPage, {loader as secondStepLoader} from "./components/pages/SecondStep/SecondStepPage";
import ThirdStepPage, { loader as thirdStepLoader} from "./components/pages/ThirdStep/ThirdStepPage";

const router = createBrowserRouter([
  {
    path:"/",
    element:<ContainerForm/>,
    errorElement: <ErrorPage/>,
    children: [
      {index:true, element: <FirstStep/>},
      {path:"SecondStep", element:<SecondStepPage/>, loader:secondStepLoader},
      {path:"ThirdStep", element:<ThirdStepPage/>, loader: thirdStepLoader},
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