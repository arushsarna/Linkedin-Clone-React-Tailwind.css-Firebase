
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import './index.css';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Router >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/feed" element={
            <><Header /><Home /><Footer /></>
          } />
        </Routes>
      </Router>

    </div >
  );
}

export default App;
