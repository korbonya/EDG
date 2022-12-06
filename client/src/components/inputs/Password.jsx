// tailwindcss password input element with show/hide password toggle button */
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const Password = ({ label, name, placeholder, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="flex flex-col my-2">
            <label className="text-sm font-medium text-gray-600" htmlFor={name}>{label}</label>
            <div className="relative">
                <input
                    className="border w-full border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-yellow-500"
                    type={showPassword ? "text" : "password"}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                <button
                    type="button"
                    className="absolute right-2 top-5 "
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <EyeIcon className="h-5 w-5" /> : <EyeSlashIcon className="h-5 w-5" />}
                </button>
            </div>
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    )
}

export default Password