import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import  Navbar  from './components/NavBar'
import Homepage from './pages/Home'
import Jobs from "./pages/Jobs"
import Cvpage from './pages/CV';
import CompanyPages from './pages/AboutCompany/index';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path = "/CV" element={<Cvpage/>}/>
        <Route path ="/company" element ={<CompanyPages/>}/>
      </Routes>
    </>
  );
}

export default App;
