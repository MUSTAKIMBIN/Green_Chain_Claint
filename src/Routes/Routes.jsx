import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErroPage from "../Pages/Root/ErrorPage/ErroPage";
import Home from "../Pages/Home/Home";
import AllCrops from "../Pages/AllCrops/AllCrops";
import AddCrops from "../Pages/AddCrops/AddCrops";
import Profile from "../Pages/Profile/Profile";
import MyPosts from "../Pages/MyPosts/MyPosts";
import MyInterestes from "../Pages/MyInterests/MyInterestes";
import LogIn from "../Pages/LogIN/LogIn";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "../Routes/PrivateRoutes/PrivateRoutes";

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
        element: (
          <PrivateRoutes>
            <AddCrops></AddCrops>
          </PrivateRoutes>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      {
        path: "myPosts",
        element: (
          <PrivateRoutes>
            <MyPosts></MyPosts>
          </PrivateRoutes>
        ),
      },
      {
        path: "myInterests",
        element: (
          <PrivateRoutes>
            <MyInterestes></MyInterestes>
          </PrivateRoutes>
        ),
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
