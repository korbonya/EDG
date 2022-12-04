// create a generic supense component
import { Suspense as ReactSuspense } from "react";
import GlobalLoader from "./components/GlobalLoader";
const Suspense = ({ fallback=<GlobalLoader />, children }) => {
    return <ReactSuspense fallback={fallback}>{children}</ReactSuspense>;
};
export default Suspense;