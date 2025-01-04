import App from "@/App";
import Login from "@/pages/Login";
import Todos from "@/pages/Todos";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                index: true,
                element: <Todos />
            },
            {
                path: "/users",
                element: <User />
            },
            {
                path: "login",
                element: <Login />
            }
        ]
    }
])

export default router;