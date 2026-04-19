// components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-placeholder.jpg';

const Home = () => {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="min-h-screen bg-dark grid md:grid-cols-2 items-center relative overflow-hidden">
        <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full bg-gradient-radial from-gold/15 to-transparent pointer-events-none" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-gradient-radial from-green/20 to-transparent pointer-events-none" />

        <div className="px-6 md:px-16 lg:px-20 py-32 md:py-24 z-10">
          <span className="inline-block bg-gold/15 border border-gold/40 text-gold text-xs tracking-wider uppercase px-5 py-2 rounded-full mb-6 animate-fadeUp">
            ✦ Certified Wellness Coach & Nutritionist
          </span>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-4 animate-fadeUp animation-delay-200">
            Transform Your <em className="text-gold not-italic">Health,</em><br />
            Transform Your Life
          </h1>
          <p className="font-cormorant text-xl md:text-2xl text-gold-light italic mb-6 animate-fadeUp animation-delay-300">
            "Born to Win — and so are you."
          </p>
          <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-md mb-10 animate-fadeUp animation-delay-400">
            Personalized nutrition plans, science-backed nutrition programs and expert coaching to help you achieve your ideal weight, energy, and vitality — for good.
          </p>
          <div className="flex flex-wrap gap-4 animate-fadeUp animation-delay-500">
            <Link to="/contact" className="bg-gradient-to-r from-gold to-gold-light text-dark px-8 py-3 rounded-full font-bold shadow-gold hover:shadow-gold/50 hover:-translate-y-1 transition-all">
              Book a Free Consultation
            </Link>
            <a href="#results" className="border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:border-gold hover:text-gold transition-all">
              See Real Results
            </a>
          </div>
          <div className="flex gap-10 mt-14 animate-fadeUp animation-delay-600">
            <div>
              <h3 className="font-playfair text-3xl text-gold">500+</h3>
              <p className="text-white/50 text-xs tracking-wide uppercase">Lives Transformed</p>
            </div>
            <div>
              <h3 className="font-playfair text-3xl text-gold">6+</h3>
              <p className="text-white/50 text-xs tracking-wide uppercase">Years Experience</p>
            </div>
            <div>
              <h3 className="font-playfair text-3xl text-gold">95%</h3>
              <p className="text-white/50 text-xs tracking-wide uppercase">Client Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="relative hidden md:flex items-center justify-center h-screen">
          <div className="relative w-[400px] h-[520px] rounded-[200px_200px_160px_160px] overflow-hidden border border-gold/20 shadow-2xl">
            <img src={heroImage} alt="Wellness Coach" className="w-full h-full object-cover object-top" />
          </div>
          <div className="absolute top-32 -left-6 bg-dark/90 backdrop-blur-md border border-gold/30 rounded-2xl p-4 animate-float">
            <div className="text-gold text-xs tracking-wider uppercase">Today's Goal</div>
            <div className="font-playfair text-xl text-white">🥗 Protein First</div>
          </div>
          <div className="absolute bottom-32 -right-6 bg-dark/90 backdrop-blur-md border border-gold/30 rounded-2xl p-4 animate-float animation-delay-1000">
            <div className="text-gold text-xs tracking-wider uppercase">Client Result</div>
            <div className="font-playfair text-xl text-white">−25 kg in 180 days</div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section id="about" className="py-24 px-6 md:px-16 lg:px-20 bg-cream">
        <div className="max-w-6xl mx-auto">
          <p className="text-gold text-xs tracking-wider uppercase mb-4">✦ About Your Coach</p>
          <h2 className="font-playfair text-3xl md:text-4xl text-dark mb-8">
            Your Partner in <em className="text-green not-italic">Wellness & Transformation</em>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-brown/70 leading-relaxed mb-4">
                I'm a certified Wellness Coach and Nutritionist based in Coimbatore. My passion is helping you discover the version of yourself that is healthy, energetic, and confident — from the inside out.
              </p>
              <p className="text-brown/70 leading-relaxed">
                I believe wellness is not just about weight — it's about how you feel when you wake up every morning. My approach combines science-backed nutrition programs, personalized meal guidance, and ongoing coaching support to get you real, lasting results.
              </p>
              <Link to="/about" className="inline-block mt-6 text-gold font-semibold hover:underline">Read More →</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border-l-3 border-gold rounded-r-xl p-4 shadow-sm">
                <h4 className="font-bold text-dark text-sm">Nutrition Certified</h4>
                <p className="text-brown/60 text-xs">Wellness & Nutrition Coach</p>
              </div>
              <div className="bg-white border-l-3 border-gold rounded-r-xl p-4 shadow-sm">
                <h4 className="font-bold text-dark text-sm">Fat Loss Specialist</h4>
                <p className="text-brown/60 text-xs">Body Composition Expert</p>
              </div>
              <div className="bg-white border-l-3 border-gold rounded-r-xl p-4 shadow-sm">
                <h4 className="font-bold text-dark text-sm">Mindset & Habit Coach</h4>
                <p className="text-brown/60 text-xs">Build routines that stick</p>
              </div>
              <div className="bg-white border-l-3 border-gold rounded-r-xl p-4 shadow-sm">
                <h4 className="font-bold text-dark text-sm">24/7 Accountability</h4>
                <p className="text-brown/60 text-xs">Real-time support & tracking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 px-6 md:px-16 lg:px-20 bg-dark">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-gold text-xs tracking-wider uppercase mb-4">✦ What I Offer</p>
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-4">
            Programs Designed <em className="text-gold not-italic">Just for You</em>
          </h2>
          <p className="text-white/55 max-w-lg mx-auto">Every body is different. I create personalized plans that fit your lifestyle, goals, and health needs.</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { icon: '⚖️', title: 'Weight Management', desc: 'Sustainable fat loss and muscle building programs using clinically proven protein supplements and personalized calorie coaching.' },
            { icon: '🥗', title: 'Nutrition Coaching', desc: 'Custom meal plans based on your body composition, health goals, and food preferences.' },
            { icon: '💧', title: 'Deep Cellular Nutrition', desc: 'Science-backed micronutrient programs improving energy, immunity, gut health, and metabolic function.' },
            { icon: '🏋️', title: 'Fit & Active Plan', desc: 'Combining nutrition with movement — workout plans, step goals, and active lifestyle coaching.' },
            { icon: '✨', title: 'Skin & Beauty Nutrition', desc: 'Advanced collagen, antioxidant, and hydration products for glowing skin and hair.' },
            { icon: '💚', title: 'Targeted Health Improvement', desc: 'Heart health, bone strength, sleep, stress relief, kids\' nutrition, and healthy ageing.' }
          ].map((service, i) => (
            <div key={i} className="bg-white/5 border border-gold/15 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
              <span className="text-3xl block mb-4">{service.icon}</span>
              <h3 className="font-playfair text-xl text-white mb-2">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-24 px-6 md:px-16 lg:px-20 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-between items-end mb-12">
            <div>
              <p className="text-gold text-xs tracking-wider uppercase mb-2">✦ Nutrition Products</p>
              <h2 className="font-playfair text-3xl md:text-4xl text-dark">Science-Backed <em className="text-green not-italic">Nutrition</em></h2>
            </div>
            <p className="text-brown/70 max-w-md">I guide you to the right nutrition products for your specific goals — no guessing, no waste.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: '🥤', bg: 'from-green-50 to-green-100', title: 'Nutritionized Meal Plans', desc: 'Personalized, high-protein meal plans designed around your body and goals.', tag: 'Weight Management' },
              { icon: '💊', bg: 'from-yellow-50 to-amber-100', title: 'Essential Vitamins & Minerals', desc: 'Targeted supplementation to fill nutritional gaps and boost immunity.', tag: 'Cellular Nutrition' },
              { icon: '🌸', bg: 'from-pink-50 to-rose-100', title: 'Collagen Beauty Blend', desc: 'Skin, hair and nail nutrition from within for visible glow.', tag: 'Beauty & Skin' },
              { icon: '⚡', bg: 'from-blue-50 to-cyan-100', title: 'Sports Performance Range', desc: 'Advanced protein, energy and recovery nutrition for active lifestyles.', tag: 'Sports Nutrition' }
            ].map((product, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:-translate-y-2 transition-all">
                <div className={`h-36 flex items-center justify-center text-4xl bg-gradient-to-br ${product.bg}`}>
                  {product.icon}
                </div>
                <div className="p-5">
                  <h4 className="font-playfair text-base text-dark mb-1">{product.title}</h4>
                  <p className="text-brown/60 text-xs leading-relaxed mb-3">{product.desc}</p>
                  <span className="inline-block bg-green/10 text-green text-xs font-semibold px-3 py-1 rounded-full">{product.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section id="results" className="py-24 px-6 md:px-16 lg:px-20 bg-gradient-to-br from-dark to-dark/95 relative overflow-hidden">
        <div className="absolute top-0 left-10 text-[30rem] font-playfair text-gold/5 leading-none pointer-events-none">"</div>
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-gold text-xs tracking-wider uppercase mb-4">✦ Real Results</p>
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-4">Before & <em className="text-gold not-italic">After</em> Stories</h2>
          <p className="text-white/55 max-w-md mx-auto">Real clients. Real transformations. Real lives changed through consistent coaching.</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-7 mb-16">
          {[
            { before: '🙁', after: '😊', result: 'Lost 14 kg in 90 days', person: 'Priya R., 38 — Coimbatore', quote: 'I tried everything before. This coaching actually worked!' },
            { before: '😔', after: '🌟', result: 'Fat % dropped from 38% → 26%', person: 'Kavitha S., 45 — Erode', quote: 'Energy levels sky high. My doctor was shocked!' },
            { before: '😟', after: '💪', result: 'Lost 9 kg + gained muscle', person: 'Ramesh K., 52 — Salem', quote: 'At 52, I feel stronger than I did at 35.' }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-gold/15 rounded-2xl overflow-hidden hover:border-gold/40 transition-all">
              <div className="grid grid-cols-2 h-44">
                <div className="bg-white/10 flex items-center justify-center text-4xl relative border-r border-gold/20">{item.before}<span className="absolute bottom-2 text-[10px] tracking-wider uppercase bg-black/50 px-2 py-0.5 rounded">Before</span></div>
                <div className="bg-green/20 flex items-center justify-center text-4xl relative">{item.after}<span className="absolute bottom-2 text-[10px] tracking-wider uppercase bg-black/50 px-2 py-0.5 rounded">After</span></div>
              </div>
              <div className="p-5">
                <div className="font-playfair text-lg text-gold mb-1">{item.result}</div>
                <div className="text-white/60 text-xs mb-2">{item.person}</div>
                <div className="text-white/40 text-xs italic">{item.quote}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-5">
          {[
            { stars: '★★★★★', text: 'The personal coaching makes all the difference. She doesn\'t just sell products — she\'s with you every step of the journey!', name: 'Deepa Krishnan', detail: 'Lost 11 kg · Chennai' },
            { stars: '★★★★★', text: 'My skin is glowing, my digestion improved, and I finally have consistent energy all day. This is a lifestyle change.', name: 'Anitha Sundaram', detail: 'Skin & Energy · Coimbatore' }
          ].map((review, i) => (
            <div key={i} className="bg-white/5 border border-gold/15 rounded-xl p-6">
              <div className="text-gold text-sm mb-2">{review.stars}</div>
              <p className="text-white/60 text-sm italic mb-4">{review.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-green flex items-center justify-center text-white">🌺</div>
                <div>
                  <div className="text-white text-sm font-semibold">{review.name}</div>
                  <div className="text-white/40 text-xs">{review.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;