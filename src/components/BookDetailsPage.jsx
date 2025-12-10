import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function BookDetailsPage() {
    // Get the dynamic bookId from the URL
    const { bookId } = useParams();
    const navigate = useNavigate();

    // Find the selected book from the Redux state
    const book = useSelector((state) => state.books.books.find((b) => b.id === bookId))

    if(!book) {
        return (
            <div className="text-center p-8 bg-red-100 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-red-700">Book Not Found</h1>
                <p className="text-gray-600 mt-2">Could not find a book with ID: {bookId}.</p>
                <button onClick={() => navigate('/books')} className="mt-6 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors">
                    Back to Browse
                </button>
            </div>
        )
    }

    // Show detailed information
    return (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl space-y-6 flex flex-col justify-center">
            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 border-b pb-3">{book.title}</h1>
            <div className="flex flex-col gap-4 md:flex-row md:gap-16 md:justify-center">
                <img src={book.coverImage} alt="{book.title} Cover Image" width={400}/>
                <div className="flex flex-col gap-4 md:justify-center">
                    <p>
                        <span className="font-semibold text-gray-700">Author :</span> {book.author}
                    </p>
                    <p>
                        <span className="font-semibold text-gray-700">Category :</span>
                        <span className="ml-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{book.category}</span>
                    </p>
                    <p className="col-span-2">
                        <span className="font-semibold text-gray-700">Rating :</span>
                        <span className="ml-2 text-yellow-500 font-bold">
                            {book.rating} / 5
                            {/* Simple representation of stars based on rating */}
                            {'⭐'.repeat(Math.round(book.rating))}
                        </span>
                    </p>
                </div>
            </div>
            <div className="pt-4 border-t">
                <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2">Description</h2>
                <p className="text-gray-600 leading-relaxed">{book.description}</p>
            </div>
            {/* Back to Browse Button */}
            <button onClick={() => navigate('/books')} className="m-auto md:mt-8 px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors shandow-lg">
                &larr; Back to Browse
            </button>
        </div>
    )
}

export default BookDetailsPage;