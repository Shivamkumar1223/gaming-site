'use client';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Library() {
  const [libraryGames, setLibraryGames] = useState<any[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch library games from local storage
    const storedLibrary = localStorage.getItem('userLibrary');
    if (storedLibrary) {
      setLibraryGames(JSON.parse(storedLibrary));
    }

    // Set up automatic scrolling
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const removeGame = (gameToRemove: any) => {
    const updatedLibrary = libraryGames.filter(game => game.name !== gameToRemove.name);
    setLibraryGames(updatedLibrary);
    localStorage.setItem('userLibrary', JSON.stringify(updatedLibrary));
    setActiveDropdown(null);
  };

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Nav />
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        <h1 className="text-5xl font-bold mb-12 text-center text-purple-400">Your Game Library</h1>
        {libraryGames.length === 0 ? (
          <p className="text-center text-xl">Your library is empty. Purchase some games to get started!</p>
        ) : (
          <div className="relative">
            <button 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-full z-10"
              onClick={scrollLeft}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-4 pb-4">
              {libraryGames.map((game, index) => (
                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative group flex-shrink-0 w-64">
                  <div className="relative w-full h-64">
                    <Image 
                      src={game.image}
                      alt={game.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg group-hover:opacity-75 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{game.name}</h3>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-3 rounded-full transition duration-300 w-full mb-2">
                      Play
                    </button>
                  </div>
                  <div className="absolute top-2 right-2">
                    <button 
                      className="text-white p-1 rounded-full hover:bg-gray-700 transition duration-300"
                      onClick={() => toggleDropdown(index)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                    {activeDropdown === index && (
                      <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-md overflow-hidden shadow-xl z-10">
                        <button 
                          className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-600"
                          onClick={() => removeGame(game)}
                        >
                          Remove from Library
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-full z-10"
              onClick={scrollRight}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}