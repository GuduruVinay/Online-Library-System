import BookList from "./components/BookList";
import { Books } from "./utils/mockData";

function App() {
  return (
    <main>
      <h1>Online Library System</h1>
      <BookList booksData={Books} />
    </main>
  )
}

export default App;