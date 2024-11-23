import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import App from "./App.tsx";
import Home from "./routes/Home.tsx";
import Layout from "./routes/Layout.tsx";
import Dashboard from "./routes/Dashboard.tsx";
import Course from "./routes/Course.tsx";
import Module from "./routes/Module.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: ":course_id",
        element: <Course />,
      },
    ],
  },
  {
    path: "/dashboard/:course_name/module",
    element: <Module />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
