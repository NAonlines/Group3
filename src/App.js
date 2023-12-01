import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feedback from './Components/Feedback/Feedback';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import PaymentPage from './Pages/PaymentPage/PaymentPage';
import Registration from './Pages/Registration/Registration';
import LoginPage from './Components/LoginPage/LoginPage';
import AuthRoute from './Components/LoginPage/AuthRoute';
import { AuthProvider } from './Components/LoginPage/AuthProvider';
import Academic from './Pages/Academic/Academic';
import ContactUs from './Pages/ContactUs/ContactUs';
import SuccessStories from './Pages/SuccessStories/SuccesStories';
import Vancancies from './Pages/Vacancies/Vacancies';
// import Intro from './Pages/Intro/Intro';
import HomePage from './Pages/HomePage/HomePage';
import ICU from './Pages/ICU/ICU';
import Other from './Pages/Other/Other';
import Rooms from './Pages/Rooms/Rooms';
import Heathcheck from './Pages/HeathCheckup/Kiemtra_sk';
import Specialties from './Pages/Special/Dvu_ck';
import Intro from './Pages/Intro/Intro';


function App() {
  return (
    <div className="App">
      {/* <>
        <Intro />

      </> */}

      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Feedback />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/registration' element={<AuthRoute component={Registration} />} />
            <Route path='/signup' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/payment' element={<AuthRoute component={PaymentPage} />} />
            <Route path='/specialties' element={<Specialties />} />
            <Route path='/academic' element={<Academic />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/successtories' element={<SuccessStories />} />
            <Route path='/vancancies' element={<Vancancies />} />
            <Route path='/icu' element={<ICU />} />
            <Route path='/rooms' element={<Rooms />} />
            <Route path='/other' element={<Other />} />
            <Route path='/heathchechkup' element={<Heathcheck />} />



          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div >
  );
}

export default App;
