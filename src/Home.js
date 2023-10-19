import BookList from './BookList';
import useFetch from './useFetch';

const Home = () => {
    const { info: books, isLoading, error } = useFetch('http://localhost:8000/books')

    return (
        <div className="home">
            {error && <div className='error'>{error}</div>}
            {isLoading && <div className="progress-bar"></div>}
            {books && <BookList books={books} title={'All books'} />}
        </div>
    );
}

export default Home;

//check episode 12 to filtre through genres
//<BlogList books={books.filter((book).......)} title={'Drama'} /> 