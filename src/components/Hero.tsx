//1- 

// import React, { useEffect, useState } from 'react';
// import { ArrowDown } from 'lucide-react';

// const Hero: React.FC = () => {
//   const [isVisible, setIsVisible] = useState(false);
  
//   useEffect(() => {
//     setIsVisible(true);
//   }, []);
  
//   return (
//     <section id="hero" className="min-h-screen relative overflow-hidden bg-gray-900 pt-16" style={{
//         minHeight: '100vh',
//         position: 'relative',
//         overflow: 'hidden',
//         backgroundColor: 'rgb(17 24 39)',
//         paddingTop: '4rem'
//       }}>
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[url('src/components/setton-3.png')] bg-cover bg-center opacity-70"></div>
//         <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/70 to-gray-900/80"></div>
//       </div>
      
//       <div className="container mx-auto px-4 py-12 relative">
//         <div className="flex items-center justify-center min-h-[80vh]">
//           <h1 
//             className={`text-7xl md:text-8xl font-comic  text-white tracking-wider transform ${
//               isVisible ? 'scale-110 opacity-90' : 'scale-90 opacity-0'
//             } transition-all duration-1000 ease-elastic text-center`}
//           >
//             Welcome
//           </h1>
//         </div>
        
//         <div className="text-center mt-12 animate-bounce">
//           <a href="#characters" aria-label="Scroll down">
//             <ArrowDown className="mx-auto h-10 w-10 text-orange-600" />
//           </a>
//         </div>
//       </div>
      
//     </section>
//   );
// };

// export default Hero; هذا بدالاولي 
//---------------------------------------------------------------------------------------------------------------
// هسه هذا  المحدث بس تحت التجربه
//==>2-

import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown } from 'lucide-react';


const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      if (backgroundRef.current && contentRef.current) {
        const scrollPosition = window.scrollY;
        // Move background at half speed of scroll
        backgroundRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        // Move content slightly faster than scroll
        contentRef.current.style.transform = `translateY(${scrollPosition * 0.8}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen relative overflow-hidden bg-gray-900 pt-16"
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background elements with parallax effect */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          willChange: 'transform',
          transform: 'translateY(0)'
        }}
      >
        <div 
          className="absolute inset-0 bg-[url('./components/image/setton-3.png')] bg-cover bg-center opacity-70"
          style={{
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/70 to-gray-900/80" />
      </div>
      
      {/* Content container with parallax effect */}
      <div 
        ref={contentRef}
        className="container mx-auto px-4 py-12 relative transition-transform duration-300 ease-out"
        style={{
          willChange: 'transform',
          transform: 'translateY(0)',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <div className="flex items-center justify-center min-h-[60vh]">
          <h1 
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-comic text-white tracking-wider transform ${
              isVisible ? 'scale-110 opacity-90' : 'scale-90 opacity-0'
            } transition-all duration-1000 ease-elastic text-center`}
          >
            Welcome
          </h1>
        </div>
        
        <div className="text-center mt-8 sm:mt-12 animate-bounce">
          <a 
            href="#characters" 
            aria-label="Scroll down"
            className="inline-block p-2"
          >
            <ArrowDown className="h-8 w-8 sm:h-10 sm:w-10 text-orange-600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;