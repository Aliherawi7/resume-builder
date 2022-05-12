import React,{ Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Loading from './Loading';

const Home = React.lazy(() => import('./Home'))
const Build = React.lazy(() => import('./Build'))
const GettingStarted = React.lazy(()=> import('./GettingStarted'))


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/build" element={<Build />} />
          <Route path="/build/getting-started" element={<GettingStarted />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
