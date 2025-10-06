// import React, { useState, useEffect } from 'react';
// import ComicPanel from './ComicPanel';
// import { Gamepad2, RotateCcw } from 'lucide-react';

// interface Card {
//   id: number;
//   emoji: string;
//   isFlipped: boolean;
//   isMatched: boolean;
// }

// const EMOJIS = ['🦸‍♂️', '🦹‍♀️', '🌟', '💥', '⚡', '🎭', '🦇', '🕷️'];

// const Games: React.FC = () => {
//   const [cards, setCards] = useState<Card[]>([]);
//   const [flippedCards, setFlippedCards] = useState<number[]>([]);
//   const [moves, setMoves] = useState(0);
//   const [matches, setMatches] = useState(0);
//   const [isWon, setIsWon] = useState(false);

//   const initializeGame = () => {
//     const shuffledCards = [...EMOJIS, ...EMOJIS]
//       .sort(() => Math.random() - 0.5)
//       .map((emoji, index) => ({
//         id: index,
//         emoji,
//         isFlipped: false,
//         isMatched: false,
//       }));
//     setCards(shuffledCards);
//     setFlippedCards([]);
//     setMoves(0);
//     setMatches(0);
//     setIsWon(false);
//   };

//   useEffect(() => {
//     initializeGame();
//   }, []);

//   const handleCardClick = (id: number) => {
//     if (
//       flippedCards.length === 2 ||
//       cards[id].isFlipped ||
//       cards[id].isMatched
//     ) {
//       return;
//     }

//     const newCards = [...cards];
//     newCards[id].isFlipped = true;
//     setCards(newCards);

//     const newFlippedCards = [...flippedCards, id];
//     setFlippedCards(newFlippedCards);

//     if (newFlippedCards.length === 2) {
//       setMoves(m => m + 1);
//       const [firstId, secondId] = newFlippedCards;

//       if (cards[firstId].emoji === cards[secondId].emoji) {
//         newCards[firstId].isMatched = true;
//         newCards[secondId].isMatched = true;
//         setCards(newCards);
//         setFlippedCards([]);
//         setMatches(m => {
//           const newMatches = m + 1;
//           if (newMatches === EMOJIS.length) {
//             setIsWon(true);
//           }
//           return newMatches;
//         });
//       } else {
//         setTimeout(() => {
//           newCards[firstId].isFlipped = false;
//           newCards[secondId].isFlipped = false;
//           setCards(newCards);
//           setFlippedCards([]);
//         }, 1000);
//       }
//     }
//   };

//   return (
//     <section id="games" className="py-20 bg-gray-900">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <ComicPanel className="inline-block bg-indigo-900 border-black border-4 transform rotate-1 py-2 px-8 shadow-lg">
//             <h2 className="text-4xl font-bold uppercase text-orange-400 flex items-center justify-center">
//               Arcade Zone <Gamepad2 className="ml-2" />
//             </h2>
//           </ComicPanel>
//         </div>

//         <div className="max-w-2xl mx-auto">
//           <ComicPanel className="bg-gray-800 p-6">
//             <div className="text-center mb-6">
//               <h3 className="text-2xl font-bold mb-2 text-orange-400">Comic Memory</h3>
//               <p className="text-gray-300 mb-4">Match the superhero emojis!</p>
//               <div className="flex justify-center space-x-4 mb-4">
//                 <div className="bg-indigo-900 px-4 py-2 rounded-lg border-2 border-indigo-700 text-orange-400">
//                   Moves: {moves}
//                 </div>
//                 <div className="bg-indigo-900 px-4 py-2 rounded-lg border-2 border-indigo-700 text-orange-400">
//                   Matches: {matches}/{EMOJIS.length}
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-4 gap-3">
//               {cards.map(card => (
//                 <button
//                   key={card.id}
//                   onClick={() => handleCardClick(card.id)}
//                   className={`aspect-square text-3xl border-2 border-black transition-all duration-300 transform hover:scale-105 ${
//                     card.isFlipped || card.isMatched
//                       ? 'bg-indigo-700 rotate-0'
//                       : 'bg-indigo-900 rotate-12'
//                   } shadow-lg hover:shadow-orange-400/20`}
//                   disabled={card.isMatched}
//                 >
//                   {(card.isFlipped || card.isMatched) && (
//                     <span className="text-orange-400">{card.emoji}</span>
//                   )}
//                 </button>
//               ))}
//             </div>

//             {isWon && (
//               <div className="mt-6 text-center">
//                 <ComicPanel className="inline-block bg-orange-400 border-black border-4 transform -rotate-2 py-2 px-6">
//                   <p className="text-xl font-bold text-gray-900">
//                     🎉 Congratulations! You won in {moves} moves! 🎉
//                   </p>
//                 </ComicPanel>
//               </div>
//             )}

//             <button
//               onClick={initializeGame}
//               className="mt-6 w-full bg-orange-500 text-gray-900 font-bold py-2 px-4 border-2 border-black transition-all duration-200 hover:bg-orange-400 flex items-center justify-center hover:shadow-lg hover:shadow-orange-400/20"
//             >
//               <RotateCcw className="mr-2" /> Play Again
//             </button>
//           </ComicPanel>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Games;

//--------------------------------------------------------------------------------------------------->

import React, { useState, useEffect } from "react";
import ComicPanel from "./ComicPanel";
import { Gamepad2, RotateCcw, Trophy, Clock3 } from "lucide-react";

interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const EMOJIS = ["🦸‍♂️", "🦹‍♀️", "🌟", "💥", "⚡", "🎭", "🦇", "🕷️"];

