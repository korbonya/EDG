
const Input = ({ label, name, type, placeholder, value, onChange, error }) => {
    return (
        <div className="flex flex-col my-2">
            <label className="text-sm font-medium text-gray-600" htmlFor={name}>{label}</label>
            <input
                className="border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-yellow-500"
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    )
}
export default Input