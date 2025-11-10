import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErroPage from "../Pages/Root/ErrorPage/ErroPage";
import Home from "../Pages/Home/Home";
import AllCrops from "../Pages/AllCrops/AllCrops";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import AddCrops from "../Pages/AddCrops/AddCrops";
import Profile from "../Pages/Profile/Profile";
import MyPosts from "../Pages/MyPosts/MyPosts";
import MyInterestes from "../Pages/MyInterests/MyInterestes";
import LogIn from "../Pages/LogIN/LogIn";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErroPage></ErroPage>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "allCrops",
        Component: AllCrops,
      },
      {
        path: "addCrops",
        element: <AddCrops></AddCrops>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "myPosts",
        element: <MyPosts></MyPosts>,
      },
      {
        path: "myInterests",
        element: <MyInterestes></MyInterestes>,
      },
      {
        path: "logIn",
        Component: LogIn,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

export default router;
