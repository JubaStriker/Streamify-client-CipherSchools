import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PostDetails from "../Pages/PostDetails/PostDetails";
import SignUp from "../Pages/SignUp/SignUp";
import UploadVid from "../Pages/UploadVideo/UploadVid";
import PrivateRoute from "./Private/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/uploadvideo',
                element: <PrivateRoute><UploadVid /></PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <PostDetails></PostDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
            }
        ]
    }
])