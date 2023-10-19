import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState();
    const [isLoading, setisLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { title, author, body };

        setisLoading(true)

        fetch('http://localhost:8000/books', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(book)
        }).then(() => {
            console.log('Book added succesfully');
            setisLoading(false);
            navigate('/')
        })
    }

    return (
        <div className="add-book">
            <h2>Add a new book</h2>
            <form onSubmit={handleSubmit}>
                <label>Book title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Book author</label>
                <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <label>Book description</label>
                <textarea
                    required
                    rows="15"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                {!isLoading && <button>Add book to library</button>}
                {isLoading && <button disabled>Adding...</button>}
            </form>
        </div>
    );
}

export default AddBook;
