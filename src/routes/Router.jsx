import { createBrowserRouter } from "react-router-dom";
import HomeLayOut from "../layout/HomeLayOut";
import Home from "../component/page/Home";
import CategoryNews from "../component/page/CategoryNews";


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
            element: <h2>Authentication Layout</h2>
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