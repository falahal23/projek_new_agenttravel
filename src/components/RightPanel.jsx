import { FaChevronLeft, FaChevronRight, FaRegCalendarAlt, FaEllipsisH, FaChevronDown } from "react-icons/fa";

export default function RightPanel() {
    const days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
    const dates = [
        27, 28, 29, 30, 1, 2, 3,
        4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17,
        18, 19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29, 30, 31
    ];

    return (
        <div className="w-full max-w-xs p-6 space-y-10 animate-in fade-in slide-in-from-right duration-700">
            
            {/* USER PROFILE */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img 
                        src="images/foto.png" 
                        alt="Profile" 
                        className="w-12 h-12 rounded-full bg-orange-100 border-2 border-white shadow-sm" 
                    />
                    <div>
                        <h4 className="font-bold text-sm text-slate-900 leading-tight">Falahal Nabil</h4>
                        <p className="text-[10px] text-slate-400 font-bold">Traveler Enthusiast</p>
                    </div>
                </div>
                <div className="w-8 h-8 flex items-center justify-center bg-slate-50 rounded-full text-slate-400 cursor-pointer hover:bg-slate-100 transition-colors">
                    <FaChevronDown size={12} />
                </div>
            </div>

            {/* CALENDAR SECTION */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-base text-slate-900">May <span className="font-medium text-slate-400 ml-1">2025</span></h3>
                    <div className="flex gap-2">
                        <button className="p-2 text-slate-300 hover:text-emerald-500 transition-colors"><FaChevronLeft size={10} /></button>
                        <button className="p-2 text-slate-300 hover:text-emerald-500 transition-colors"><FaChevronRight size={10} /></button>
                    </div>
                </div>

                <div className="grid grid-cols-7 gap-y-4 text-center">
                    {days.map((day) => (
                        <span key={day} className="text-[10px] font-bold text-slate-400">{day}</span>
                    ))}
                    {dates.map((date, idx) => {
                        const isToday = date === 20 && idx === 23;
                        const isInRange = date >= 21 && date <= 22 && idx > 20;
                        const isEndRange = date === 23 && idx === 26;
                        const isFaded = idx < 4;
                        const isWeekend = (idx + 1) % 7 === 0 || idx % 7 === 0;

                        return (
                            <div key={idx} className="relative flex items-center justify-center py-1">
                                {/* Range Background Connectors */}
                                {isInRange && <div className="absolute inset-0 bg-emerald-50" />}
                                {isToday && <div className="absolute right-0 w-1/2 h-full bg-emerald-50" />}
                                {isEndRange && <div className="absolute left-0 w-1/2 h-full bg-emerald-50" />}

                                <span className={`relative z-10 text-[11px] font-bold w-7 h-7 flex items-center justify-center rounded-full transition-all
                                    ${isToday || isEndRange ? "bg-emerald-500 text-white shadow-lg shadow-emerald-200" : ""}
                                    ${isInRange ? "text-emerald-500" : ""}
                                    ${isFaded ? "text-slate-200" : "text-slate-600"}
                                    ${isWeekend && !isToday && !isEndRange && !isInRange ? "text-emerald-300" : ""}
                                `}>
                                    {date}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* MY SCHEDULE SECTION */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-base text-slate-900">My Schedule</h3>
                    <button className="text-slate-200 hover:text-slate-400 transition-colors"><FaEllipsisH size={14} /></button>
                </div>

                <div className="space-y-4">
                    <ScheduleItem 
                        title="Cracked Forest" 
                        date="20 may - 23 may" 
                        img="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100"
                        members={0}
                    />
                    <ScheduleItem 
                        title="Fern Waterfall" 
                        date="20 may - 23 may" 
                        img="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=100"
                        members={3}
                    />
                    <ScheduleItem 
                        title="Night Camping" 
                        date="20 may - 23 may" 
                        img="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=100"
                        members={3}
                    />
                </div>
            </div>
        </div>
    );
}

function ScheduleItem({ title, date, img, members }) {
    return (
        <div className="group flex items-center gap-4 p-3 rounded-[1.5rem] border border-slate-50 hover:border-emerald-100 hover:bg-emerald-50/30 transition-all cursor-pointer">
            <img src={img} className="w-12 h-12 rounded-2xl object-cover shadow-sm" alt={title} />
            <div className="flex-1 min-w-0">
                <h5 className="font-bold text-xs text-slate-800 truncate leading-none mb-1">{title}</h5>
                <div className="flex items-center gap-1.5 text-slate-400">
                    <FaRegCalendarAlt size={10} />
                    <span className="text-[9px] font-medium">{date}</span>
                </div>
                {/* Avatar Group & Count */}
                <div className="flex items-center mt-1.5 gap-2">
                    {members > 0 && (
                        <div className="flex -space-x-2">
                            {[...Array(Math.min(members, 3))].map((_, i) => (
                                <img 
                                    key={i} 
                                    src={`https://i.pravatar.cc/100?u=${title}${i}`} 
                                    className="w-4 h-4 rounded-full border border-white"
                                />
                            ))}
                        </div>
                    )}
                    <span className="text-[9px] font-bold text-emerald-400">+{members || 2}</span>
                </div>
            </div>
        </div>
    );
}