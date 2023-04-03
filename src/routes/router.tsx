import { Admin } from "../components/Admin/Admin";
import { App } from "../App";
import { ErrorPage } from "../components/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/Admin/AdminLayout";
import React from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "admin",
    element: <Admin />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: "admin",
            element: <AdminLayout />,
          },
        ],
      },
    ],
  },
]);
