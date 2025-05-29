import React from 'react';
import ComicPanel from './ComicPanel';
import { Calendar, User, Tag } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  imageUrl: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "New Series Announcement: Quantum Knights",
    date: "",
    author: "Comic Editorial Team",
    category: "Announcements",
    excerpt: "We're thrilled to announce our newest series launching this fall. Quantum Knights combines sci-fi action with medieval fantasy in ways you've never seen before!",
    imageUrl: "https://images.pexels.com/photos/5063093/pexels-photo-5063093.jpeg"
  },
  {
    id: 2,
    title: "Behind the Scenes: Creating Captain Cosmos",
    date: "",
    author: "Artist Spotlight",
    category: "Creator Insights",
    excerpt: "Lead artist Maria Chen shares the creative process behind bringing our flagship hero to life. Get exclusive sketches and design notes!",
    imageUrl: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
  },
  {
    id: 3,
    title: "Convention Schedule Announced",
    date: "",
    author: "Events Team",
    category: "Events",
    excerpt: "Mark your calendars! We're hitting the road with panels, signings, and exclusive merchandise at these upcoming conventions.",
    imageUrl: "https://images.pexels.com/photos/2608512/pexels-photo-2608512.jpeg"
  }
];

const News: React.FC = () => {
  return (
    <section id="news" className="py-20 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <ComicPanel className="inline-block bg-red-600 border-black border-4 transform rotate-1 py-2 px-8 shadow-lg">
            <h2 className="text-4xl font-bold uppercase text-blue-900">Latest News</h2>
          </ComicPanel>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <ComicPanel 
              key={item.id}
              className="bg-white h-full flex flex-col"
              animate
              delay={index * 200}
            >
              <div className="relative">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-48 object-cover border-b-4 border-black" 
                />
                <div className="absolute top-0 right-0 bg-yellow-400 text-black font-bold py-1 px-3 transform rotate-3 border-l-2 border-b-2 border-black">
                  {item.category}
                </div>
              </div>
              
              <div className="p-4 flex-grow">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                
                <div className="flex flex-wrap text-sm text-gray-600 mb-4">
                  <div className="flex items-center mr-4 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                  <div className="flex items-center mb-2">
                    <User className="h-4 w-4 mr-1" />
                    {item.author}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{item.excerpt}</p>
              </div>
              
              <div className="mt-auto p-4 pt-0">
                {/* <button className="w-full bg-red-600 text-white font-bold py-2 px-4 border-2 border-black transition-transform duration-200 hover:bg-red-700">
                  Read More
                </button> */}
              </div>
            </ComicPanel>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <ComicPanel className="inline-block bg-white border-black border-4 py-2 px-6 transform -rotate-1">
            <button className="text-xl font-bold uppercase flex items-center">
              View All News <Tag className="ml-2 h-5 w-5" />
            </button>
          </ComicPanel>
        </div>
      </div>
    </section>
  );
};

export default News;