import { Link } from "react-router-dom";

const BlogList = ({ books, title }) => {

    return (
        <div className="book-list">
            <div className="bl-left">
                <h2 className="book-list-title">{title}</h2>
                {books.map(book => (
                    <div className="book-preview" key={book.id} >
                        <Link to={`/books/${book.id}`}>
                            <h2>{book.title}</h2>
                            <p>Written by <span>{book.author}</span></p>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="bl-right">
                <h3>Discover & read more</h3>
                <div className="sign-up">
                    <Link to='/NotFound'>Continue with Amazon</Link>
                    <Link to='/NotFound'>Continue with Apple</Link>
                    <Link to='/NotFound'>Sign up with email</Link>
                </div>
            </div>
        </div>
    );
}

export default BlogList
