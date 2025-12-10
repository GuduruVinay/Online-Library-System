import { Link, useLocation } from "react-router-dom";


function NotFoundPage() {
    const location = useLocation();
    const invalidPath = location.pathname;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
            <h2 className="text-2xl font-semibold mb-4 text-red-600">Page Not Found</h2>

            <p className="text-lg text-gray-600 mb-6">
                The route
                <span className="bg-gray-200 p-1 rounded font-mono text-sm mx-1">
                    {invalidPath}
                </span>
                does not exist.
            </p>
            <Link to="/" className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors shadow-lg">
                Go to Home Page
            </Link>
        </div>
    )
}

export default NotFoundPage;