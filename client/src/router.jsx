import { lazy } from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import Suspense from "./Suspense.jsx";
const Layout = lazy(() => import("./routes/Layout.jsx"));
const Dashboard = lazy(() => import("./routes/Dashboard"));
const Login = lazy(() => import("./routes/Auth/Login.jsx"));
const Posts = lazy(() => import("./routes/Posts"));


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Suspense> <Layout /> </Suspense>,
        children: [
            {
                path: "/",
                element: <Suspense> <Dashboard /> </Suspense>,
            },
            {
                path: "posts",
                element: <Suspense> <Posts /> </Suspense>,
            }
        ]
    },
    {
        path: "/login",
        element: <Suspense> <Login /> </Suspense>,
    },
]);




