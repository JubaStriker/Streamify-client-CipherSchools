import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Notifications from "../Pages/Notifications/Notifications";
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
                element: <PrivateRoute><PostDetails></PostDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://video-stream-server.vercel.app/details/${params.id}`)
            },
            {
                path: '/notifications',
                element: <PrivateRoute><Notifications /></PrivateRoute>
            }
        ]
    }
])