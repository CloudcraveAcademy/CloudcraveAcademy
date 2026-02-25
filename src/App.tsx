import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Chatbot } from './components/Chatbot';
import { useAuthStore } from './store/authStore';
import { supabase } from './services/supabaseClient';
import { AuthPage } from './pages/AuthPage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { DashboardPage } from './pages/DashboardPage';
import { CorporatePage } from './pages/CorporatePage';
import { AboutPage } from './pages/AboutPage';
import { AccreditationsPage } from './pages/AccreditationsPage';
import { ClientsPage } from './pages/ClientsPage';
import { GraduationCap } from 'lucide-react';

const Home = () => (
  <main>
    <Hero />
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Training Categories</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Specialized training programs designed to meet industry standards and accelerate your career.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Health & Social Care', desc: 'Comprehensive training for care professionals.', icon: '🏥', slug: 'health-social-care' },
            { title: 'SIA Training', desc: 'Security industry authority approved courses.', icon: '🛡️', slug: 'sia-training' },
            { title: 'Functional Skills', desc: 'Essential English and Maths for the workplace.', icon: '📚', slug: 'functional-skills' }
          ].map((cat, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-6">{cat.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{cat.title}</h3>
              <p className="text-slate-600 mb-6">{cat.desc}</p>
              <Link 
                to={`/courses?category=${cat.slug}`} 
                className="text-brand-blue font-bold flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                View Courses <span className="text-lg">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Accreditations Section */}
          <div className="bg-brand-blue rounded-[3rem] p-10 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8 text-center">Accreditations</h2>
              <div className="flex justify-center gap-6 mb-8">
                {[
                  { name: 'AoHT', img: 'https://www.thamessupport.com/wp-content/uploads/2023/05/aoht-logo.png' },
                  { name: 'Highfield', img: 'https://www.thamessupport.com/wp-content/uploads/2023/05/highfield-logo.png' },
                  { name: 'CQC', img: 'https://www.thamessupport.com/wp-content/uploads/2023/05/cqc-logo.png' }
                ].map((acc, i) => (
                  <div key={i} className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center p-2 shadow-lg">
                    <span className="text-[10px] font-bold text-brand-blue text-center">{acc.name}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Link to="/accreditations" className="inline-flex items-center gap-2 font-bold hover:gap-3 transition-all">
                  View All Accreditations <span>→</span>
                </Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          </div>

          {/* Clients Section */}
          <div className="bg-brand-blue rounded-[3rem] p-10 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Clients</h2>
              <div className="flex justify-center gap-6 mb-8">
                {[
                  { name: 'Greenwich', img: 'https://www.thamessupport.com/wp-content/uploads/2023/05/greenwich-logo.png' },
                  { name: 'Bexley', img: 'https://www.thamessupport.com/wp-content/uploads/2023/05/bexley-logo.png' },
                  { name: 'Lewisham', img: 'https://www.thamessupport.com/wp-content/uploads/2023/05/lewisham-logo.png' }
                ].map((client, i) => (
                  <div key={i} className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center p-2 shadow-lg">
                    <span className="text-[10px] font-bold text-brand-blue text-center">{client.name}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Link to="/clients" className="inline-flex items-center gap-2 font-bold hover:gap-3 transition-all">
                  View Our Clients <span>→</span>
                </Link>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-blue rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to start your professional journey?</h2>
              <p className="text-slate-200 text-lg mb-10">Join thousands of successful students who have transformed their careers with Thames Support UK.</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/register" className="bg-white text-brand-blue px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all">Get Started Now</Link>
                <button className="bg-brand-red text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-red-hover transition-all border border-brand-red/30">Contact Sales</button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 w-full max-w-sm">
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-white">
                    <span className="font-medium">Standard Package</span>
                    <span className="font-bold">£199</span>
                  </div>
                  <div className="h-px bg-white/20" />
                  <div className="flex justify-between items-center text-white">
                    <span className="font-medium">Platinum Package</span>
                    <span className="font-bold">£299</span>
                  </div>
                  <div className="h-px bg-white/20" />
                  <p className="text-slate-300 text-sm italic">* Installment plans available from £50 deposit</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
      </div>
    </section>
  </main>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const { setUser, fetchProfile } = useAuthStore();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setUser(session.user);
        fetchProfile(session.user.id);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setUser(session.user);
        fetchProfile(session.user.id);
      } else {
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, [setUser, fetchProfile]);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:slug" element={<CourseDetailPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/corporate" element={<CorporatePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/accreditations" element={<AccreditationsPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/login" element={<AuthPage type="login" />} />
          <Route path="/register" element={<AuthPage type="register" />} />
        </Routes>
        <Chatbot />
        
        <footer className="bg-slate-950 text-slate-400 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <img 
                    src="https://www.thamessupport.com/wp-content/uploads/elementor/thumbs/Thames-logo1-oqfq704n2ndzoap3hn4sc3irg07incw8gncn127yf4.jpg" 
                    alt="Thames Support Logo" 
                    className="h-8 w-auto brightness-0 invert"
                    referrerPolicy="no-referrer"
                  />
                  <span className="font-bold text-xl tracking-tight text-white">
                    THAMES<span className="text-brand-red">SUPPORT</span>
                  </span>
                </div>
                <p className="max-w-sm text-slate-500 leading-relaxed">
                  Thames Support UK is a leading provider of professional training services, dedicated to excellence in Health & Social Care, SIA, and Functional Skills education.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6">Quick Links</h4>
                <ul className="space-y-4">
                  <li><Link to="/courses" className="hover:text-brand-red transition-colors">All Courses</Link></li>
                  <li><Link to="/corporate" className="hover:text-brand-red transition-colors">Corporate Training</Link></li>
                  <li><Link to="/accreditations" className="hover:text-brand-red transition-colors">Accreditations</Link></li>
                  <li><Link to="/clients" className="hover:text-brand-red transition-colors">Our Clients</Link></li>
                  <li><Link to="/about" className="hover:text-brand-red transition-colors">About Us</Link></li>
                  <li><Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6">Legal</h4>
                <ul className="space-y-4">
                  <li><Link to="/privacy" className="hover:text-brand-red transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="hover:text-brand-red transition-colors">Terms of Service</Link></li>
                  <li><Link to="/refund" className="hover:text-brand-red transition-colors">Refund Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-slate-900 flex flex-col md:row justify-between items-center gap-4">
              <p className="text-sm">© 2026 Thames Support UK. All rights reserved.</p>
              <div className="flex gap-6">
                <div className="w-5 h-5 bg-slate-800 rounded-full" />
                <div className="w-5 h-5 bg-slate-800 rounded-full" />
                <div className="w-5 h-5 bg-slate-800 rounded-full" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
