import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import ViewRecipes from "../ViewRecipes/ViewRecipes";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'showRecipe/:id',
                element: <PrivateRoutes><ViewRecipes></ViewRecipes></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://food-network-server-toma570.vercel.app/recipes/${params.id}`)

            }


        ]
    },
]);

export default router;