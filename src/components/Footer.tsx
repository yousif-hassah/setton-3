import React from 'react';
import {  Instagram,  Facebook, Youtube } from 'lucide-react';
import img25 from "./image/image_2025-05-23_19-57-16-Photoroom.png"

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              {/* <Zap className="text-yellow-400 h-8 w-8" /> */}
              <h2 className="text-2xl font-bold tracking-tighter">
                {/* COMIC<span className="text-yellow-400">VERSEuuuuuu</span> */}
                <img src={img25} alt="" style={{width:"120px" ,height:"50px"}}/>
              </h2>
            </div>
            <p className="text-gray-300 mb-6">
              Where imagination explodes into reality! Your gateway to stories that leap off the screen.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-orange-600 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              {/* <a href="#" className="text-white hover:text-orange-600  transition-colors">
                <Twitter className="h-6 w-6" />
              </a> */}
              <a href="#" className="text-white hover:text-orange-600 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-orange-600  transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
        
          
          <div className="md:col-span-1">
            <h3 className="text-xl  mb-4 uppercase">Resources</h3>
            <ul className="space-y-2">
              <li><a href="" className="text-white hover:text-orange-400 transition-colors">Release Schedule</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Character Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Universe Timeline</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Reading Order</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            {/* <h3 className="text-xl font-bold mb-4 uppercase">Subscribe</h3>
            <p className="text-gray-300 mb-4">
              Get the latest updates and exclusive content straight to your inbox!
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded border-2 border-blue-700 bg-blue-800 text-white placeholder-blue-300 focus:outline-none focus:border-yellow-400"
              />
              <button 
                type="submit" 
                className="w-full bg-orange-600  text-black font-bold py-2 rounded border-2 border-white hover:bg-yellow-300 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form> */}
          </div>
            <div className="md:col-span-1">
            <h3 className="text-xl  mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-300 hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#characters" className="text-gray-300 hover:text-orange-400 transition-colors">Characters</a></li>
              <li><a href="#stories" className="text-gray-300 hover:text-orange-400 transition-colors">Stories</a></li>
              <li><a href="#news" className="text-gray-300 hover:text-orange-400 transition-colors">News</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Shop</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white mt-12 pt-6 text-center text-white">
          <p>© 2025 COMICVERSE. All characters and stories are fictional. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;