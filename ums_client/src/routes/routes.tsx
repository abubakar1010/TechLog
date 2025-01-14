import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./adminRoutes";
import { studentPath } from "./studentRoutes";
import { facultyPaths } from "./facultyRoutes";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Home />
                }
            ]
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/admin",
            element: <App />,
            children: routesGenerator(adminPaths)
        },
        {
            path: "/student",
            element: <App />,
            children: routesGenerator(studentPath)
        },
        {
            path: "/faculty",
            element: <App />,
            children: routesGenerator(facultyPaths)
        },
    ]
)