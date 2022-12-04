import { NavLink } from "react-router-dom";

const MenuItem = ({ item, key }) => {
    return (
        <NavLink
            key={key}
            to={item.href}
            className={({ isActive }) =>
                isActive ? 'bg-blue-800 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md' : 'text-blue-100 hover:text-white hover:bg-blue-600 group flex items-center px-2 py-2 text-base font-medium rounded-md'
            }
            aria-current={item.current ? 'page' : undefined}
        >
            <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-blue-200" aria-hidden="true" />
            {item.name}
        </NavLink>
    );
}
export default MenuItem;