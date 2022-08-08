
import './App.css';
import { useEffect, useState } from 'react';
import ListadoPeliculas from './views/ListadoPeliculas';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Blog from './views/Blog';

function App() {


  return (
    <Router>
          <Routes>
            <Route path='/' element={<ListadoPeliculas/>}/>
            <Route path='/blog' element={<Blog/>}/>
          </Routes>
          
    </Router>
      
  );
}

export default App;
