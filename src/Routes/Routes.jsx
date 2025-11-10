import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErroPage from "../Pages/Root/ErrorPage/ErroPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErroPage></ErroPage>,
    children: [
      {
        path: "/",
      },
    ],
  },
]);

export default router;
