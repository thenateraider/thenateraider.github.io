import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import ProjectCard from './components/ProjectCard';
import { Briefcase, User, FolderKanban, Globe } from 'lucide-react';
import ProjectModal from "./components/ProjectModal";
import About from './components/About';
import Resume from './components/Resume';
import { useLanguage } from './context/LanguageContext';

function App() {
  const [activeTab, setActiveTab] = useState('About');
  const [selectedProject, setSelectedProject] = useState(null);
  const { t, content, language, toggleLanguage } = useLanguage();
  const { projectsData, personalInfo } = content;

  // เลื่อนกลับขึ้นบนสุดทุกครั้งที่มีการเปลี่ยน Tab
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-neutral-950 p-6 pb-32 md:p-12 md:pb-36 flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-start relative">

      {/* 🟢 Sidebar (ข้อมูลส่วนตัว) */}
      <Sidebar info={personalInfo} />

      {/* 🟢 Main Content Area */}
      <main className="flex-1 max-w-5xl z-10 w-full">
        <header className="mb-10">
          <h2 className="text-white text-5xl font-bold tracking-tight mb-2">{t('app', activeTab.toLowerCase())}</h2>
          <div className="h-1 w-12 bg-green-nate rounded-full" />
        </header>

        {/* ส่วนแสดงเนื้อหาตาม Tab ที่เลือก */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'Portfolio' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsData.map(project => (
                  <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
                ))}
              </div>
            )}

            {activeTab === 'About' && (
              <div className="text-gray-300 space-y-6">
                <About />
              </div>
            )}

            {activeTab === 'Resume' && (
              <Resume />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 🟢 Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      {/* 🟢 macOS Floating Dock (ปุ่มเปลี่ยนหน้า) */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-2xl border border-white/10 px-6 py-3 rounded-[24px] flex items-center gap-4 shadow-2xl z-50">
        {[
          { name: 'About', icon: <User size={20} /> },
          { name: 'Resume', icon: <Briefcase size={20} /> },
          { name: 'Portfolio', icon: <FolderKanban size={20} /> }
        ].map(tab => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex flex-col items-center p-2 rounded-xl transition-all ${activeTab === tab.name ? 'bg-green-nate text-black scale-110' : 'text-gray-400 hover:text-white'
              }`}
          >
            {tab.icon}
            <span className="text-xs mt-1 font-bold">{t('app', tab.name.toLowerCase())}</span>
          </button>
        ))}

        {/* Separator */}
        <div className="w-[1px] h-10 bg-white/20 mx-1"></div>

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="flex flex-col items-center p-2 rounded-xl text-gray-400 hover:text-green-nate transition-all group"
        >
          <div className="relative">
            <Globe size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            {/* Subtle Active Dot */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-nate rounded-full shadow-[0_0_8px_rgba(103,247,0,0.6)]" />
          </div>
          <span className="text-[10px] mt-1 pr-0.5 font-bold uppercase tracking-wider">
            {language === 'en' ? 'EN' : 'DE'}
          </span>
        </button>
      </nav>
    </div >
  );
}

export default App;