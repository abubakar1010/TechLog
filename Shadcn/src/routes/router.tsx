import App from "@/App";
import Login from "@/components/Auth/Login";
import Task from "@/components/Tasks/Task";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                index: true,
                element: <Task />
            },
            {
                path: "login",
                element: <Login />
            }
        ]
    }
])

export default router;