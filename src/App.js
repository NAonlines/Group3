import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feedback from './Components/Feedback/Feedback';
import LoginPage from './Components/LoginPage/LoginPage';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Feedback />
        <Routes>
          <Route path='/signup' element={<RegisterPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
