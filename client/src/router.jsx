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
const DetailsPost = lazy(() => import("./routes/Posts/Details"));
const Map = lazy(() => import("./routes/Map"));
const Lines = lazy(() => import("./routes/Lines"));
const PowerStations = lazy(() => import("./routes/PowerStation"));
const TransformersStations = lazy(() => import("./routes/TransfomerStation"));
const Maintenances = lazy(() => import("./routes/Maintenances"));
const Agents = lazy(() => import("./routes/Agents"));
const Settings = lazy(() => import("./routes/Settings"));


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
            {
                path: "posts/:id",
                element: <Suspense> <DetailsPost /> </Suspense>,
            },
            {
                path: "map",
                element: <Suspense> <Map /> </Suspense>,
            },
            {
                path: "lines",
                element: <Suspense> <Lines /> </Suspense>,
            },
            {
                path: "powers",
                element: <Suspense> <PowerStations /> </Suspense>,
            },
            {
                path: "tstations",
                element: <Suspense> <TransformersStations /> </Suspense>,
            },
            {
                path: "maintenances",
                element: <Suspense> <Maintenances /> </Suspense>,
            },
            {
                path: "agents",
                element: <Suspense> <Agents /> </Suspense>,
            },
            {
                path: "settings",
                element: <Suspense> <Settings /> </Suspense>,
            },


        ]
    },
    {
        path: "/login",
        element: <Suspense> <Login /> </Suspense>,
    },
]);




