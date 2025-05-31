import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Characters from './components/Characters';
import Stories from './components/Stories';
import News from './components/News';
import Games from './components/Games';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  return (
    <div className="font-comic">
      <Header />
      <main>
        <Hero />
        <Characters />
        <Stories />
        <News />
        <Games />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;