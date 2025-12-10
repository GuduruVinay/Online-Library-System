import { Link, Outlet } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="bg-gray-800 p-4 sticky top-0 z-10">
                <div className="container mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">
                    <Link to="/" className="text-white text-2xl font-bold hover:text-blue-400 transition-colors">
                        Online Library
                    </Link>
                    <div className="space-x-4">
                        <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                            Home
                        </Link>
                        <Link to="/books" className="text-gray-300 hover:text-white transition-colors">
                            Browse Books
                        </Link>
                        <Link to="/add" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded transition-colors">
                            Add Book
                        </Link>
                    </div>
                </div>
            </nav>
            {/* Outlet renders the matched child route component */}
            <main className="container p-4 mx-auto">
                <Outlet />
            </main>
        </>
    )
}

export default Navbar