import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

import RightPanel from "../components/RightPanel"; // Buat komponen baru untuk kalender & schedule

export default function MainLayout() {
    return (
        <div className="flex min-h-screen w-full bg-[#F8F9FA] font-sans antialiased">
            
            {/* SIDEBAR - Lebar tetap, background putih */}
            <aside className="w-64 hidden lg:block bg-white border-r border-slate-100">
                <Sidebar />
            </aside>

            {/* MAIN CONTENT AREA - Area abu-abu dengan container putih membulat */}
            <main className="flex-1 flex flex-col p-4 lg:p-6 gap-6 overflow-y-auto">
                
                {/* Dashboard Container (Kertas Putih Membulat di Gambar) */}
                <div className="bg-white rounded-[2.5rem] shadow-sm min-h-full p-8 overflow-hidden border border-slate-50">
                    <Outlet />
                </div>
            </main>

            {/* RIGHT PANEL - Kalender & Schedule */}
            <aside className="w-80 hidden xl:block bg-[#F8F9FA] p-6 border-l border-slate-100">
                <RightPanel />
            </aside>
            
        </div>
    );
}