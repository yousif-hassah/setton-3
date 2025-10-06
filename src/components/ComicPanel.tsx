// import React, { ReactNode } from 'react';

// interface ComicPanelProps {
//   children: ReactNode;
//   className?: string;
//   animate?: boolean;
//   delay?: number;
// }

// const ComicPanel: React.FC<ComicPanelProps> = ({ 
//   children, 
//   className = '', 
//   animate = false,
//   delay = 0 
// }) => {
//   return (
//     <div 
//       className={`relative bg-white p-4 border-4 border-black shadow-comic 
//       ${animate ? 'animate-panel-appear' : ''} 
//       ${className}`}
//       style={{ 
//         animationDelay: `${delay}ms`,
//         boxShadow: '8px 8px 0px 0px rgba(0,0,0,0.75)'
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// export default ComicPanel;

import React, { ReactNode } from 'react';

interface ComicPanelProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  delay?: number;
  onClick?: () => void; // ✅ Add this
}

const ComicPanel: React.FC<ComicPanelProps> = ({ 
  children, 
  className = '', 
  animate = false,
  delay = 0,
  onClick // ✅ Destructure this
}) => {
  return (
    <div 
      onClick={onClick} // ✅ Apply the click handler
      className={`relative bg-white p-4 border-4 border-black shadow-comic 
      ${animate ? 'animate-panel-appear' : ''} 
      ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        boxShadow: '8px 8px 0px 0px rgba(0,0,0,0.75)'
      }}
    >
      {children}
    </div>
  );
};

export default ComicPanel;
