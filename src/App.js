import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  let pageSize = 6;
  const [progress, setProgress] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <LoadingBar color='#f11946' height={2} progress={progress} />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <News
                setProgress={setProgress}
                key='general'
                pageSize={pageSize}
                country='nz'
                category='general'
              />
            }
          />
          <Route
            exact
            path='/health'
            element={
              <News
                setProgress={setProgress}
                key='health'
                pageSize={pageSize}
                country='nz'
                category='health'
              />
            }
          />
          <Route
            exact
            path='/entertainment'
            element={
              <News
                setProgress={setProgress}
                key='entertainment'
                pageSize={pageSize}
                country='nz'
                category='entertainment'
              />
            }
          />
          <Route
            exact
            path='/business'
            element={
              <News
                setProgress={setProgress}
                key='business'
                pageSize={pageSize}
                country='nz'
                category='business'
              />
            }
          />
          <Route
            exact
            path='/science'
            element={
              <News
                setProgress={setProgress}
                key='science'
                pageSize={pageSize}
                country='nz'
                category='science'
              />
            }
          />
          <Route
            exact
            path='/sports'
            element={
              <News
                setProgress={setProgress}
                key='sports'
                pageSize={pageSize}
                country='nz'
                category='sports'
              />
            }
          />
          <Route
            exact
            path='/technology'
            element={
              <News
                setProgress={setProgress}
                key='technology'
                pageSize={pageSize}
                country='nz'
                category='technology'
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
