import { createBrowserRouter, RouterProvider} from "react-router-dom";
import classes from "./app.module.css";
import ContainerForm from "./components/ContainerForm";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";

const router = createBrowserRouter([
  {
    path:"/",
    element:<ContainerForm/>,
    children: [
      {path:"/", element: <FirstStep/>},
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