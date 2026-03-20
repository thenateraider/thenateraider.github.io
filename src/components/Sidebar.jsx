import { personalInfo } from '../data/projects';
import { Mail, Phone, MapPin, Calendar, Facebook, Github, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Sidebar() {
    return (
        <aside className="w-full lg:w-80 bg-gradient-to-b from-[#1e1e1e] to-eerie-black border border-white/5 p-6 rounded-[28px] shadow-[0_15px_40px_rgba(0,0,0,0.6)] text-white lg:sticky lg:top-12 z-20 relative overflow-hidden group">

            {/* ✨ Subtle Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-green-nate/10 blur-[60px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100"></div>

            {/* ส่วนหัว: รูปและชื่อ */}
            <div className="flex flex-col items-center gap-4 relative z-10">
                <div className="relative group/avatar cursor-pointer mt-1">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-green-nate via-emerald-500 to-transparent rounded-[20px] blur-[10px] opacity-40 group-hover/avatar:opacity-70 group-hover/avatar:duration-200 transition duration-700"></div>
                    <img
                        src={personalInfo.avatar}
                        className="relative w-32 h-32 rounded-[20px] object-cover border border-white/10 shadow-2xl transition-transform duration-500 group-hover/avatar:scale-105"
                        alt="Nate"
                    />
                </div>

                <div className="text-center space-y-2 mt-1">
                    <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent drop-shadow-sm">{personalInfo.name}</h1>
                    <p className="bg-green-nate/10 border border-green-nate/20 text-green-nate text-[11px] px-4 py-1.5 rounded-full inline-block font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(103,247,0,0.1)]">
                        {personalInfo.title}
                    </p>
                </div>
            </div>

            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-6" />

            {/* ส่วนข้อมูลติดต่อ */}
            <div className="grid grid-cols-1 gap-4 text-sm relative z-10 mx-1">
                <ContactItem icon={<Mail size={16} />} title="EMAIL" value={personalInfo.email} />
                <ContactItem icon={<Phone size={16} />} title="PHONE" value={personalInfo.phone} />
                <ContactItem icon={<Calendar size={16} />} title="BIRTHDAY" value={personalInfo.birthday} />
                <ContactItem icon={<MapPin size={16} />} title="LOCATION" value={personalInfo.location} />
            </div>

            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-6" />

            {/* Social Links */}
            <div className="flex justify-center gap-4 text-gray-400 relative z-10">
                <SocialLink href={personalInfo.socials.github} icon={<Github size={20} />} />
                <SocialLink href={personalInfo.socials.facebook} icon={<Facebook size={20} />} />
                <SocialLink href={personalInfo.socials.instagram} icon={<Instagram size={20} />} />
            </div>
        </aside>
    );
}

// Component ย่อยสำหรับแต่ละรายการติดต่อ
function ContactItem({ icon, title, value }) {
    return (
        <div className="flex items-center gap-4 group/item cursor-default">
            <div className="p-2.5 bg-gradient-to-br from-jet to-eerie-black rounded-xl border border-white/5 text-green-nate shadow-inner transition-all duration-300 group-hover/item:border-green-nate/30 group-hover/item:shadow-[0_0_15px_rgba(103,247,0,0.2)] group-hover/item:scale-110">
                {icon}
            </div>
            <div className="overflow-hidden">
                <p className="text-[10px] text-gray-500 font-bold tracking-widest mb-0.5 group-hover/item:text-gray-400 transition-colors">{title}</p>
                <p className="text-gray-200 truncate font-medium text-[13px] tracking-wide group-hover/item:text-white transition-colors">{value}</p>
            </div>
        </div>
    );
}

function SocialLink({ href, icon }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-jet/50 rounded-full hover:bg-green-nate/20 hover:text-green-nate border border-transparent hover:border-green-nate/30 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(103,247,0,0.2)]"
        >
            {icon}
        </a>
    );
}