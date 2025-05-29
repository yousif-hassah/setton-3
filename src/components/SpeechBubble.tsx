import React, { ReactNode } from 'react';

type BubbleType = 'speech' | 'thought' | 'shout';

interface SpeechBubbleProps {
  children: ReactNode;
  type?: BubbleType;
  position?: 'left' | 'right';
  className?: string;
}

const SpeechBubble: React.FC<SpeechBubbleProps> = ({ 
  children, 
  type = 'speech', 
  position = 'left',
  className = ''
}) => {
  const getBubbleStyle = () => {
    switch (type) {
      case 'thought':
        return 'rounded-full border-4 border-black bg-white';
      case 'shout':
        return 'bg-yellow-400 border-4 border-black transform rotate-2 font-bold';
      default:
        return 'bg-white border-4 border-black';
    }
  };

  const getPointerStyle = () => {
    if (type === 'thought') {
      return position === 'left' 
        ? 'before:absolute before:content-[""] before:w-4 before:h-4 before:bg-white before:border-4 before:border-black before:rounded-full before:bottom-[-10px] before:left-4 after:absolute after:content-[""] after:w-2 after:h-2 after:bg-white after:border-4 after:border-black after:rounded-full after:bottom-[-16px] after:left-2'
        : 'before:absolute before:content-[""] before:w-4 before:h-4 before:bg-white before:border-4 before:border-black before:rounded-full before:bottom-[-10px] before:right-4 after:absolute after:content-[""] after:w-2 after:h-2 after:bg-white after:border-4 after:border-black after:rounded-full after:bottom-[-16px] after:right-2';
    }
    
    return position === 'left'
      ? 'before:absolute before:content-[""] before:w-6 before:h-6 before:bg-white before:border-b-4 before:border-l-4 before:border-black before:bottom-[-10px] before:left-4 before:transform before:rotate-[-45deg]'
      : 'before:absolute before:content-[""] before:w-6 before:h-6 before:bg-white before:border-b-4 before:border-r-4 before:border-black before:bottom-[-10px] before:right-4 before:transform before:rotate-[45deg]';
  };

  return (
    <div 
      className={`relative p-4 mb-6 ${getBubbleStyle()} ${getPointerStyle()} ${className}`}
    >
      {children}
    </div>
  );
};

export default SpeechBubble;