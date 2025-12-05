import Book from "./Book";

function BookList(props) {
    return (
        <div>
            {
                props.booksData.map((data) => (
                    <Book bookDetails={data} />
                ))
            }
        </div>
    )
}

export default BookList;