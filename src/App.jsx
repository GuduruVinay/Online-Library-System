import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFoundPage from "./components/NotFoundPage";
import HomePage from "./components/HomePage";
import BookDetailsPage from "./components/BookDetailsPage";
import BrowseBooksPage from "./components/BrowseBooksPage";
import AddBookPage from "./components/AddBookPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="books" element={<BrowseBooksPage />}/>
          <Route path="books/:category" element={<BrowseBooksPage />}/>
          <Route path="book/:bookId" element={<BookDetailsPage />} />
          <Route path="add" element={<AddBookPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
