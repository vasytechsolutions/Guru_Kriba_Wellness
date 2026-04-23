// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/#services' },
    { name: 'Products', path: '/#products' },
    { name: 'Results', path: '/#results' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleHashScroll = (e, hash) => {
    if (location.pathname !== '/') {
      window.location.href = hash;
      return;
    }
    e.preventDefault();
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 transition-all duration-300 ${
      scrolled ? 'bg-dark/95 backdrop-blur-md border-b border-gold/30' : 'bg-dark/90 backdrop-blur-sm'
    }`}>
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Gurukrupa Wellness" className="h-16 w-auto" />
        <div className="font-playfair text-xl text-gold tracking-wide">
          Gurukrupa <span className="italic text-gold-light">Wellness</span>
        </div>
      </Link>

      <ul className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <li key={link.name}>
            {link.path.startsWith('/#') ? (
              <a
                href={link.path}
                onClick={(e) => handleHashScroll(e, link.path.substring(1))}
                className="text-white/80 text-xs font-semibold tracking-wide uppercase hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link
                to={link.path}
                className={`text-xs font-semibold tracking-wide uppercase transition-colors ${
                  location.pathname === link.path ? 'text-gold' : 'text-white/80 hover:text-gold'
                }`}
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className="hidden md:block bg-gold text-dark px-6 py-2 rounded-full text-xs font-bold tracking-wide hover:bg-gold-light hover:shadow-gold transition-all"
      >
        Start Your Journey →
      </Link>

      {/* Mobile menu button */}
      <button className="md:hidden text-white text-2xl">☰</button>
    </nav>
  );
};

export default Navbar;