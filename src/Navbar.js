import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Simple <span>React</span> book library</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/addbook'>Add new book</Link>
            </div>
        </nav>
    );
}

export default Navbar;
