import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { CountdownTimer } from './routes/countdownTimer/CountdownTimer';
import { WelbexPage } from './routes/welbexPage/WelbexPage';
import { Home } from './routes/home/Home';

export const App = () => {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timer" element={<CountdownTimer />} />
        <Route path="/welbex" element={<WelbexPage />} />
      </Routes>
  );
};
