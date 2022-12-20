// tailwindcss action button
import { useState } from "react";

const Button = ({ children, onClick, className, disabled }) => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        onClick();
        setLoading(false);
    };

    return (
        <button
            className={`bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
            onClick={handleClick}
            disabled={disabled || loading}
        >
            {loading ? "chargement..." : children}
        </button>
    );
}

export default Button;