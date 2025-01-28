import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [],
  },
]);

export default router;
