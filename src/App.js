
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import './index.css';
function App() {
  return (
    <div>
      <Router >
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>

    </div >
  );
}

export default App;
