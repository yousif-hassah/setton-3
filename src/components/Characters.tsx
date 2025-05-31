import React, { useState } from 'react';
import ComicPanel from './ComicPanel';
import SpeechBubble from './SpeechBubble';
import VideoModal from './VidoModal';
import setton1 from './image/setton-1.png'
import setton2 from './image/setton-2 - Copy.png'
import video1 from './image/كراهام.mp4'

interface Character {
  id: number;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  color: string;
   videoUrl: string;
}

const characters: Character[] = [
  {
    id: 1,
    name: "Adam" ,
    role: "Hero",
    description: `Adam from Planet Sports! He's always running, playing, and challenging himself.
He knows that sports isn't just about winning; it's about ethics and cooperation.
In every game, he teaches his friends how to move with a pure heart and a kind soul.
Adam is the star of his planet, creating a new story every day!



Adam - Planet of Sports
Fast, energetic, and loves a challenge.
He learns from every game how to be a well-mannered and cooperative player.
`,
    imageUrl: setton1,
    color: "blue",
    videoUrl: video1
    
  },
  {
    id: 2,
    name: "?",
    role: "?",
    description: ".....",
    imageUrl: setton2,
    color: "orange",
    videoUrl: ""
  },
  {
    id: 3,
    name: "?",
    role: "?",
    description: ".....",
    imageUrl: setton2,
    color: "orange",
    videoUrl: ""
  },
  {
    id: 4,
    name: "?",
    role: "?",
    description: ".....",
    imageUrl: setton2,
    color: "orange",
     videoUrl: ""
  }
];

const getColorClass = (color: string) => {
  switch(color) {
    case 'blue': return 'from-blue-950 to-blue-900';
    case 'orange': return 'from-orange-700 to-orange-700';
    case 'orange1': return 'from-orange-600 to-orange-600';
    case 'orange2': return 'from-orange-600 to-orange-600';
    default: return 'from-gray-800 to-gray-900';
  }
};

const Characters: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  return (
    <section id="characters" className="py-20 bg-gray-900 bg-opacity-95 relative">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/316466/pexels-photo-316466.jpeg')] opacity-10 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <ComicPanel className="inline-block bg-orange-400 border-gray-800 border-4 transform rotate-2 py-2 px-8 shadow-neon">
            <h2 className="text-4xl font-bold uppercase text-gray-900">The Vigilantes</h2>
          </ComicPanel>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {characters.map((character, index) => (
            <div key={character.id} className="group">
              <ComicPanel 
                className={`bg-gradient-to-br ${getColorClass(character.color)} text-gray-100 transform transition-transform duration-300 group-hover:scale-105 h-full flex flex-col border-gray-800`}
                delay={index * 200}
                animate
              >
                <div className="flex-1">
                  <div className="relative">
                    <img 
                      src={character.imageUrl} 
                      alt={character.name} 
                      className="w-full h-56 object-contain object-center border-b- border-gray-800 p-1 bg-white" 
                    />
                    <div className="absolute inset- bg-gradient-to-t from-black to-transparent opacity-30"></div>
                  </div>
                  
                  <div className="p-4">
                    <div className="mb-2 flex justify-between items-start">
                      <h3 className="text-2xl ">{character.name}</h3>
                      <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-sm transform -rotate-2">{character.role}</span>
                    </div>
                    <p className="text-gray-300">{character.description}</p>
                  </div>
                </div>
                
                <div className="mt-auto p-4 pt-0">
                  <button 
                    onClick={() => setSelectedCharacter(character)}
                    className="w-full bg-yellow-400 text-gray-900 font-bold py-2 px-4 border-2 border-gray-800 transition-transform duration-200 hover:bg-yellow-300 shadow-neon-sm"
                  >
                    Start
                  </button>
                </div>
              </ComicPanel>
              
              {index === 1 && (
                <div className="relative">
                  <SpeechBubble type="thought" position="right" className="absolute -bottom-2 right-0 transform translate-y-full z-10 w-max bg-gray-800 text-orange-700">
                    <p className="font-bold">Justice has its price...</p>
                  </SpeechBubble>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <VideoModal
        isOpen={!!selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
        videoUrl={selectedCharacter?.videoUrl || ''}
        title={`${selectedCharacter?.name} - Character Profile`}
      />
    </section>
  );
};

export default Characters;