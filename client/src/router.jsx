import { lazy, Suspense } from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
const Dashboard = lazy(() => import("./routes/Dashboard/index.jsx"));


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={<div>Loading...</div>}>
            <Dashboard />
        </Suspense>,
    },
]);




