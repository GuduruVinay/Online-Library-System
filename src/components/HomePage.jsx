import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HomePage() {
    const books = useSelector((state) => state.books.books);

    const categories = useMemo(() => {
        const categorySet = new Set(books.map(book => book.category));
        return Array.from(categorySet);
    }, [books]);

    const popularBooks = books.slice(0, 3);

    return (
        <div className="space-y-12">
            <div className="text-center p-8 bg-blue-50 rounded-lg shadow-md">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
                    Welcome to the Online Library System
                </h1>
                <p className="text-xl text-gray-600">
                    Explore our diverse collection of books across various categories.
                </p>
            </div>
            <section>
                <h2 className="text-3xl font-semibold text-gray-700 mb-6 border-b pb-2">
                    Book Categories
                </h2>
                <div className="flex flex-wrap gap-4">
                    {categories.length > 0 ? (
                        categories.map((category) => (
                            <Link key={category} to={`/books/${category}`} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 shadow-md">
                                {category}
                            </Link>
                        ))
                    ) : (
                        <p className="text-gray-500">No categories available.</p>
                    )}
                </div>
            </section>
            <section>
                <h2 className="text-3xl font-semibold text-gray-700 mb-6 border-b pb-2">Popular Books</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {popularBooks.map((book) => (
                        <div key={book.id} className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-gray-900 truncate mb-1">{book.title}</h3>
                            <p className="text-sm text-gray-600 mb-3">by {book.author}</p>
                            <p className="text-sm text-blue-600 font-medium mb-4">{book.category}</p>
                            <Link to={`/book/${book.id}`} className="inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors">
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default HomePage;