import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./adminRoutes";
import { studentPath } from "./studentRoutes";
import { facultyPaths } from "./facultyRoutes";
import { ProtectedRoute } from "../components/ui/ProtectedRoute";
import { ChangePassword } from "../components/ChangePassword";

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
            path: "/change-password",
            element: <ChangePassword />
        },
        {
            path: "/admin",
            element: <ProtectedRoute role="admin">
                <App />
            </ProtectedRoute>,
            children: routesGenerator(adminPaths)
        },
        {
            path: "/student",
            element: <ProtectedRoute role="student">
                <App />
            </ProtectedRoute>,
            children: routesGenerator(studentPath)
        },
        {
            path: "/faculty",
            element: <ProtectedRoute role="faculty">
                <App />
            </ProtectedRoute>,
            children: routesGenerator(facultyPaths)
        },
    ]
)