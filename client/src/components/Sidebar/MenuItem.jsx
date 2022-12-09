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
            <div className="w-6 h-6 mr-4">
            <item.icon className={({ isActive }) =>
                isActive ? ' text-white w-6 h-6' : 'w-6 h-6 text-yellow-100 hover:text-white '
            } aria-hidden="true" />
            </div>
            {item.name}
        </NavLink>
    );
}
export default MenuItem;