import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Build from './Build';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Build" element={<Build />} />
      </Routes>
    </Router>
  );
}

export default App;
