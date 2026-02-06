import { createBrowserRouter } from "react-router-dom";
import HomeLayOut from "../layout/HomeLayOut";
import Home from "../component/page/Home";
import CategoryNews from "../component/page/CategoryNews";
import Login from "../component/page/Login";
import Register from "../component/page/Register";
import AuthLayout from "../layout/AuthLayout";


export const router = createBrowserRouter(
    [
        {
            path:"/",
            Component: HomeLayOut,
            children:[
                {
                    path:"/",
                    Component:Home
                },
                {
                    path:"/category/:id",
                    Component:CategoryNews,
                    loader:()=>fetch("/public/news.json")
                }
            ]
        },
         {
            path:"/auth",
            Component: AuthLayout,
            children:[
                {
                    path:"/auth/login",
                    Component:Login
                },
                 {
                    path:"/auth/register",
                    Component:Register
                },

            ]
        },
         {
            path:"/news",
            element: <h2>News Layout</h2>
        },
         {
            path:"/*",
            element: <h2>Error 404</h2>
        },
    ]
);
export default router;