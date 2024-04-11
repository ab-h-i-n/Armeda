import React from 'react';
import Header from './Components/Header/Header';
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
