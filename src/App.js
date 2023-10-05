import React from 'react';

import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import HomePage from './components/HomePage';


function App() {
  return(
    <>
     <Nav/>
    <Routes>
      <Route element={<SearchPage/>} path='/search'/>
      <Route element={<HomePage/>} path='/'/>
    </Routes>
    </>
  )
}

export default App;
