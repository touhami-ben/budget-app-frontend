import NavBar from './Components/NavBar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import New from "./Pages/New";
import Index from "./Pages/Index";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions/new" element={<New />} />
          <Route path="/transactions" element={<Index />} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
