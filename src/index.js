import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import Home from './routes/Home'
import Exercises from './routes/Exercises';
import Charts from './routes/Charts';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />}>
        <Route path="home" element={<Home />}/>
        <Route path="exercises" element={<Exercises />}/>
        <Route path="charts" element={<Charts />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);