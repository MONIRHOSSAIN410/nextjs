"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Video, 
  UserCheck, 
  HelpCircle, 
  FileText, 
  Star, 
  ChevronRight,
  Grid,
  GraduationCap,
  BookOpen,
  Globe,
  Award,
  Sparkles
} from "lucide-react";

// 1. Props টাইপ ডিফাইন করুন
interface HeroProps {
  className?: string;
}

const filterTabs = [
  { id: "all", label: "সব ব্যাচ", icon: Grid },
  { id: "class6-8", label: "Class 6-8", icon: BookOpen },
  { id: "ssc", label: "SSC", icon: GraduationCap },
  { id: "hsc", label: "HSC", icon: BookOpen },
  { id: "admission", label: "Admission", icon: Award },
  { id: "english", label: "English", icon: Globe },
  { id: "skills", label: "Skills", icon: Sparkles },
];

// 2. className প্রপস হিসেবে রিসিভ করুন (ডিফল্ট ফাঁকা স্ট্রিপ প্রদান করে)
export const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  const [activeTab, setActiveTab] = React.useState("all");

  return (
    // 3. template literal ব্যবহার করে রিসিভ করা className যুক্ত করে দিন
    <section className={` font-sans mb-12 ${className}`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb Section */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center space-x-2 text-xs md:text-sm text-slate-500 mb-4 font-medium"
        >
          <a href="#" className="hover:text-emerald-600 transition">হোম</a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
            ব্যাচসমূহ
          </span>
        </motion.div>

        {/* Hero Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 space-y-5"
          >
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              সব ব্যাচসমূহ
            </h1>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
              ষষ্ঠ শ্রেণি থেকে বিশ্ববিদ্যালয় ভর্তি পরীক্ষা পর্যন্ত সম্পূর্ণ অ্যাকাডেমিক প্রস্তুতির জন্য বাংলাদেশের শিক্ষার্থীদের নির্ভরযোগ্য নাম{" "}
              <strong className="text-emerald-700 font-extrabold px-1.5 py-0.5 bg-emerald-100/70 rounded">
                EduMomentum
              </strong>
              । লাইভ ও রেকর্ডেড ব্যাচে যুক্ত হয়ে পড়াশোনাকে করুন পরিকল্পিত ও সহজ।
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center space-x-2 text-xs md:text-sm font-semibold text-slate-700 bg-white/80 backdrop-blur-sm p-2.5 rounded-xl border border-slate-200/60 shadow-sm">
                <Video className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>১০০০+ লাইভ ক্লাস</span>
              </div>
              <div className="flex items-center space-x-2 text-xs md:text-sm font-semibold text-slate-700 bg-white/80 backdrop-blur-sm p-2.5 rounded-xl border border-slate-200/60 shadow-sm">
                <UserCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>ডেডিকেটেড মেন্টরশিপ</span>
              </div>
              <div className="flex items-center space-x-2 text-xs md:text-sm font-semibold text-slate-700 bg-white/80 backdrop-blur-sm p-2.5 rounded-xl border border-slate-200/60 shadow-sm">
                <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>২৪/৭ ডাউট সলভ</span>
              </div>
              <div className="flex items-center space-x-2 text-xs md:text-sm font-semibold text-slate-700 bg-white/80 backdrop-blur-sm p-2.5 rounded-xl border border-slate-200/60 shadow-sm">
                <FileText className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>সাপ্তাহিক রুটিন মাফিক পরীক্ষা</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[260px]"
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-3.5 rounded-2xl shadow-lg border border-slate-100 flex items-center space-x-3 w-64 absolute -top-2 left-4 z-10"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 shrink-0 border-2 border-emerald-500">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" 
                  alt="আতিকুল ইসলাম রাতুল" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-xs md:text-sm leading-tight">
                  আতিকুল ইসলাম রাতুল
                </h4>
                <p className="text-[11px] text-emerald-600 font-medium mt-0.5">
                  HSC 2026 বিজ্ঞান ব্যাচ
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-3.5 rounded-2xl shadow-lg border border-slate-100 flex items-center space-x-3 w-60 absolute top-24 right-2 z-20"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 shrink-0 border-2 border-teal-500">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80" 
                  alt="নাসরিন নাহার" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-xs md:text-sm leading-tight">
                  নাসরিন নাহার
                </h4>
                <p className="text-[11px] text-amber-600 font-medium mt-0.5">
                  মেডিকেল এডমিশন
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-amber-50/90 backdrop-blur-md border border-amber-300 px-4 py-2 rounded-full shadow-md flex items-center space-x-2 absolute bottom-2 left-6 z-30"
            >
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span className="text-xs md:text-sm font-bold text-slate-800">
                ৪.৯/৫ স্টার রেটিং প্রাপ্ত মেন্টরস
              </span>
            </motion.div>
          </motion.div>

        </div>

        {/* Category Filter Tabs Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex items-center gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-none pt-4 border-t border-slate-200/60"
        >
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <motion.button
                key={tab.id}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/25"
                    : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-500"}`} />
                <span>{tab.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};