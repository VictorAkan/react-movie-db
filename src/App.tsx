// import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import SingleMovie from './pages/SingleMovie';

function App() {
  return (
    <div className="bg-slate-200 h-[100vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
      </Routes>
    </div>
  );
}

export default App;
