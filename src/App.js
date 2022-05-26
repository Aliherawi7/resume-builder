import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Loading from './Loading';
import Layout from './UI/Layout';

const Home = React.lazy(() => import('./Home'))
const Build = React.lazy(() => import('./Build'))
const GettingStarted = React.lazy(() => import('./GettingStarted'))
const DownloadResume = React.lazy(() => import('./DownloadResume'))

//download-resume?template=0&color=e80505
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Nav />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/build/template&&color=:color&&font=:font&&template=:template" element={<Build />} />
            <Route path="/build/getting-started" element={<GettingStarted />} />
            <Route path="/templates" element={<GettingStarted />} />
            <Route path="/download-resume&&template=:template&color=:color" element={<DownloadResume />} />
            <Route path="/*" element={<h1 style={{ textAlign: 'center', marginTop: '60px', fontWeight: '900' }}>Not Found</h1>} />
          </Routes>
        </Layout>
      </Router>
    </Suspense>
  );
}

export default App;
