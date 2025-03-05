import './App.css';
import Header from './components/MyHeader';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import TourDetail from './pages/TourDetail';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <MyNavbar></MyNavbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/tours/:id' element={<TourDetail />} />
        </Routes>
        <MyFooter></MyFooter>
      </Router>
    </div>
  );
}

export default App;
