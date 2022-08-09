import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css"
import Nav from './components/Nav'
import Loading from './UI/Loading';
import Layout from './UI/Layout';


const Home = React.lazy(() => import('./components/Home'))
const Build = React.lazy(() => import('./components/Build'))
const GettingStarted = React.lazy(() => import('./components/GettingStarted'))
const DownloadResume = React.lazy(() => import('./components/DownloadResume'))
const About =React.lazy(()=> import('./components/About'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Nav />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/build/template&&color=:color&&font=:font&&template=:template" element={<Build />} />
            <Route path="/build/getting-started&&color=:color&&template=:template" element={<GettingStarted />} />
            {/* <Route path="/templates" element={<GettingStarted />} /> */}
            <Route path="/download-resume&&template=:template&color=:color" element={<DownloadResume />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<h1 style={{ textAlign: 'center', marginTop: '60px', fontWeight: '900' }}>Not Found</h1>} />
          </Routes>
        </Layout>
      </Router>
    </Suspense>
  );
}

export default App;
