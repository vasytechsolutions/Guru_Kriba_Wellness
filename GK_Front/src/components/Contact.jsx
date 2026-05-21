// components/Contact.jsx
import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Calendar,
  MessageCircle,
  Sparkles,
  Star,
  Users,
  Award
} from 'lucide-react';

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
      const emailjs = await import('@emailjs/browser');
      
      const templateParams = {
        to_email: 'transform@gurukrupawellness.in',
        from_name: formData.name,
        from_phone: formData.phone,
        from_email: formData.email || `${formData.name.replace(/\s/g, '')}@consultation.com`,
        user_goal: formData.goal,
        user_message: formData.message,
        reply_to: formData.email || 'no-reply@consultation.com',
        consultation_date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      };

      await emailjs.send(
        'service_f5td2ow',
        'template_kjsjnss',
        templateParams,
        'WFujf-_tc0gdpKl0e'
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

  const contactMethods = [
    { icon: Phone, title: "WhatsApp / Call", details: "+91 95855 59585", color: "text-green-500", bg: "bg-green-50" },
    { icon: Mail, title: "Email", details: "transform@gurukrupawellness.in", color: "text-blue-500", bg: "bg-blue-50" },

    { icon: Clock, title: "Consulting Hours", details: "8am – 8pm | Book a free wellness consultation upon request", color: "text-amber-500", bg: "bg-amber-50" },
  ];

  const benefits = [
    { icon: Sparkles, text: "Free 30-min consultation", color: "text-amber-500" },
    { icon: Calendar, text: "Flexible scheduling", color: "text-emerald-500" },
    { icon: MessageCircle, text: "24/7 WhatsApp support", color: "text-blue-500" },
    { icon: Star, text: "Personalized plans", color: "text-purple-500" },
  ];

  return (
    <main className="pt-28 pb-20 px-6 md:px-16 lg:px-20 bg-gradient-to-br from-cream to-amber-50/30 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full mb-6">
              <Sparkles size={16} className="text-gold" />
              <span className="text-gold text-xs font-bold tracking-wider uppercase">Get In Touch</span>
            </div>
            
            <h1 className="font-playfair text-4xl md:text-5xl text-dark mb-6">
              Ready to Start Your <em className="text-gold not-italic">Transformation?</em>
            </h1>
            
            <p className="text-brown/70 leading-relaxed mb-8 text-lg">
              Book a free 30-minute wellness consultation. Let's talk about your goals, your challenges, and how I can help you get there — the right way.
            </p>

            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              {contactMethods.map((method, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all group border border-gold/10">
                  <div className={`w-12 h-12 ${method.bg} rounded-xl flex items-center justify-center ${method.color} group-hover:scale-110 transition-transform`}>
                    <method.icon size={22} />
                  </div>
                  <div>
                    <strong className="block text-dark text-sm font-semibold">{method.title}</strong>
                    <span className="text-brown/60 text-sm">{method.details}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits Grid */}
            <div className="bg-gradient-to-r from-gold/5 to-transparent rounded-2xl p-6 mb-8">
              <h3 className="font-playfair text-lg text-dark mb-4 flex items-center gap-2">
                <Award size={18} className="text-gold" />
                Why Choose This Free Session?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <benefit.icon size={14} className={benefit.color} />
                    <span className="text-brown/70 text-xs">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-brown/50 text-xs">
                <Users size={14} />
                <span>500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2 text-brown/50 text-xs">
                <Star size={14} className="fill-gold text-gold" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 text-brown/50 text-xs">
                <CheckCircle size={14} className="text-green-500" />
                <span>100% Confidential</span>
              </div>
            </div>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mt-6 bg-green/10 border border-green/30 rounded-xl p-4 animate-fadeUp">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green" />
                  <p className="text-green text-sm">✓ Consultation request sent successfully! We'll contact you within 24 hours.</p>
                </div>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mt-6 bg-red-500/10 border border-red-500/30 rounded-xl p-4 animate-fadeUp">
                <div className="flex items-center gap-3">
                  <AlertCircle size={20} className="text-red-500" />
                  <p className="text-red-500 text-sm">❌ Failed to send. Please call us directly or try again.</p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gold/20 relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl -mr-16 -mt-16" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center">
                  <Calendar size={16} className="text-gold" />
                </div>
                <h3 className="font-playfair text-2xl text-dark">Book Your Free Consultation</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-dark text-xs font-semibold uppercase tracking-wide mb-2">
                    Your Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 border border-brown/10 rounded-xl bg-cream focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-dark text-xs font-semibold uppercase tracking-wide mb-2">
                    Phone Number <span className="text-gold">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 border border-brown/10 rounded-xl bg-cream focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                
                <div>
                  <label className="block text-dark text-xs font-semibold uppercase tracking-wide mb-2">
                    Email Address <span className="text-brown/40">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border border-brown/10 rounded-xl bg-cream focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-dark text-xs font-semibold uppercase tracking-wide mb-2">
                    Your Goal <span className="text-gold">*</span>
                  </label>
                  <select
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 border border-brown/10 rounded-xl bg-cream focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors"
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
                  <label className="block text-dark text-xs font-semibold uppercase tracking-wide mb-2">
                    Tell me about yourself <span className="text-gold">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                    className="w-full px-5 py-3 border border-brown/10 rounded-xl bg-cream focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors resize-none"
                    placeholder="Current weight, health challenges, what you've tried before..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-gradient-to-r from-dark to-brown text-gold py-4 rounded-xl font-bold hover:from-gold hover:to-gold-light hover:text-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-gold border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Sparkles size={18} />
                      Book My Free Consultation
                      <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                
                <p className="text-brown/40 text-xs text-center flex items-center justify-center gap-1">
                  <CheckCircle size={10} />
                  We'll contact you within 24 hours to schedule your consultation
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;