const Games: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [isWon, setIsWon] = useState(false);
  const [gameTime, setGameTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bestScore, setBestScore] = useState<number | null>(null);

  const initializeGame = () => {
    const shuffledCards = [...EMOJIS, ...EMOJIS]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffledCards);
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
    setIsWon(false);
    setGameTime(0);
    setIsPlaying(true);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
  let timer: ReturnType<typeof setInterval>;
  if (isPlaying && !isWon) {
    timer = setInterval(() => {
      setGameTime((prev) => prev + 1);
    }, 1000);
  }
  return () => clearInterval(timer);
}, [isPlaying, isWon]);


  const handleCardClick = (id: number) => {
    if (
      flippedCards.length === 2 ||
      cards[id].isFlipped ||
      cards[id].isMatched
    ) {
      return;
    }

    const newCards = [...cards];
    newCards[id].isFlipped = true;
    setCards(newCards);

    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves((m) => m + 1);
      const [firstId, secondId] = newFlippedCards;

      if (cards[firstId].emoji === cards[secondId].emoji) {
        newCards[firstId].isMatched = true;
        newCards[secondId].isMatched = true;
        setCards(newCards);
        setFlippedCards([]);
        setMatches((m) => {
          const newMatches = m + 1;
          if (newMatches === EMOJIS.length) {
            setIsWon(true);
            setIsPlaying(false);
            if (!bestScore || moves + 1 < bestScore) {
              setBestScore(moves + 1);
            }
          }
          return newMatches;
        });
      } else {
        setTimeout(() => {
          newCards[firstId].isFlipped = false;
          newCards[secondId].isFlipped = false;
          setCards(newCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <section id="games" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <ComicPanel className="inline-block bg-indigo-900 border-black border-4 transform rotate-1 py-2 px-8 shadow-lg">
            <h2 className="text-4xl font-bold uppercase text-orange-400 flex items-center justify-center">
              Arcade Zone <Gamepad2 className="ml-2" />
            </h2>
          </ComicPanel>
        </div>

        <div className="max-w-2xl mx-auto">
          <ComicPanel className="bg-gray-800 p-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 text-orange-400">
                Comic Memory
              </h3>
              <p className="text-gray-300 mb-4">
                Match the superhero emojis to win!
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-indigo-900 px-4 py-3 rounded-lg border-2 border-indigo-700">
                  <div className="text-gray-400 text-sm mb-1">Moves</div>
                  <div className="text-orange-400 text-xl font-bold flex items-center justify-center">
                    <Trophy className="w-4 h-4 mr-2" /> {moves}
                  </div>
                </div>

                <div className="bg-indigo-900 px-4 py-3 rounded-lg border-2 border-indigo-700">
                  <div className="text-gray-400 text-sm mb-1">Time</div>
                  <div className="text-orange-400 text-xl font-bold flex items-center justify-center">
                    <Clock3 className="w-4 h-4 mr-2" /> {formatTime(gameTime)}
                  </div>
                </div>

                <div className="bg-indigo-900 px-4 py-3 rounded-lg border-2 border-indigo-700">
                  <div className="text-gray-400 text-sm mb-1">Matches</div>
                  <div className="text-orange-400 text-xl font-bold">
                    {matches}/{EMOJIS.length}
                  </div>
                </div>
              </div>

              {bestScore && (
                <div className="mb-4 text-sm text-gray-400">
                  Best Score:{" "}
                  <span className="text-orange-400 font-bold">{bestScore}</span>{" "}
                  moves
                </div>
              )}
            </div>

            <div className="grid grid-cols-4 gap-3">
              {cards.map((card) => (
                <button
                  key={card.id}
                  onClick={() => handleCardClick(card.id)}
                  className={`aspect-square text-4xl border-2 ${
                    card.isMatched ? "border-orange-500" : "border-black"
                  } transition-all duration-300 transform hover:scale-105 ${
                    card.isFlipped || card.isMatched
                      ? "bg-indigo-700 rotate-0"
                      : "bg-indigo-900 rotate-12"
                  } rounded-lg shadow-lg hover:shadow-orange-400/20 ${
                    card.isMatched ? "opacity-75" : "opacity-100"
                  }`}
                  disabled={card.isMatched}
                >
                  <div
                    className={`transition-all duration-300 transform ${
                      card.isFlipped || card.isMatched
                        ? "scale-100 rotate-0"
                        : "scale-0 rotate-180"
                    }`}
                  >
                    {(card.isFlipped || card.isMatched) && (
                      <span className="text-orange-400">{card.emoji}</span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {isWon && (
              <div className="mt-6 text-center animate-bounce-slow">
                <ComicPanel className="inline-block bg-orange-400 border-black border-4 transform -rotate-2 py-3 px-6">
                  <p className="text-xl font-bold text-gray-900">
                    🎉 Victory! Completed in {moves} moves and{" "}
                    {formatTime(gameTime)}! 🎉
                  </p>
                </ComicPanel>
              </div>
            )}

            <button
              onClick={initializeGame}
              className="mt-6 w-full bg-orange-500 text-gray-900 font-bold py-3 px-4 border-2 border-black transition-all duration-200 hover:bg-orange-400 flex items-center justify-center hover:shadow-lg hover:shadow-orange-400/20 rounded-lg"
            >
              <RotateCcw className="mr-2" /> New Game
            </button>
          </ComicPanel>
        </div>
      </div>
    </section>
  );
};

export default Games;
