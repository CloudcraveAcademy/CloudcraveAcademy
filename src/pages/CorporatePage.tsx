import React from 'react';
import { Building2, Users, FileBarChart, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CorporatePage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-brand-blue py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://picsum.photos/seed/office/1920/1080" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 rounded-full px-4 py-1.5 mb-8">
            <Building2 className="text-brand-red" size={16} />
            <span className="text-brand-red text-xs font-semibold uppercase tracking-wider">Enterprise Solutions</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Scale Your Team's Training with <br />
            <span className="text-brand-red">Corporate Enrollment.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Streamline workforce development with bulk enrollments, central management, and detailed performance analytics.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-brand-red text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-red-hover transition-all shadow-lg shadow-brand-red/20">
              Request a Demo
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                title: 'Bulk Enrollment', 
                desc: 'Enroll hundreds of employees in minutes with our automated bulk processing tools.',
                icon: <Users className="text-brand-blue" size={32} />
              },
              { 
                title: 'Central Dashboard', 
                desc: 'Monitor progress, manage certifications, and track compliance from a single interface.',
                icon: <FileBarChart className="text-brand-blue" size={32} />
              },
              { 
                title: 'Custom Reporting', 
                desc: 'Generate detailed reports on team performance, completion rates, and ROI.',
                icon: <ShieldCheck className="text-brand-blue" size={32} />
              }
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Why leading organizations trust Thames Support UK</h2>
              <div className="space-y-6">
                {[
                  'Dedicated Account Management',
                  'Customized Learning Paths',
                  'Flexible Payment & Invoicing',
                  'API Integration for LMS',
                  'Priority Support for Corporate Admins',
                  'Compliance Tracking & Alerts'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="bg-brand-blue/10 p-1 rounded-full">
                      <CheckCircle2 className="text-brand-blue" size={20} />
                    </div>
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <button className="mt-12 bg-brand-blue text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-blue-hover transition-all flex items-center gap-2">
                Contact Corporate Sales <ArrowRight size={20} />
              </button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/seed/team/800/800" className="w-full h-full object-cover" alt="Team Training" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-xs">
                <p className="text-slate-900 font-bold text-lg mb-2">"Thames Support transformed our compliance training process."</p>
                <p className="text-slate-500 text-sm">— HR Director, Global Care Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
