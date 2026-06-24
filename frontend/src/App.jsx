import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/Home/Home';

// temporary path placeholders until full page files are generated
const PagePlaceholder = ({ name }) => (
  <div className="container mx-auto px-4 py-20 text-center min-h-[60vh] flex flex-col justify-center items-center">
    <h1 className="text-3xl font-bold text-callas-darkBlue mb-2">{name} Page</h1>
    <p className="text-gray-600">This section is configured and ready for implementation.</p>
  </div>
);

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<PagePlaceholder name="About Us" />} />
          <Route path="/programmes" element={<PagePlaceholder name="Programmes" />} />
          <Route path="/support" element={<PagePlaceholder name="Support Our Work" />} />
          <Route path="/donate" element={<PagePlaceholder name="Donate" />} />
          <Route path="/get-help" element={<PagePlaceholder name="Get Help Now" />} />
          <Route path="/volunteer" element={<PagePlaceholder name="Volunteer" />} />
          <Route path="*" element={<PagePlaceholder name="404 Not Found" />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;