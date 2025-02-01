import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root.tsx";
import App from "./App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <App />,
      },
    ],
  },
]);

export default router;
