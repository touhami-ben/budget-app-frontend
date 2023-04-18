import NavBar from './Components/NavBar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<transactions />} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
