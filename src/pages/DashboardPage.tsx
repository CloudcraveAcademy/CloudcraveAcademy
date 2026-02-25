import React, { useEffect, useState } from 'react';
import { useAuthStore } from '../store/authStore';
import { supabase } from '../services/supabaseClient';
import { 
  BookOpen, 
  Clock, 
  Award, 
  CreditCard, 
  Bell, 
  ChevronRight, 
  CheckCircle2,
  AlertCircle,
  Download,
  FileText,
  ArrowRight
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import { MOCK_ENROLLMENTS } from '../data/mockData';

export const DashboardPage = () => {
  const { user, profile } = useAuthStore();
  const navigate = useNavigate();
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      // For demo purposes, if not logged in, we might want to show something 
      // but usually we redirect. Let's keep redirect but handle the mock data.
      navigate('/login');
      return;
    }

    const fetchDashboardData = async () => {
      try {
        const { data, error } = await supabase
          .from('enrollments')
          .select('*, courses(*)')
          .eq('user_id', user.id);
        
        if (data && data.length > 0) {
          setEnrollments(data);
        } else {
          setEnrollments(MOCK_ENROLLMENTS);
        }
      } catch (err) {
        setEnrollments(MOCK_ENROLLMENTS);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [user, navigate]);

  if (loading) return <div className="p-20 text-center">Loading Dashboard...</div>;

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back, {profile?.full_name?.split(' ')[0] || 'Student'}!</h1>
            <p className="text-slate-500">Track your progress and access your course materials.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white p-3 rounded-2xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-brand-red rounded-full border-2 border-white" />
            </button>
            <Link to="/courses" className="bg-brand-blue text-white px-6 py-3 rounded-2xl font-bold hover:bg-brand-blue-hover transition-all shadow-lg shadow-brand-blue/10">
              Browse More Courses
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-brand-blue/10 p-3 rounded-2xl text-brand-blue">
                <BookOpen size={24} />
              </div>
              <span className="text-slate-500 font-medium">Active Courses</span>
            </div>
            <div className="text-3xl font-bold text-slate-900">{enrollments.filter(e => e.status === 'active').length}</div>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-brand-red/10 p-3 rounded-2xl text-brand-red">
                <Award size={24} />
              </div>
              <span className="text-slate-500 font-medium">Completed</span>
            </div>
            <div className="text-3xl font-bold text-slate-900">{enrollments.filter(e => e.status === 'completed').length}</div>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-brand-blue/10 p-3 rounded-2xl text-brand-blue">
                <CreditCard size={24} />
              </div>
              <span className="text-slate-500 font-medium">Certificates</span>
            </div>
            <div className="text-3xl font-bold text-slate-900">0</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content: Enrolled Courses */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold text-slate-900">My Courses</h2>
            
            {enrollments.length > 0 ? (
              <div className="space-y-4">
                {enrollments.map((enrollment) => (
                  <div key={enrollment.id} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="w-full md:w-40 aspect-video rounded-2xl overflow-hidden shrink-0">
                        <img src={enrollment.courses?.image_url || `https://picsum.photos/seed/${enrollment.course_id}/400/225`} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-slate-900 text-lg group-hover:text-brand-blue transition-colors">{enrollment.courses?.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            enrollment.status === 'active' ? 'bg-brand-blue/10 text-brand-blue' : 'bg-slate-100 text-slate-500'
                          }`}>
                            {enrollment.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-slate-400 text-xs mb-4">
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{enrollment.courses?.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FileText size={14} />
                            <span>{enrollment.package_type} Package</span>
                          </div>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs font-medium">
                            <span className="text-slate-500">Progress</span>
                            <span className="text-slate-900">{enrollment.progress}%</span>
                          </div>
                          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-brand-blue transition-all duration-500" 
                              style={{ width: `${enrollment.progress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0">
                        <button className="bg-slate-900 text-white p-3 rounded-2xl hover:bg-brand-blue transition-all">
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 text-center">
                <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="text-slate-300" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">No courses yet</h3>
                <p className="text-slate-500 mb-8">You haven't enrolled in any courses. Start your learning journey today!</p>
                <Link to="/courses" className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-blue-hover transition-all">
                  Explore Courses <ArrowRight size={20} />
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar: Announcements & Balance */}
          <aside className="space-y-8">
            <div className="bg-brand-blue rounded-[2.5rem] p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Payment Status</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-xl">
                    <AlertCircle className="text-brand-red" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Outstanding Balance</p>
                    <p className="text-2xl font-bold">£0.00</p>
                  </div>
                </div>
                <button className="w-full bg-white/10 border border-white/20 py-3 rounded-xl text-sm font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  <Download size={16} />
                  Download Invoices
                </button>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Announcements</h3>
              <div className="space-y-6">
                {[
                  { title: 'New SIA Exam Dates', date: '2 hours ago', type: 'update' },
                  { title: 'Platinum Support Hours', date: '1 day ago', type: 'info' }
                ].map((ann, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${ann.type === 'update' ? 'bg-brand-red' : 'bg-brand-blue'}`} />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">{ann.title}</h4>
                      <p className="text-xs text-slate-400">{ann.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 text-brand-blue text-sm font-bold hover:underline">
                View All Announcements
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
