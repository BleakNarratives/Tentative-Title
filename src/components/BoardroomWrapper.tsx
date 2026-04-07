import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, Users, MessageSquare, BarChart3, 
  Settings, Terminal, Shield, Zap, Cpu, Globe, 
  ChevronRight, Search, Bell, User, Briefcase,
  TrendingUp, AlertCircle, CheckCircle2, Lock
} from 'lucide-react';

const BoardroomWrapper = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  // Pinstripe background style
  const pinstripeStyle = {
    backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px)`,
  };

  return (
    <div 
      className="min-h-screen bg-[#020617] text-[#f8fafc] font-sans flex flex-col lg:flex-row overflow-hidden selection:bg-[#C5A059] selection:text-black"
      style={pinstripeStyle}
    >
      {/* Vertical Sidebar Navigation */}
      <aside className="w-full lg:w-20 xl:w-72 bg-[#050a1f]/80 backdrop-blur-2xl border-r border-white/5 flex flex-col h-screen sticky top-0 z-50 shadow-[20px_0_50px_rgba(0,0,0,0.5)]">
        <div className="p-8 flex items-center gap-4 border-b border-white/5">
          <div className="w-10 h-10 bg-gradient-to-br from-[#C5A059] via-[#F9D976] to-[#C5A059] rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(197,160,89,0.3)] border border-white/20">
            <Cpu className="w-6 h-6 text-[#020617]" />
          </div>
          <div className="hidden xl:block">
            <span className="block font-black tracking-[0.3em] text-xs text-[#C5A059]">EQUINEX</span>
            <span className="block text-[8px] font-bold text-slate-500 tracking-[0.5em] uppercase">Sovereign v2.6</span>
          </div>
        </div>

        <nav className="flex-1 py-10 px-6 space-y-3 overflow-y-auto no-scrollbar">
          {[
            { name: 'Overview', icon: LayoutDashboard },
            { name: 'Boardroom', icon: Users },
            { name: 'Consensus', icon: MessageSquare },
            { name: 'Analytics', icon: BarChart3 },
            { name: 'Security', icon: Shield },
            { name: 'Terminal', icon: Terminal },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                activeTab === item.name 
                ? 'bg-gradient-to-r from-[#C5A059]/20 to-transparent text-[#F9D976] shadow-inner' 
                : 'text-slate-500 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              {activeTab === item.name && (
                <motion.div 
                  layoutId="active-pill"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-[#C5A059] shadow-[0_0_15px_#C5A059]"
                />
              )}
              <item.icon className={`w-5 h-5 transition-transform duration-500 group-hover:scale-110 ${activeTab === item.name ? 'text-[#C5A059]' : 'group-hover:text-[#C5A059]'}`} />
              <span className="hidden xl:block text-[11px] font-bold uppercase tracking-[0.2em]">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="p-8 border-t border-white/5 space-y-6">
          <div className="hidden xl:block">
            <div className="flex justify-between text-[9px] text-slate-500 mb-3 font-bold uppercase tracking-widest">
              <span>Market Dominance</span>
              <span className="text-[#C5A059]">88%</span>
            </div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5 shadow-inner">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#C5A059] to-[#F9D976]"
                animate={{ width: '88%' }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </div>
          </div>
          <button className="w-full flex items-center gap-4 p-3 text-slate-500 hover:text-[#C5A059] transition-colors group">
            <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
            <span className="hidden xl:block text-[10px] font-bold uppercase tracking-widest">Executive Settings</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto no-scrollbar relative">
        {/* Top Header */}
        <header className="h-20 border-b border-white/5 bg-[#020617]/60 backdrop-blur-3xl flex items-center justify-between px-10 sticky top-0 z-40 shadow-xl">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">
              <Briefcase className="w-4 h-4" />
              <span>Executive Suite</span>
              <ChevronRight className="w-3 h-3 text-slate-700" />
              <span className="text-[#C5A059]">{activeTab}</span>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="relative hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
              <input 
                type="text" 
                placeholder="Search Intelligence..."
                className="bg-white/5 border border-white/10 rounded-full py-2 pl-12 pr-6 text-[11px] focus:outline-none focus:border-[#C5A059]/50 focus:bg-white/10 transition-all w-80 placeholder:text-slate-700 text-slate-200 shadow-inner"
              />
            </div>
            <div className="flex items-center gap-6">
              <button className="relative p-2 text-slate-500 hover:text-[#C5A059] transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#C5A059] rounded-full border-2 border-[#020617] shadow-[0_0_10px_#C5A059]"></span>
              </button>
              <div className="flex items-center gap-4 pl-6 border-l border-white/5">
                <div className="text-right hidden sm:block">
                  <div className="text-[10px] font-bold text-white uppercase tracking-widest">Sovereign Admin</div>
                  <div className="text-[8px] font-bold text-[#C5A059] uppercase tracking-tighter">Tier 1 Clearance</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl group cursor-pointer">
                  <img 
                    src="https://picsum.photos/seed/executive/40/40" 
                    alt="User" 
                    referrerPolicy="no-referrer" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-10 space-y-10">
          {/* Hero Section */}
          <section className="grid grid-cols-1 xl:grid-cols-4 gap-8">
            <div className="xl:col-span-3 p-12 rounded-[2rem] bg-gradient-to-br from-[#0a1128] via-[#050a1f] to-[#020617] border border-white/10 relative overflow-hidden group shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]">
              {/* Pinstripe overlay for card */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={pinstripeStyle}></div>
              
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity duration-1000">
                <Globe className="w-64 h-64 text-[#C5A059]" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 text-[#C5A059] mb-6">
                  <div className="w-2 h-2 bg-[#C5A059] rounded-full animate-pulse shadow-[0_0_10px_#C5A059]"></div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Executive Protocol Alpha</span>
                </div>
                <h1 className="text-5xl font-black mb-6 tracking-tight text-white leading-tight">
                  The <span className="text-[#C5A059]">Sovereign</span> Boardroom
                </h1>
                <p className="text-slate-400 max-w-2xl mb-10 text-sm leading-relaxed font-medium">
                  Welcome to the apex of decision-making. Your EquiNex substrate is processing multi-dimensional 
                  market signals. The Council of Disagreeing Experts is standing by for strategic orchestration.
                </p>
                <div className="flex gap-6">
                  <button className="px-10 py-4 bg-gradient-to-br from-[#C5A059] via-[#F9D976] to-[#C5A059] text-[#020617] font-black text-[10px] uppercase tracking-[0.2em] rounded-xl hover:scale-105 transition-all shadow-[0_20px_40px_-10px_rgba(197,160,89,0.4)] active:scale-95">
                    Summon Council
                  </button>
                  <button className="px-10 py-4 border border-white/10 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-xl hover:bg-white/5 transition-all backdrop-blur-sm shadow-xl">
                    Market Substrate
                  </button>
                </div>
              </div>
            </div>

            <div className="p-10 rounded-[2rem] bg-[#050a1f] border border-white/10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 pointer-events-none" style={pinstripeStyle}></div>
              <div className="relative z-10">
                <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-8">Molt Orchestrator</h3>
                <div className="space-y-6">
                  {[
                    { label: 'Sovereign Agents', value: '12', color: '#C5A059' },
                    { label: 'Active Threads', value: '04', color: '#f8fafc' },
                    { label: 'System Integrity', value: '99.9%', color: '#C5A059' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between border-b border-white/5 pb-4">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">{item.label}</span>
                      <span className="font-black text-sm" style={{ color: item.color }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-8 relative z-10">
                <div className="flex items-center gap-3 text-[#C5A059] text-[10px] font-black tracking-widest">
                  <Zap className="w-4 h-4 fill-[#C5A059]" />
                  MAINBOARD STABLE
                </div>
              </div>
            </div>
          </section>

          {/* Stats Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Market Intelligence', value: '84.2', trend: '+5.4%', icon: Globe },
              { label: 'Consensus Rate', value: '92.1%', trend: '+1.2%', icon: Users },
              { label: 'Automation DNA', value: '4.8k', trend: '+124', icon: Cpu },
              { label: 'Security Level', value: 'MAX', trend: 'STABLE', icon: Lock },
            ].map((stat) => (
              <div key={stat.label} className="p-8 rounded-3xl bg-[#050a1f]/50 border border-white/5 hover:border-[#C5A059]/30 transition-all duration-500 group relative overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-[#C5A059]/10 transition-colors border border-white/5">
                    <stat.icon className="w-6 h-6 text-slate-500 group-hover:text-[#C5A059] transition-colors" />
                  </div>
                  <span className="text-[10px] font-black text-[#C5A059] tracking-tighter">{stat.trend}</span>
                </div>
                <div className="text-3xl font-black text-white mb-2 relative z-10 tracking-tight">{stat.value}</div>
                <div className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] relative z-10">{stat.label}</div>
              </div>
            ))}
          </section>

          {/* Boardroom Members */}
          <section className="space-y-8">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-[#C5A059]" />
                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.4em]">Council of Experts</h3>
              </div>
              <button className="text-[10px] font-bold text-[#C5A059] hover:text-[#F9D976] transition-colors uppercase tracking-widest">Executive Access</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {[
                { name: 'CSO: Strategic', role: 'Lead Strategist', status: 'Active', avatar: 'https://picsum.photos/seed/cso/80/80' },
                { name: 'Adversary', role: 'Critical Challenger', status: 'Thinking', avatar: 'https://picsum.photos/seed/adv/80/80' },
                { name: 'Architect', role: 'Technical Lead', status: 'Active', avatar: 'https://picsum.photos/seed/arch/80/80' },
                { name: 'EMO: Marketing', role: 'Market Sentiment', status: 'Idle', avatar: 'https://picsum.photos/seed/emo/80/80' },
              ].map((member) => (
                <div key={member.name} className="p-6 rounded-2xl bg-gradient-to-br from-[#0a1128] to-[#050a1f] border border-white/5 flex items-center gap-5 shadow-2xl hover:translate-y-[-4px] transition-all duration-300 group">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                      <img 
                        src={member.avatar} 
                        alt={member.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                        referrerPolicy="no-referrer" 
                      />
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-4 border-[#0a1128] shadow-lg ${member.status === 'Active' ? 'bg-[#C5A059]' : member.status === 'Thinking' ? 'bg-amber-500' : 'bg-slate-700'}`}></div>
                  </div>
                  <div>
                    <div className="text-[12px] font-black text-white tracking-tight">{member.name}</div>
                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Terminal / Activity Log */}
          <section className="p-10 rounded-[2.5rem] bg-[#020617] border border-white/10 font-mono shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={pinstripeStyle}></div>
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="flex items-center gap-3 text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]">
                <Terminal className="w-5 h-5 text-[#C5A059]" />
                <span>Executive Log</span>
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/50"></div>
              </div>
            </div>
            <div className="space-y-3 text-[11px] relative z-10">
              {[
                { time: '07:14:02', type: 'INFO', msg: 'Swarm Scouts reported new trend signals in DeFi substrate.', color: '#C5A059' },
                { time: '07:14:05', type: 'WARN', msg: 'Adversary persona detected logical flaw in proposed Q3 strategy.', color: '#f59e0b' },
                { time: '07:14:10', type: 'INFO', msg: 'Consensus reached on "Project Code City" visualization parameters.', color: '#C5A059' },
                { time: '07:14:15', type: 'EXEC', msg: 'Molt Runner initiating phase 2 of automation DNA mutation.', color: '#94a3b8' },
              ].map((log, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex gap-6 py-1 border-b border-white/[0.02]"
                >
                  <span className="text-slate-700 font-bold">[{log.time}]</span>
                  <span className="font-black w-12" style={{ color: log.color }}>{log.type}:</span>
                  <span className="text-slate-400 font-medium">{log.msg}</span>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default BoardroomWrapper;
