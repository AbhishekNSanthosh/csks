import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { AboutUs } from "./Pages/AboutUs/AboutUs";
import { OfficeBearers } from "./Pages/OfficeBearers/OfficeBearers";

function App() {
  const router = createBrowserRouter([
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
    // {
    //   path: "/404",
    //   element: <NotFound />,
    // },
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/aboutus",
      element: <AboutUs />,
    },
    {
      path: "/office-bearers",
      element: <OfficeBearers />,
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
