import { lazy } from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import Suspense from "./Suspense.jsx";
const Layout = lazy(() => import("./routes/Layout.jsx"));
const Dashboard = lazy(() => import("./routes/Dashboard"));
const Login = lazy(() => import("./routes/Auth/Login.jsx"));
const Posts = lazy(() => import("./routes/Posts"));
const AddPost = lazy(() => import("./routes/Posts/add"));


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
            },
            {
                path: "posts/add",
                element: <Suspense> <AddPost /> </Suspense>,
            },
        ]
    },
    {
        path: "/login",
        element: <Suspense> <Login /> </Suspense>,
    },
]);




