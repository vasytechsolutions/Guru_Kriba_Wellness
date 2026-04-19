// components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-dark pt-16 pb-8 px-6 md:px-16 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Gurukrupa Wellness" className="h-8 w-auto" />
              <div className="font-playfair text-xl text-gold">Gurukrupa <span className="italic text-gold-light">Wellness</span></div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed">
              Certified Wellness Coach & Nutritionist, transforming lives through personalized nutrition and holistic coaching in Coimbatore.
            </p>
          </div>
          <div>
            <h5 className="text-gold text-xs font-bold tracking-wider uppercase mb-5">Services</h5>
            <ul className="space-y-2">
              <li><Link to="/#services" className="text-white/45 text-sm hover:text-gold transition-colors">Weight Management</Link></li>
              <li><Link to="/#services" className="text-white/45 text-sm hover:text-gold transition-colors">Nutrition Coaching</Link></li>
              <li><Link to="/#services" className="text-white/45 text-sm hover:text-gold transition-colors">Targeted Health Improvement</Link></li>
              <li><Link to="/#services" className="text-white/45 text-sm hover:text-gold transition-colors">Sports Nutrition</Link></li>
              <li><Link to="/#services" className="text-white/45 text-sm hover:text-gold transition-colors">Kids & Family Wellness</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-gold text-xs font-bold tracking-wider uppercase mb-5">Nutrition Programs</h5>
            <ul className="space-y-2">
              <li><Link to="/#products" className="text-white/45 text-sm hover:text-gold transition-colors">Nutritionized Meal Plans</Link></li>
              <li><Link to="/#products" className="text-white/45 text-sm hover:text-gold transition-colors">Protein & Recovery Range</Link></li>
              <li><Link to="/#products" className="text-white/45 text-sm hover:text-gold transition-colors">Collagen Beauty Blend</Link></li>
              <li><Link to="/#products" className="text-white/45 text-sm hover:text-gold transition-colors">Sports Performance Range</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-gold text-xs font-bold tracking-wider uppercase mb-5">Connect</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/45 text-sm hover:text-gold transition-colors">Instagram</a></li>
              <li><a href="#" className="text-white/45 text-sm hover:text-gold transition-colors">Facebook</a></li>
              <li><a href="#" className="text-white/45 text-sm hover:text-gold transition-colors">WhatsApp</a></li>
              <li><a href="#" className="text-white/45 text-sm hover:text-gold transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-sm">© 2025 Gurukrupa Wellness. Made with ❤️ in Coimbatore · <span className="text-gold">Certified Wellness Coach</span></p>
          <p className="font-playfair italic text-gold/40 text-sm">"Born to Win"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;