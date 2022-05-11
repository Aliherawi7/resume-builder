import React,{ Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Loading from './Loading';

const Home = React.lazy(() => import('./Home'))
const Build = React.lazy(() => import('./Build'))


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Build" element={<Build />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
