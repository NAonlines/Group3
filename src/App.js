import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feedback from './Components/Feedback/Feedback';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import Payment from './Pages/Payment/Payment';
import Registration from './Pages/Registration/Registration';
import BlankPage from './Pages/BlankPage/BlankPage';
import LoginPage from './Components/LoginPage/LoginPage';
import AuthRoute from './Components/LoginPage/AuthRoute';
import { AuthProvider } from './Components/LoginPage/AuthProvider';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Feedback />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/registration' element={<AuthRoute component={Registration} />} />
            <Route path='/signup' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/test' element={<BlankPage />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
