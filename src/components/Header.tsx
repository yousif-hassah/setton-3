import React, { useState, useEffect } from 'react';
import { Menu, X,  } from 'lucide-react';
import ComicPanel from './ComicPanel';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Characters', href: '#characters' },
    { name: 'Stories', href: '#stories' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-black shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto  py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* <Zap className="text-orange-600 h-8 w-8" /> */}
        
            <h1 className="text-3xl font-bold text-orange-600 tracking-tighter"><img src="/image/image_2025-05-23_19-57-16-Photoroom.png" alt="" style={{width:"120px" ,height:"30px"}}/>
              <span className="text-white"></span>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map(item => (
              <a 
                key={item.name}
                href={item.href}
                className="text-white font- hover:text-black transition-colors duration-200 uppercase tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white md:hidden"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <ComicPanel className="md:hidden bg-black border-t-2 border-black">
          <nav className="flex flex-col space-y-4 py-2">
            {navItems.map(item => (
              <a 
                key={item.name}
                href={item.href}
                className="text-black font-bold hover:text-orange-400 transition-colors duration-200 uppercase tracking-wide text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </ComicPanel>
      )}
    </header>
  );
};

export default Header;