import NavBar from './Components/NavBar';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import New from "./Pages/New";
import Index from "./Pages/Index";
import Edit from "./Pages/Edit";
import Show from "./Pages/Show";
import FourOFour from './Pages/Four0Four';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Index />} />
          <Route path="/transactions/new" element={<New />} />
          <Route path="/transactions/:index" element={<Show />} />
          <Route path="/transactions/:index/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
