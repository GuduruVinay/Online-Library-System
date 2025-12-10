import { useState , useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

function BrowseBooksPage() {
    // Hooks for data, routing, and local state
    const allBooks = useSelector((state) => state.books.books);
    // Dynamic Category from URL
    const { category } = useParams();
    // Search State
    const [searchTerm, setSearchTerm] = useState('');

    // Filtering Logic (Combined Category and Search)
    const filteredBooks = useMemo(() => {
        let currentBooks = allBooks;

        // Filter by Category
        if(category) {
            currentBooks = currentBooks.filter((book) => book.category === category);
        }

        // Filter by Search Term
        if(searchTerm) {
            const lowerSearch = searchTerm.toLowerCase();
            currentBooks = currentBooks.filter((book) =>
                // Filter by title or author 
                book.title.toLowerCase().includes(lowerSearch) || 
                book.author.toLowerCase().includes(lowerSearch)
            )
        }

        return currentBooks;
    }, [allBooks, category, searchTerm]);

    // Display message for current filters
    const headerText = category ? `Browsing Category: ${category}` : 'Browse All Books';

    return (
        <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800">{headerText}</h1>
            {/* Search Functionality */}
            <div className="w-full">
                <input 
                    type="text"
                    placeholder="Search by Title or Author..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 transition duration-150"
                />
            </div>
            <div className="text-xl text-gray-600">
                Showing {filteredBooks.length} results.
            </div>
            {/* Book List Display */}
            {filteredBooks.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBooks.map((book) => (
                        <div key={book.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-blue-500">
                            <h3 className="text-2xl font-bold text-gray-900 mb-1 truncate">{book.title}</h3>
                            <p className="text-sm text-gray-600 italic mb-2">by {book.author}</p>
                            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{book.category}</span>
                            <p className="text-gray-700 mt-3 line-clamp-2">{book.description}</p>
                            {/* View Details Link */}
                            <Link to={`/book/${book.id}`} className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors">View Details &rarr;</Link>
                        </div>
                    ))}
                </div>
                ) : (
                    <div className="p-8 text-center bg-yellow-50 rounded-lg">
                        <p className="text-xl text-yellow-800">
                            No books found matching the current filters.
                        </p>
                        <button onClick={() => {setSearchTerm('');}} className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors">
                            Clear Search
                        </button>
                    </div>
                )}   
        </div>        
    )
}

export default BrowseBooksPage;