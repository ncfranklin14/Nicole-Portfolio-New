import React from "react";
import './App.css';
import PortfolioContainer from "./components/PortfolioContainer";
import Bloodworks from "./components/Bloodworks/Bloodworks"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioContainer />} />
        <Route path="/bloodworks" element={<Bloodworks />} />
      </Routes>
      </BrowserRouter>
  );
}
export default App;

