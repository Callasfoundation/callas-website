import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import GetHelp from '../pages/GetHelp';
import Donate from '../pages/Donate';
import Contact from '../pages/Contact';
import Programmes from '../pages/Programmes';
import ProgrammeDetail from '../pages/ProgrammeDetail';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="get-help" element={<GetHelp />} />
        <Route path="donate" element={<Donate />} />
        <Route path="contact" element={<Contact />} />
        <Route path="programmes" element={<Programmes />} />
        <Route path="programmes/:slug" element={<ProgrammeDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}