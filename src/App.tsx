import { createBrowserRouter, RouterProvider} from "react-router-dom";
import classes from "./app.module.css";
import ContainerForm from "./components/ContainerForm/ContainerForm";
import FirstStep from "./components/pages/FirstStep/FirstStep";
import SecondStep from "./components/pages/SecondStep/SecondStep";
import ErrorPage from "./components/pages/404";

const router = createBrowserRouter([
  {
    path:"/",
    element:<ContainerForm/>,
    errorElement: <ErrorPage/>,
    children: [
      {index:true, element: <FirstStep/>},
      {path:"/SecondStep", element:<SecondStep/>},
      {path:"/ThirdStep", element:<p>second step</p>},
      {path:"/FourthStep", element:<p>second step</p>}
    ]
  }
])

export default function App() {

  return (
    <div className={classes.app}>
      <RouterProvider router={router}/>
    </div>
  )
}