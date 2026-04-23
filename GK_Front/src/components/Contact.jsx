// components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    goal: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using EmailJS - You need to:
      // 1. Go to https://www.emailjs.com/
      // 2. Sign up for free (100 emails/month free)
      // 3. Create an Email Service (Gmail, Outlook, etc.)
      // 4. Create an Email Template
      // 5. Get your Public Key, Service ID, Template ID
      
      const emailjs = await import('@emailjs/browser');
      
      const templateParams = {
        to_email: 'vasy.techsolutions@gmail.com',
        from_name: formData.name,
        from_phone: formData.phone,
        from_email: formData.email || `${formData.name.replace(/\s/g, '')}@consultation.com`,
        user_goal: formData.goal,
        user_message: formData.message,
        reply_to: formData.email || 'no-reply@consultation.com',
        consultation_date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      };

      await emailjs.send(
        'service_f5td2ow',     // Replace with your EmailJS Service ID
        'template_kjsjnss',    // Replace with your EmailJS Template ID
        templateParams,
        'WFujf-_tc0gdpKl0e'      // Replace with your EmailJS Public Key
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', goal: '', message: '' });
      
    } catch (error) {
      console.error('Email error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-28 pb-20 px-6 md:px-16 lg:px-20 bg-cream min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <p className="text-gold text-xs tracking-wider uppercase mb-4">✦ Get In Touch</p>
            <h1 className="font-playfair text-4xl md:text-5xl text-dark mb-6">
              Ready to Start Your <em className="text-gold not-italic">Transformation?</em>
            </h1>
            <p className="text-brown/70 leading-relaxed mb-8">
              Book a free 30-minute wellness consultation. Let's talk about your goals, your challenges, and how I can help you get there — the right way.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-xl">📱</div>
                <div>
                  <strong className="block text-dark text-sm">WhatsApp / Call</strong>
                  <span className="text-brown/60 text-sm">+91 95855 59585</span>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-xl">📧</div>
                <div>
                  <strong className="block text-dark text-sm">Email</strong>
                  <span className="text-brown/60 text-sm">vasy.techsolutions@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-xl">📍</div>
                <div>
                  <strong className="block text-dark text-sm">Location</strong>
                  <span className="text-brown/60 text-sm">Coimbatore, Tamil Nadu</span>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-xl">🕐</div>
                <div>
                  <strong className="block text-dark text-sm">Consulting Hours</strong>
                  <span className="text-brown/60 text-sm">Mon–Sat, 10am – 7pm</span>
                </div>
              </div>
            </div>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mt-6 bg-green/10 border border-green/30 rounded-xl p-4">
                <p className="text-green text-center text-sm">✓ Consultation request sent successfully! We'll contact you within 24 hours.</p>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mt-6 bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                <p className="text-red-500 text-center text-sm">❌ Failed to send. Please call us directly or try again.</p>
              </div>
            )}
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">
            <h3 className="font-playfair text-2xl text-dark mb-6">Book Your Free Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-dark text-xs font-semibold uppercase tracking-wide mb-2">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 border border-brown/10 rounded-xl bg-cream focus:border-gold outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-dark text-xs font-semibold uppercase tracking-wide mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 border border-brown/10 rounded-xl bg-cream focus:border-gold outline-none transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="block text-dark text-xs font-semibold uppercase tracking-wide mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-brown/10 rounded-xl bg-cream focus:border-gold outline-none transition-colors"
                  placeholder="your@email.com (optional)"
                />
              </div>
              <div>
                <label className="block text-dark text-xs font-semibold uppercase tracking-wide mb-2">Your Goal *</label>
                <select
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 border border-brown/10 rounded-xl bg-cream focus:border-gold outline-none transition-colors"
                >
                  <option value="">Select your primary goal</option>
                  <option>Weight Loss</option>
                  <option>Muscle Gain</option>
                  <option>Better Energy & Immunity</option>
                  <option>Skin & Hair Improvement</option>
                  <option>Sports Nutrition</option>
                  <option>General Wellness</option>
                </select>
              </div>
              <div>
                <label className="block text-dark text-xs font-semibold uppercase tracking-wide mb-2">Tell me about yourself *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full px-5 py-3 border border-brown/10 rounded-xl bg-cream focus:border-gold outline-none transition-colors resize-none"
                  placeholder="Current weight, health challenges, what you've tried before..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-dark to-brown text-gold py-4 rounded-xl font-bold hover:from-gold hover:to-gold-light hover:text-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : '🌟 Book My Free Consultation'}
              </button>
              <p className="text-brown/40 text-xs text-center">We'll contact you within 24 hours to schedule your consultation.</p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;