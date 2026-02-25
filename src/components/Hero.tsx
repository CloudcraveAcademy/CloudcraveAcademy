import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Award, Users, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/training/1920/1080?blur=4" 
          className="w-full h-full object-cover opacity-40"
          alt="Hero Background"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full px-4 py-1.5 mb-6">
              <ShieldCheck className="text-brand-blue" size={16} />
              <span className="text-brand-blue text-xs font-semibold uppercase tracking-wider">Accredited Training Provider</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Empowering the Next Generation of <span className="text-brand-red">Care Professionals.</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 max-w-lg leading-relaxed">
              Modern, secure, and scalable training solutions for Health & Social Care, SIA, and Functional Skills. Start your career with Thames Support today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/courses" 
                className="bg-brand-blue text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-blue-hover transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/20 group"
              >
                Explore Courses
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                <Play size={20} fill="currentColor" />
                Watch SIA Intro
              </button>
            </div>

            <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">15k+</span>
                <span className="text-sm text-slate-400">Students Enrolled</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">98%</span>
                <span className="text-sm text-slate-400">Pass Rate</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/150?u=${i}`} className="w-8 h-8 rounded-full border-2 border-slate-900" alt="Student" />
                  ))}
                </div>
                <span className="text-sm text-slate-400">Join our community</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://picsum.photos/seed/medical/800/1000" 
                className="w-full aspect-[4/5] object-cover"
                alt="Training Session"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-brand-red p-2 rounded-xl">
                    <Award className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Platinum Package</h3>
                    <p className="text-slate-300 text-xs">Priority Certification & Support</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold text-xl">£299.00</span>
                  <Link to="/courses" className="text-brand-red text-sm font-bold flex items-center gap-1 hover:underline">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
