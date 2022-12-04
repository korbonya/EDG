// create a generic supense component
import { Suspense as ReactSuspense } from "react";
const Suspense = ({ fallback=<div>Loading...</div>, children }) => {
    return <ReactSuspense fallback={fallback}>{children}</ReactSuspense>;
};
export default Suspense;