import App from "@/App";
import Login from "@/pages/Login";
import Todos from "@/pages/Todos";
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
                path: "login",
                element: <Login />
            }
        ]
    }
])

export default router;