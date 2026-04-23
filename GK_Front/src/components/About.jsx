// components/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import coachImage from '../assets/coach-photo.jpg'; // Add your coach photo

const About = () => {
  return (
    <main className="pt-28 pb-20 px-6 md:px-16 lg:px-20 bg-cream min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Hero About Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-gold text-xs tracking-wider uppercase mb-4">✦ About Your Coach</p>
            <h1 className="font-playfair text-4xl md:text-5xl text-dark mb-4">
              Bhargavi | <em className="text-gold not-italic">Wellness Coach & Nutrition Consultant</em>
            </h1>
            <p className="font-cormorant text-2xl text-gold italic mb-6">
              "Born to Win. Built to Transform."
            </p>
            <p className="text-brown/70 leading-relaxed mb-4">
              With a passion for holistic well-being and a heart full of purpose, I guide individuals towards a healthier, more energetic version of themselves.
            </p>
            <p className="text-brown/70 leading-relaxed mb-4">
              Based in Coimbatore, I specialise in weight management, targeted health improvement and building sustainable healthy habits — tailored to your unique lifestyle and goals.
            </p>
            <p className="text-brown/70 leading-relaxed mb-6">
              I don't just coach. I walk this journey with you — with science-backed nutrition, genuine care, and unwavering belief in your potential.
            </p>
            <p className="font-playfair text-lg text-gold italic">
              Your wellness. Your win. Let's begin.
            </p>
            <Link to="/contact" className="inline-block mt-6 bg-gold text-dark px-8 py-3 rounded-full font-bold hover:bg-gold-light transition-all">
              Start Your Journey →
            </Link>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-gold/20 to-green/20 rounded-3xl aspect-[3/4] flex items-center justify-center relative overflow-hidden border-2 border-gold/30">
              {coachImage ? (
                <img 
                  src={coachImage} 
                  alt="Bhargavi - Wellness Coach" 
                  className="w-full h-full object-cover rounded-3xl"
                />
              ) : (
                <p className="text-brown/40 font-playfair text-xl italic">Bhargavi<br />Wellness Coach</p>
              )}
            </div>
            <div className="absolute -bottom-6 -right-6 bg-dark border border-gold rounded-2xl p-5 text-center">
              <span className="font-playfair text-3xl text-gold block">6+</span>
              <p className="text-white/60 text-xs uppercase tracking-wide">Years of Wellness & Nutrition Coaching</p>
            </div>
            <div className="absolute -top-4 -left-4 bg-gold/10 backdrop-blur-sm rounded-full p-3 border border-gold/30">
              <span className="text-gold text-2xl">✨</span>
            </div>
          </div>
        </div>

        {/* Philosophy & Certifications */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-gold/10 hover:shadow-lg transition-all">
            <h3 className="font-playfair text-2xl text-dark mb-4">My Philosophy</h3>
            <p className="text-brown/70 leading-relaxed mb-4">
              True wellness isn't about quick fixes or extreme diets. It's about creating sustainable habits that nourish your body, mind, and spirit. I work with each client to understand their unique body chemistry, lifestyle, and goals — then build a plan that fits seamlessly into their life.
            </p>
            <p className="text-brown/70 leading-relaxed">
              Whether you want to lose weight, gain energy, improve your skin, or simply feel better in your own skin — I'm here to guide you every step of the way.
            </p>
            <div className="mt-6 pt-4 border-t border-gold/20">
              <p className="text-gold font-playfair italic">"Born to Win — and so are you."</p>
            </div>
          </div>
          <div className="bg-dark rounded-2xl p-8 shadow-md hover:shadow-gold/20 transition-all">
            <h3 className="font-playfair text-2xl text-gold mb-4">Certifications & Expertise</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/80"><span className="text-gold text-lg">✓</span> Certified Wellness & Nutrition Coach</li>
              <li className="flex items-center gap-3 text-white/80"><span className="text-gold text-lg">✓</span> Fat Loss & Body Composition Specialist</li>
              <li className="flex items-center gap-3 text-white/80"><span className="text-gold text-lg">✓</span> Cellular Nutrition & Micronutrient Expert</li>
              <li className="flex items-center gap-3 text-white/80"><span className="text-gold text-lg">✓</span> Sports & Performance Nutrition</li>
              <li className="flex items-center gap-3 text-white/80"><span className="text-gold text-lg">✓</span> Mindset & Habit Transformation Coach</li>
            </ul>
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <span>📍 Based in Coimbatore</span>
                <span>•</span>
                <span>🌿 Holistic Approach</span>
                <span>•</span>
                <span>💚 Science-Backed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-gold/10">
            <div className="text-3xl font-playfair font-bold text-gold mb-2">500+</div>
            <div className="text-brown/60 text-xs uppercase tracking-wide">Lives Transformed</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-gold/10">
            <div className="text-3xl font-playfair font-bold text-gold mb-2">6+</div>
            <div className="text-brown/60 text-xs uppercase tracking-wide">Years Experience</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-gold/10">
            <div className="text-3xl font-playfair font-bold text-gold mb-2">95%</div>
            <div className="text-brown/60 text-xs uppercase tracking-wide">Client Satisfaction</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-gold/10">
            <div className="text-3xl font-playfair font-bold text-gold mb-2">24/7</div>
            <div className="text-brown/60 text-xs uppercase tracking-wide">Support & Guidance</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-12 border-t border-brown/10 bg-gradient-to-r from-gold/5 to-transparent rounded-2xl">
          <h2 className="font-playfair text-3xl text-dark mb-4">Ready to Transform Your Life?</h2>
          <p className="text-brown/70 mb-6 max-w-lg mx-auto">
            Book your free consultation today and take the first step toward a healthier, happier you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="inline-block bg-gradient-to-r from-gold to-gold-light text-dark px-10 py-4 rounded-full font-bold hover:shadow-gold transition-all">
              Book Free Consultation
            </Link>
            <Link to="/#results" className="inline-block border-2 border-gold text-dark px-10 py-4 rounded-full font-bold hover:bg-gold/10 transition-all">
              See Success Stories
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;