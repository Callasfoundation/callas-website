import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';

// Core Navigation Page Imports
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Programmes from './pages/Programmes/Programmes';
import SupportOurWork from './pages/Support/SupportOurWork';
import Donate from './pages/Donate/Donate';
import GetHelp from './pages/GetHelp/GetHelp';
import Volunteer from './pages/Volunteer/Volunteer';
import Contact from './pages/Contact/Contact';

// Detailed Sub-Programme View Imports
import AccessToJustice from './pages/Programmes/AccessToJustice';
import PsychosocialSupport from './pages/Programmes/PsychosocialSupport';
import GBVTraining from './pages/Programmes/GBVTraining';
import BBBBoys from './pages/Programmes/BBBBoys';
import CommunityKitchen from './pages/Programmes/CommunityKitchen';
import HumanRightsClub from './pages/Programmes/HumanRightsClub';
import MensEngagement from './pages/Programmes/MensEngagement';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {/* Main Top-Level Operational Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/support" element={<SupportOurWork />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/get-help" element={<GetHelp />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/contact" element={<Contact />} />

          {/* Deep-Linked Specific Program Sub-Routes */}
          <Route path="/programmes/access-to-justice" element={<AccessToJustice />} />
          <Route path="/programmes/psychosocial-support" element={<PsychosocialSupport />} />
          <Route path="/programmes/gbv-training" element={<GBVTraining />} />
          <Route path="/programmes/bbb-boys" element={<BBBBoys />} />
          <Route path="/programmes/community-kitchen" element={<CommunityKitchen />} />
          <Route path="/programmes/human-rights-club" element={<HumanRightsClub />} />
          <Route path="/programmes/mens-engagement" element={<MensEngagement />} />

          {/* 404 Fallback Route Handling */}
          <Route path="*" element={
            <div className="container mx-auto px-4 py-20 text-center min-h-[60vh] flex flex-col justify-center items-center">
              <h1 className="text-3xl font-black text-callas-darkBlue mb-2">404 - PAGE NOT FOUND</h1>
              <p className="text-gray-600 text-sm max-w-sm">The route schema parameters you specified do not link to any registered UI view context.</p>
              <Link to="/" className="mt-6 bg-callas-blue text-white font-bold text-xs px-5 py-2.5 rounded uppercase tracking-wider shadow">Return to Home</Link>
            </div>
          } />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;