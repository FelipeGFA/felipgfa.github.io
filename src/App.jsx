import React from 'react';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import PixDonation from './components/PixDonation';

function App() {
  return (
    <div className="relative min-h-screen bg-zinc-900 text-zinc-100 flex flex-col items-center justify-center p-4 font-sans selection:bg-cyan-500 selection:text-zinc-900 overflow-hidden">
      {}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://camo.githubusercontent.com/c52ebcbb7aa90795722a25ebade384495fc3e1aae34ae22e6ec5b289e13969be/68747470733a2f2f692e696d6775722e636f6d2f6731576c5856412e676966')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-zinc-900/90 backdrop-blur-sm"></div>
      </div>

      <main className="relative z-10 max-w-2xl w-full space-y-12">
        <Hero />
        <TechStack />
        <PixDonation />
      </main>
      
      <footer className="relative z-10 mt-20 text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Lip. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
