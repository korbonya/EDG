// Link button
import { Link } from "react-router-dom";

const LinkButton = ({ to, children }) => {
    return (
        <Link to={to} className="text-blue-700 font-bold text-lg">
            <button>{children}</button>
        </Link>
    );
}

export default LinkButton;