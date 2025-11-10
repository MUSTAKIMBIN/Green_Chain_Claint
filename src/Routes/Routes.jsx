import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
      },
    ],
  },
]);

export default router;
