import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import Base from "./Base"
import Sidebar from "./Components/Sidebar";
import StudentMng from "./Pages/Students/studentMng";
import VerifyStudent from "./Pages/Students/StudentRegistration/VerifyStudent";
import NewLogin from "./Pages/Students/StudentRegistration/NewLogin";
import Application from "./Pages/Students/StuApplication/Application";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,

    children: [
      {
      path: "/",
      element: <Header />
      },
      {
      path: "/",
      element: <Sidebar />
      },
      {
        path:"student-mng",
        element: <StudentMng />
      },
      {
        path: "verify-student",
        element: <VerifyStudent />
      },
      {
        path: "New-Login",
        element: <NewLogin />
      },
      {
        path: "Stu-Reg-Application",
        element: <Application />
      },
      {
        
      }

    ]
  },
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
