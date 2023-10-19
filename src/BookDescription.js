import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BookDescription = () => {
    const { id } = useParams();
    const { info: book, isLoading, error } = useFetch('http://localhost:8000/books/' + id);
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch('http://localhost:8000/books/' + book.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/')
        })
    }

    return (
        <div className="book-description">
            {isLoading && <div className="progress-bar"></div>}
            {error && <div className='error'>{error}</div>}
            {book && (
                <article>
                    <h2>{book.title}</h2>
                    <p className="book-author">Written by {book.author}</p>
                    <p className="book-body">{book.body}</p>
                    <button onClick={handleDelete} className='delete-btn'>Delete from library</button>
                </article>
            )}
        </div>
    );
}

export default BookDescription;
