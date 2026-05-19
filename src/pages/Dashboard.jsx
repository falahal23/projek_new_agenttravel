import React from "react";
import { FaSearch, FaBell, FaStar, FaMapMarkerAlt, FaFilter, FaChevronRight } from "react-icons/fa";

const TravelDashboardOnly = () => {
  return (
    <div className="min-h-screen bg-[#F0F4F7] p-4 md:p-8 font-sans text-slate-800 flex justify-center items-center">
      
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-6xl bg-white rounded-[3.5rem] shadow-2xl overflow-hidden p-8 md:p-12">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Hello, Falahal 👋</h1>
            <p className="text-slate-400 text-base font-medium mt-1">Welcome back and explore the world</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <input 
                type="text" 
                placeholder="Search direction" 
                className="bg-[#F8FAFC] border-none rounded-full px-8 py-4 pl-14 w-full md:w-80 focus:ring-2 focus:ring-emerald-500/20 outline-none text-sm font-semibold shadow-inner transition-all" 
              />
              <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-blue-400 size-4" />
            </div>
            <div className="relative p-4 bg-[#F8FAFC] rounded-full text-orange-400 shadow-sm border border-slate-50 cursor-pointer hover:scale-105 transition-transform">
              <FaBell size={20} />
              <span className="absolute top-3.5 right-3.5 w-2.5 h-2.5 bg-orange-500 rounded-full border-2 border-white"></span>
            </div>
          </div>
        </div>

        {/* HERO CARDS - 3 COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <HeroCard 
            title="Mount climbing" 
            loc="Green Mountain" 
            img="https://res.cloudinary.com/dvpv1hm4h/image/upload/f_auto,c_limit,w_1920,q_auto/hero_home_HD_2_b1c66de161" 
          />
          <HeroCard 
            title="Night camping" 
            loc="Lightning Lake" 
            img="https://koa.com/blog/images/setting-up-camp-at-night.jpg?preset=heroimagecropped" 
          />
          <HeroCard 
            title="Mount climbing" 
            loc="Green Mountain" 
            img="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600" 
          />
        </div>

        {/* BOTTOM SECTION - SPLIT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* BEST DESTINATION LIST */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-black text-slate-900">Best Destination 🌈</h2>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">100 Destinations found</p>
              </div>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl text-slate-400 font-bold text-xs border border-slate-100 shadow-sm hover:bg-slate-50 transition-all">
                <FaFilter /> Filters
              </button>
            </div>

            <div className="space-y-5">
              <DestItem name="Green wood forest" loc="Telangana" rate="4.8" price="999" img="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200" />
              <DestItem name="Green forest Camp" loc="Channai" rate="4.8" price="999" img="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=200" />
              <DestItem name="Desert Festival" loc="Gujarat" rate="4.8" price="999" img="https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=200" />
            </div>
          </div>

          {/* INDIGO PROMO BANNER */}
          <div className="bg-[#1E1B4B] rounded-[3rem] p-10 flex flex-col items-center justify-between text-white relative overflow-hidden shadow-2xl min-h-[350px]">
            {/* Decorative background glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]"></div>

            <div className="relative z-10 flex flex-col items-center mt-4">
              <div className="w-24 h-24 bg-[#14C38E] rounded-full flex items-center justify-center border-8 border-white/5 mb-6 shadow-xl">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" className="w-20 h-20" />
              </div>
              <h3 className="text-3xl font-black text-center leading-tight mb-3">Let's Explore <br/> the beauty</h3>
              <p className="text-xs text-indigo-300 font-bold uppercase tracking-[0.2em] opacity-80">Get special offers & news</p>
            </div>

            <button className="relative z-10 w-full max-w-xs bg-[#14C38E] py-5 rounded-[1.5rem] font-black text-base hover:bg-[#10a87a] transition-all active:scale-95 shadow-xl shadow-[#14C38E]/30 mb-2">
              Join Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

/* --- MINI COMPONENTS --- */

const HeroCard = ({ title, loc, img }) => (
  <div className="relative h-80 rounded-[3rem] overflow-hidden shadow-2xl hover:shadow-emerald-100 transition-all cursor-pointer group">
    <img src={img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={title} />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
    <div className="absolute bottom-8 left-8 text-white">
      <h4 className="font-black text-lg tracking-tight mb-2">{title}</h4>
      <div className="flex items-center gap-3 opacity-90 text-[10px] font-black uppercase tracking-widest">
        <div className="flex items-center gap-1.5">
          <FaMapMarkerAlt size={10} className="text-[#14C38E]" /> {loc}
        </div>
        <div className="flex items-center gap-1.5 ml-2">
          <FaStar className="text-yellow-400" size={10} /> 4.8
        </div>
      </div>
    </div>
  </div>
);

const DestItem = ({ name, loc, rate, price, img }) => (
  <div className="flex items-center justify-between p-3 hover:bg-[#F8FAFC] rounded-[2rem] transition-all cursor-pointer border border-transparent hover:border-slate-100 group">
    <div className="flex items-center gap-5">
      <div className="relative">
        <img src={img} className="w-16 h-16 rounded-2xl object-cover shadow-md" alt={name} />
        <div className="absolute inset-0 rounded-2xl group-hover:ring-2 ring-emerald-400 transition-all"></div>
      </div>
      <div>
        <h4 className="font-black text-base text-slate-800 tracking-tight">{name}</h4>
        <p className="text-[11px] text-slate-400 font-black flex items-center gap-2 mt-1 uppercase tracking-tighter">
          <span className="flex items-center gap-1"><FaMapMarkerAlt size={9}/> {loc}</span>
          <span className="flex items-center gap-1 ml-2 text-slate-500 font-black italic"><FaStar className="text-yellow-400 not-italic" /> {rate}</span>
        </p>
      </div>
    </div>
    <div className="text-right pr-4">
      <p className="font-black text-slate-900 text-lg tracking-tight">₹{price}<span className="text-xs text-slate-300 ml-1">/night</span></p>
    </div>
  </div>
);

export default TravelDashboardOnly;


