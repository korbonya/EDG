// tailwindcss responsive sidebar 
import { useState } from "react";
import MenuItem from "./MenuItem";

const Sidebar = ({ children }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-200">
            <div className={`fixed inset-0 z-10 flex flex-col w-64 transition duration-300 transform bg-gray-800 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center justify-center h-16">
                    <div className="flex items-center">
                        <span className="text-white text-2xl font-semibold">Tailwind</span>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto overflow-x-hidden">
                    <nav className="flex-1 px-2 py-4 bg-gray-800">
                        <ul className="flex flex-col space-y-1">
                            <MenuItem to="/">Home</MenuItem>
                            <MenuItem to="/about">About</MenuItem>
                            <MenuItem to="/contact">Contact</MenuItem>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="flex flex-col flex-1 w-full">
                <div className="flex justify-between items-center h-16 px-6 bg-white border-b border-gray-200">
                    <button className="p-1 text-gray-500 rounded-md focus:outline-none focus:shadow-outline" onClick={() => setOpen(!open)}>
                        <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <div className="flex items-center">
                        <div className="relative">
                            <button className="flex mx-4 text-gray-600 focus:outline-none focus:shadow-outline">
                                <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M21 21l-6-6M18 9a9 9 0 11-9 9 9 9 0 019-9z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="relative">
                            <button className="flex items-center focus:outline-none focus:shadow-outline">
                                <img className="h-8 w-8 rounded-full object-cover" src="https://randomuser.me/api/port 443" alt="avatar" />
                            </button>
                        </div>
                    </div>
                </div>
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="container mx-auto px-6 py-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Sidebar;