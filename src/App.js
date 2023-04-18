import NavBar from './NavBar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
