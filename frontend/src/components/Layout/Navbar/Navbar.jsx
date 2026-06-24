import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldAlert, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Add shadow when window scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Programmes', path: '/programmes' },
    { name: 'Support Our Work', path: '/support' }
  ];

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md h-20' : 'bg-white border-b border-gray-100 h-20'}`}>
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo / Brand Name */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="bg-callas-blue text-white p-2 rounded-lg transition-transform group-hover:scale-105">
            <Heart size={24} className="fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-callas-darkBlue tracking-tight leading-none">CALLAS</span>
            <span className="text-xs font-semibold text-callas-blue tracking-widest uppercase">Foundation</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${location.pathname === link.path ? 'text-callas-blue' : 'text-gray-700 hover:text-callas-blue'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Call to Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/donate"
            className="inline-flex items-center bg-callas-blue text-white px-5 py-2.5 rounded-md text-sm font-bold shadow-sm hover:bg-blue-700 active:bg-blue-800 transition-colors duration-150"
          >
            Donate
          </Link>
          <Link
            to="/get-help"
            className="inline-flex items-center gap-2 bg-callas-red text-white px-5 py-2.5 rounded-md text-sm font-bold shadow-sm hover:bg-red-700 active:bg-red-800 transition-colors duration-150"
          >
            <ShieldAlert size={18} />
            Get Help Now
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-700 hover:text-callas-blue p-2 rounded-md focus:outline-none"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute w-full left-0 bg-white shadow-xl border-b border-gray-200 transition-all duration-300 ease-in-out ${isOpen ? 'top-20 opacity-100 visible' : '-top-96 opacity-0 invisible'}`}>
        <div className="px-4 pt-3 pb-6 space-y-3 sm:px-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-3 py-2.5 rounded-md text-base font-bold transition-colors ${location.pathname === link.path ? 'bg-callas-lightBlue text-callas-darkBlue' : 'text-gray-700 hover:bg-gray-50 hover:text-callas-blue'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <Link
              to="/donate"
              className="w-full text-center bg-callas-blue text-white px-4 py-3 rounded-md text-base font-bold shadow-sm hover:bg-blue-700 transition-colors"
            >
              Donate
            </Link>
            <Link
              to="/get-help"
              className="w-full text-center bg-callas-red text-white px-4 py-3 rounded-md text-base font-bold shadow-sm flex items-center justify-center gap-2 hover:bg-red-700 transition-colors"
            >
              <ShieldAlert size={20} />
              Get Help Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;