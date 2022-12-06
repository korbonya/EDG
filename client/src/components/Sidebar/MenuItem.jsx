import { NavLink } from "react-router-dom";

const MenuItem = ({ item }) => {
    return (
        <NavLink
            to={item.href}
            className={({ isActive }) =>
                isActive ? 'bg-yellow-800 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md' : 'text-yellow-100 hover:text-white hover:bg-yellow-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'
            }
            aria-current={item.current ? 'page' : undefined}
        >
            <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-yellow-200" aria-hidden="true" />
            {item.name}
        </NavLink>
    );
}
export default MenuItem;