import { Routes, Route } from 'react-router-dom';
import Nav from './componants/Nav';
import Resturants from './pages/Resturants';
import Booking from './pages/Booking';
import OtherProjects from './pages/OtherProjects';
import Menu from './pages/menu/Menu';
import MobileMenu from "./pages/Mobile Menu/MobileMenu";
import Calculator from './pages/Calculator/Calculator';

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/Resturants" element={<Resturants />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/OtherProjects" element={<OtherProjects />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/mobile-menu" element={<MobileMenu />} />
        <Route path="/Calculator" element = { <Calculator/> } />
      </Routes>
    </>
  );
}