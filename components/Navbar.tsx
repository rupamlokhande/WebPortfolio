
import React from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          RL.
        </a>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition-colors hover:text-indigo-400 ${
                activeSection === item.id ? 'text-indigo-400' : 'text-slate-400'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="md:hidden">
            {/* Simple mobile indicator or menu would go here */}
            <span className="text-xs text-slate-500 uppercase tracking-widest">{activeSection}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
