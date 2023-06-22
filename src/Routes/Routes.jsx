import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login&Register/Login";
import Register from "../Pages/Login&Register/Register";
import ErrorPage from "../Pages/Error/ErrorPage";
import Chefdata from "../Pages/Home/ChefeData/Chefdata";
import Chefdetails from "../Pages/Recipe_page/Chefdetails";
import Recipelayout from "../Layout/Recipelayout";
import Blog from "../Pages/Blog/Blog";
import Bloglayout from "../Layout/Bloglayout";
import AboutPage from "../Pages/About/AboutPage ";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Chefdata />
            }

        ]
    },
    {
        path: 'recipe',
        element: <Recipelayout />,
        children: [
            {
                path: ':chef',
                element: <Chefdetails />,
                loader: ({ params }) => fetch(`https://chef-recipe-hunter-server-titumiranan123.vercel.app/recipe/${params.chef}`)
            },
        ]
    },
    {
        path: '/',
        element: <LoginLayout />,
        children: [

            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    },
    {
        path: '/',
        element: <Bloglayout />,
        children: [
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "about",
                element: <AboutPage />
            }
        ]
    }
])

export default router;