import { lazy } from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import Suspense from "./Suspense.jsx";
const Dashboard = lazy(() => import("./routes/Dashboard"));
const Login = lazy(() => import("./routes/Auth/Login.jsx"));


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Suspense> <Dashboard /> </Suspense>,
    },
    {
        path: "/login",
        element: <Suspense> <Login /> </Suspense>,
    },
]);




