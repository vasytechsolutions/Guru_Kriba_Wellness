// components/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import coachPhoto from '../assets/coach-photo.jpeg'; // Replace with actual photo

const About = () => {
  return (
    <main className="pt-28 pb-20 px-6 md:px-16 lg:px-20 bg-cream min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-gold text-xs tracking-wider uppercase mb-4">✦ About Your Coach</p>
            <h1 className="font-playfair text-4xl md:text-5xl text-dark mb-6">
              Your Partner in <em className="text-green not-italic">Wellness & Transformation</em>
            </h1>
            <p className="text-brown/70 leading-relaxed mb-4">
              I'm a certified Wellness Coach and Nutritionist based in Coimbatore. My passion is helping you discover the version of yourself that is healthy, energetic, and confident — from the inside out.
            </p>
            <p className="text-brown/70 leading-relaxed mb-6">
              I believe wellness is not just about weight — it's about how you feel when you wake up every morning. My approach combines science-backed nutrition programs, personalized meal guidance, and ongoing coaching support to get you real, lasting results.
            </p>
            <Link to="/contact" className="inline-block bg-gold text-dark px-8 py-3 rounded-full font-bold hover:bg-gold-light transition-all">
              Start Your Journey →
            </Link>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-green to-green-light rounded-3xl aspect-[3/4] flex items-center justify-center relative overflow-hidden">
             <img src={coachPhoto} alt="" />
              {/* <p className="text-white/30 font-playfair text-xl italic">Your Photo Here</p> */}
            </div>
            <div className="absolute -bottom-6 -right-6 bg-dark border border-gold rounded-2xl p-5 text-center">
              <span className="font-playfair text-3xl text-gold block">6+</span>
              <p className="text-white/60 text-xs uppercase tracking-wide">Years of Nutrition & Wellness Coaching</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="font-playfair text-2xl text-dark mb-4">My Philosophy</h3>
            <p className="text-brown/70 leading-relaxed mb-4">
              True wellness isn't about quick fixes or extreme diets. It's about creating sustainable habits that nourish your body, mind, and spirit. I work with each client to understand their unique body chemistry, lifestyle, and goals — then build a plan that fits seamlessly into their life.
            </p>
            <p className="text-brown/70 leading-relaxed">
              Whether you want to lose weight, gain energy, improve your skin, or simply feel better in your own skin — I'm here to guide you every step of the way.
            </p>
          </div>
          <div className="bg-dark rounded-2xl p-8 shadow-md">
            <h3 className="font-playfair text-2xl text-gold mb-4">Certifications & Expertise</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/80"><span className="text-gold">✓</span> Certified Wellness & Nutrition Coach</li>
              <li className="flex items-center gap-3 text-white/80"><span className="text-gold">✓</span> Fat Loss & Body Composition Specialist</li>
              <li className="flex items-center gap-3 text-white/80"><span className="text-gold">✓</span> Cellular Nutrition & Micronutrient Expert</li>
              <li className="flex items-center gap-3 text-white/80"><span className="text-gold">✓</span> Sports & Performance Nutrition</li>
              <li className="flex items-center gap-3 text-white/80"><span className="text-gold">✓</span> Mindset & Habit Transformation Coach</li>
            </ul>
          </div>
        </div>

        <div className="text-center py-12 border-t border-brown/10">
          <h2 className="font-playfair text-3xl text-dark mb-4">Ready to Transform Your Life?</h2>
          <p className="text-brown/70 mb-6 max-w-lg mx-auto">Book your free consultation today and take the first step toward a healthier, happier you.</p>
          <Link to="/contact" className="inline-block bg-gradient-to-r from-gold to-gold-light text-dark px-10 py-4 rounded-full font-bold hover:shadow-gold transition-all">
            Book Free Consultation
          </Link>
        </div>
      </div>
    </main>
  );
};

export default About;