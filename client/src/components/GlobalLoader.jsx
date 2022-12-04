// create a global spinner component that will be used in the Suspense component
// using tailwindcss

export default function GlobalLoader() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
    )
}