/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  Globe, 
  Cpu, 
  Lightbulb, 
  ChevronRight, 
  Menu, 
  X,
  CheckCircle2,
  ArrowRight,
  Mail,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Importance', href: '#importance' },
    { name: 'Types', href: '#types' },
    { name: 'Trends', href: '#trends' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-brand-600 p-2 rounded-lg">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-bold text-brand-900">EduSphere</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 hover:text-brand-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-brand-700 transition-all shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <button className="w-full bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-semibold mb-6">
              <Lightbulb size={16} />
              <span>Redefining the Future of Learning</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-tight mb-6">
              Unlock Your Potential Through <span className="text-brand-600">Education</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              Education is the most powerful weapon which you can use to change the world. Join us in exploring the diverse landscape of modern learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-200">
                Explore Courses <ArrowRight size={20} />
              </button>
              <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                Learn More
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    alt="User" 
                    className="w-12 h-12 rounded-full border-4 border-white object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div>
                <p className="text-slate-900 font-bold">10,000+ Students</p>
                <p className="text-slate-500 text-sm">Joined our community last month</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" 
                alt="Students learning" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-xl text-green-600">
                  <BookOpen size={24} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Active Courses</p>
                  <p className="text-2xl font-display font-bold text-slate-900">450+</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-6 -right-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-brand-100 p-3 rounded-xl text-brand-600">
                  <Globe size={24} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Global Reach</p>
                  <p className="text-2xl font-display font-bold text-slate-900">120 Countries</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Importance = () => {
  const benefits = [
    {
      title: "Personal Growth",
      desc: "Develop critical thinking, problem-solving skills, and self-confidence.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      title: "Economic Success",
      desc: "Open doors to better career opportunities and higher earning potential.",
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: "bg-green-500"
    },
    {
      title: "Social Impact",
      desc: "Contribute meaningfully to society and understand global perspectives.",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-purple-500"
    },
    {
      title: "Innovation",
      desc: "Drive progress through research, creativity, and technological advancement.",
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="importance" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Why Education Matters</h2>
          <p className="text-lg text-slate-600">Education is not just about learning facts, but training the mind to think. It's the foundation for a better future.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className={`${benefit.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Types = () => {
  const types = [
    {
      title: "Formal Education",
      subtitle: "Structured & Institutional",
      desc: "Classroom-based learning in schools, colleges, and universities with a set curriculum and certification.",
      features: ["Curriculum-based", "Grading system", "Certifications", "Professional teachers"],
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Informal Education",
      subtitle: "Experiential & Lifelong",
      desc: "Learning that happens outside a structured environment through daily experiences and social interactions.",
      features: ["Self-directed", "No fixed schedule", "Practical skills", "Lifelong process"],
      image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Non-Formal Education",
      subtitle: "Flexible & Skill-Oriented",
      desc: "Organized learning outside the formal system, often focused on specific skills or community needs.",
      features: ["Workshops", "Online bootcamps", "Community programs", "Skill-specific"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="types" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Diverse Paths of Learning</h2>
            <p className="text-lg text-slate-600">Education takes many forms, each serving a unique purpose in our journey of discovery and growth.</p>
          </div>
          <button className="text-brand-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All Categories <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {types.map((type, idx) => (
            <div key={idx} className="group">
              <div className="relative h-64 rounded-3xl overflow-hidden mb-6">
                <img 
                  src={type.image} 
                  alt={type.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">{type.subtitle}</p>
                  <h3 className="text-2xl font-bold">{type.title}</h3>
                </div>
              </div>
              <p className="text-slate-600 mb-6">{type.desc}</p>
              <ul className="space-y-3">
                {type.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Trends = () => {
  const trends = [
    {
      title: "AI in Education",
      desc: "Personalized learning paths and automated tutoring systems powered by artificial intelligence.",
      icon: <Cpu className="w-8 h-8" />
    },
    {
      title: "Micro-learning",
      desc: "Short, focused learning modules that fit into busy schedules and improve retention.",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      title: "Hybrid Learning",
      desc: "Combining the best of in-person interaction with the flexibility of online resources.",
      icon: <Globe className="w-8 h-8" />
    }
  ];

  return (
    <section id="trends" className="py-24 bg-brand-900 text-white overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-800 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-700 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 leading-tight">The Future of Education is Already Here</h2>
            <p className="text-brand-100 text-xl mb-12 leading-relaxed">
              Technology is transforming how we teach and learn. Stay ahead of the curve with the latest innovations in educational technology.
            </p>
            
            <div className="space-y-8">
              {trends.map((trend, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="bg-brand-800 p-4 rounded-2xl text-brand-400 shrink-0">
                    {trend.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{trend.title}</h3>
                    <p className="text-brand-200">{trend.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-[40px] shadow-2xl">
              <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000" 
                  alt="Future of learning" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 p-6 rounded-3xl border border-white/10">
                  <p className="text-4xl font-display font-bold mb-1">85%</p>
                  <p className="text-brand-200 text-sm">Adoption of digital tools in schools</p>
                </div>
                <div className="bg-white/10 p-6 rounded-3xl border border-white/10">
                  <p className="text-4xl font-display font-bold mb-1">2.5x</p>
                  <p className="text-brand-200 text-sm">Growth in online learning platforms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-50 rounded-[48px] p-8 lg:p-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-100 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          
          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">Start Your Learning Journey Today</h2>
              <p className="text-lg text-slate-600 mb-10">
                Have questions about our programs or want to collaborate? Reach out to our team of educational experts.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm text-brand-600">
                    <Mail size={24} />
                  </div>
                  <span className="text-slate-700 font-medium">hello@edusphere.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm text-brand-600">
                    <Globe size={24} />
                  </div>
                  <span className="text-slate-700 font-medium">www.edusphere.com</span>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-slate-900 font-bold mb-4">Follow Us</p>
                <div className="flex gap-4">
                  {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="bg-white p-3 rounded-xl shadow-sm text-slate-400 hover:text-brand-600 transition-colors">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-brand-100">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" placeholder="How can we help you?" />
                </div>
                <button className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-lg shadow-brand-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-brand-600 p-2 rounded-lg">
              <GraduationCap className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-display font-bold text-white">EduSphere</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>

          <p className="text-sm">© 2026 EduSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <Importance />
        <Types />
        <Trends />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
