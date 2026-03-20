import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import ProjectCard from './components/ProjectCard';
import { projectsData, personalInfo } from './data/projects';
import { Briefcase, User, FolderKanban } from 'lucide-react';
import ProjectModal from "./components/ProjectModal";
import About from './components/About';
import Resume from './components/Resume';

function App() {
  const [activeTab, setActiveTab] = useState('About');
  const [selectedProject, setSelectedProject] = useState(null);

  // เลื่อนกลับขึ้นบนสุดทุกครั้งที่มีการเปลี่ยน Tab
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-neutral-950 p-6 pb-32 md:p-12 md:pb-36 flex flex-col lg:flex-row gap-8 justify-center items-start relative">

      {/* 🟢 Sidebar (ข้อมูลส่วนตัว) */}
      <Sidebar info={personalInfo} />

      {/* 🟢 Main Content Area */}
      <main className="flex-1 max-w-5xl z-10 w-full">
        <header className="mb-10">
          <h2 className="text-white text-5xl font-bold tracking-tight mb-2">{activeTab}</h2>
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
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-2xl border border-white/10 px-6 py-3 rounded-[24px] flex gap-4 shadow-2xl z-50">
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
            <span className="text-xs mt-1 font-bold">{tab.name}</span>
          </button>
        ))}
      </nav>
    </div >
  );
}

export default App;