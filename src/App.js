import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feedback from './Components/Feedback/Feedback';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import Payment from './Pages/Payment/Payment';
import Resgistration from './Pages/Resgistration/Resgistration';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Feedback />
        <Routes>
          <Route path='/payment' element={<Payment />} />
          <Route path='/registration' element={<Resgistration />} />
          <Route path='/signup' element={<RegisterPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
