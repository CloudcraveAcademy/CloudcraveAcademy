import React from 'react';
import { Shield, Target, Heart, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-brand-blue py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
            Modernizing Training for the <br />
            <span className="text-brand-red">Healthcare & Security Sectors.</span>
          </h1>
          <p className="text-slate-200 text-xl max-w-2xl leading-relaxed">
            Thames Support UK is dedicated to providing high-quality, accessible, and accredited training solutions that empower individuals and organizations to reach their full potential.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="bg-brand-blue/5 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Target className="text-brand-blue" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                To bridge the skills gap in critical sectors by delivering innovative, industry-aligned training that combines theoretical excellence with practical application.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-brand-red/5 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Shield className="text-brand-red" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Our Vision</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                To be the UK's most trusted partner for professional development, recognized for our commitment to student success and industry compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-500">The principles that guide everything we do.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Excellence', desc: 'We strive for the highest standards in our curriculum and student support.', icon: <Award className="text-brand-blue" /> },
              { title: 'Integrity', desc: 'We operate with transparency and honesty in all our professional relationships.', icon: <Shield className="text-brand-blue" /> },
              { title: 'Compassion', desc: 'We understand the human element in care training and reflect it in our approach.', icon: <Heart className="text-brand-red" /> }
            ].map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div className="bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 relative z-10">Join our growing community of professionals.</h2>
            <div className="flex justify-center gap-4 relative z-10">
              <Link to="/courses" className="bg-brand-blue text-white px-10 py-4 rounded-2xl font-bold hover:bg-brand-blue-hover transition-all flex items-center gap-2">
                Explore Courses <ArrowRight size={20} />
              </Link>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 -translate-x-1/2" />
          </div>
        </div>
      </section>
    </div>
  );
};
