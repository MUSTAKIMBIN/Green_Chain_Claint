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
    ],
  },
]);

export default router;
