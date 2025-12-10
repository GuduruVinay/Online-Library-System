import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/booksSlice";

const initialFormState = {
    title: '',
    author: '',
    category:'',
    description: '',
    rating: '',
};

function AddBookPage() {
    // Hooks for state management
    // Form
    const [formData, setFormData] = useState(initialFormState);
    // For validation errors
    const [errors, setErrors] = useState({});
    // For updating Redux
    const dispatch = useDispatch();
    // For redirection
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    // Validation Logic
    const validateForm = () => {
        const newErrors = {};
        if(!formData.title.trim()) newErrors.title = 'Title is required.';
        if(!formData.author.trim()) newErrors.author = "Author is required.";
        if(!formData.category.trim()) newErrors.category = "Category is required.";
        if(!formData.description.trim()) newErrors.description = "Description is required.";

        // Rating must be a number between 1 and 5
        const ratingValue = parseFloat(formData.rating);
        if(isNaN(ratingValue) || ratingValue < 1 || ratingValue > 5) {
            newErrors.rating = "Rating must be a number between 1 and 5.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Run validation
        if(!validateForm()) {
            return;
        }

        // Prepare the New Book Object
        const newBook = {
            // Use timestamp for a simple unique ID
            id: Date.now().toString(),
            title: formData.title.trim(),
            author: formData.author.trim(),
            category: formData.category.trim(),
            rating: parseFloat(formData.rating),
            description: formData.description.trim(),
        }

        // Dispatch the action to Redux
        dispatch(addBook(newBook));

        // Redirection : Redirect the user to the Browse Books page
        navigate('/books');
    }

    const inputClass = (name) => `w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors[name] ? 'border-red-500' : 'border-gray-300'}`;

    return (
        <div className="max-w-xl mx-auto p-8 bg-white rounded-xl shadow-2xl">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">Add New Book to Library</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title Field */}
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input 
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className={inputClass('title')}
                    />
                    {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                </div>
                {/* Author Field */}
                <div>
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
                    <input 
                        type="text"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        className={inputClass('author')} 
                    />
                    {errors.author && <p className="text-red-500 text-xs mt-1">{errors.author}</p>}
                </div>
                {/* Category Field */}
                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                    <input 
                        type="text"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className={inputClass('category')}
                    />
                    {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
                </div>
                {/* Rating Field */}
                <div>
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating (1.0 to 5.0)</label>
                    <input 
                        type="text"
                        id="rating"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        step="0.1"
                        min="1"
                        max="5"
                        className={inputClass('rating')}
                    />
                    {errors.rating && <p className="text-red-500 text-xs mt-1">{errors.rating}</p>}
                </div>
                {/* Description Field */}
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        className={inputClass('description')}
                    />
                    {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                </div>
                <button type="submit" className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors shadow-md">
                    Add Book to Library
                </button>
            </form>
        </div>
    )
}

export default AddBookPage;