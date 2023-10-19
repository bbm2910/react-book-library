import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddBook from './AddBook';
import BookDescription from './BookDescription';
import NotFound from './NotFound';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/addbook' element={< AddBook />}></Route>
            <Route exact path='/books/:id' element={< BookDescription />}></Route>
            <Route exact path='*' element={< NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
