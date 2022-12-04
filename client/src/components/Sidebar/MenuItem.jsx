import { NavLink } from "react-router-dom";

const MenuItem = ({ to, name, icon }) => {
    return (
        <NavLink
            key={name}
            to={to}
            className={({ isActive }) =>
                isActive ? 'bg-red-800 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md' : 'text-red-100 hover:text-white hover:bg-red-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'
            }
        >
            {name}
        </NavLink>
    );
}
export default MenuItem;