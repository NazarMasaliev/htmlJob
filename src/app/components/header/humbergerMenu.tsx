"use client";
import { useState } from 'react';

interface HamburgerMenuProps {
  onToggle?: (isOpen: boolean) => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <button 
      onClick={handleToggle}
      className="flex flex-col justify-center items-start w-8 h-8 space-y-1.5 focus:outline-none"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <span className={`w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
      <span className={`w-3 h-0.5 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
      <span className={`w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
    </button>
  );
};

export default HamburgerMenu;