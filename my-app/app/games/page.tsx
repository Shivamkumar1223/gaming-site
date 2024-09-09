'use client';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Games() {
  const [selectedGame, setSelectedGame] = useState<(typeof allGames)[0] | null>(null);
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [filter, setFilter] = useState('All');
  const [paymentDetails, setPaymentDetails] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const allGames = [
    { 
      name: 'PUBG Mobile LITE', 
      image: '/pubg-mobile-lite.jpg',
      description: 'Experience the thrill of battle royale on your mobile device with PUBG Mobile LITE.',
      genre: 'Battle Royale',
      developer: 'KRAFTON',
      releaseDate: '2019-07-25',
      platforms: ['Android', 'iOS'],
      price: 0
    },
    { 
      name: 'Valorant', 
      image: '/valorant.jpg',
      description: 'A 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities.',
      genre: 'Tactical Shooter',
      developer: 'Riot Games',
      releaseDate: '2020-06-02',
      platforms: ['PC'],
      price: 0
    },
    { 
      name: 'God of War Ragnarök', 
      image: '/god-of-war-ragnarok.jpg',
      description: 'Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go.',
      genre: 'Action-Adventure',
      developer: 'Santa Monica Studio',
      releaseDate: '2022-11-09',
      platforms: ['PlayStation 4', 'PlayStation 5'],
      price: 60
    },
    { 
      name: 'Black Myth: Wukong', 
      image: '/Black Myth Wukong.jpg',
      description: 'Join the Monkey King on his quest for vengeance and redemption in this action-packed adventure.',
      genre: 'Action RPG',
      developer: 'Game Science',
      releaseDate: '2021-09-24',
      platforms: ['PC', 'PlayStation 4', 'Nintendo Switch'],
      price: 40
    },
    { 
      name: 'The Last of Us Part II Remastered', 
      image: '/the-last-of-us-part-ii-remastered.jpg',
      description: 'Experience the harrowing journey of Ellie and Joel in this remastered version of the critically acclaimed game.',
      genre: 'Action-Adventure',
      developer: 'Naughty Dog',
      releaseDate: '2020-06-19',
      platforms: ['PlayStation 4', 'PlayStation 5'],
      price: 70
    },
    { 
      name: 'Apex Legends', 
      image: '/apex-legends.jpg',
      description: 'A free-to-play battle royale game that combines elements of survival, crafting, and combat in a massive, ever-changing world.',
      genre: 'Battle Royale',
      developer: 'Respawn Entertainment',
      releaseDate: '2019-02-04',
      platforms: ['PC', 'PlayStation 4', 'Xbox One'],
      price: 0
    },
    { 
      name: 'Call of Duty: Warzone 2.0', 
      image: '/call-of-duty-warzone.jpg',
      description: 'The ultimate battle royale experience set in the iconic Call of Duty universe, featuring a massive map and a variety of game modes.',
      genre: 'Battle Royale',
      developer: 'Infinity Ward',
      releaseDate: '2022-11-02',
      platforms: ['PC', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X/S'],
      price: 0
    },
    { 
      name: 'Dota 2', 
      image: '/dota-2.jpg',
      description: 'A multiplayer online battle arena game where two teams of five players battle for control of a virtual arena.',
      genre: 'MOBA',
      developer: 'Valve',
      releaseDate: '2013-07-09',
      platforms: ['PC'],
      price: 0
    },
    { 
      name: 'Dragon Ball FighterZ', 
      image: '/dragon-ball-fighterz.jpg',
      description: 'A 2.5D fighting game based on the popular Dragon Ball series, featuring fast-paced combat and iconic characters.',
      genre: 'Fighting',
      developer: 'Arc System Works',
      releaseDate: '2018-01-26',
      platforms: ['PC', 'PlayStation 4', 'Nintendo Switch'],
      price: 60
    },
    { 
      name: 'Fortnite', 
      image: '/fortnite.jpg',
      description: 'A free-to-play battle royale game that combines elements of survival, crafting, and combat in a massive, ever-changing world.',
      genre: 'Battle Royale',
      developer: 'Epic Games',
      releaseDate: '2017-09-26',
      platforms: ['PC', 'PlayStation 4', 'Xbox One', 'Nintendo Switch', 'iOS', 'Android'],
      price: 0
    },
    { 
      name: 'League of Legends', 
      image: '/league-of-legends.jpg',
      description: 'A multiplayer online battle arena game where two teams of five players battle for control of a virtual arena.',
      genre: 'MOBA',
      developer: 'Riot Games',
      releaseDate: '2009-10-27',
      platforms: ['PC', 'Mac'],
      price: 0
    },
    { 
      name: 'Overwatch 2', 
      image: '/overwatch-2.jpg',
      description: 'A team-based multiplayer first-person shooter game that combines strategic gameplay with a cast of diverse heroes.',
      genre: 'Hero Shooter',
      developer: 'Blizzard Entertainment',
      releaseDate: '2022-10-04',
      platforms: ['PC', 'PlayStation 4', 'Xbox One'],
      price: 60
    },
    { 
      name: 'Rainbow Six Siege', 
      image: '/rainbow-six-siege.jpg',
      description: 'A tactical first-person shooter game that focuses on teamwork, strategy, and close-quarters combat.',
      genre: 'Tactical Shooter',
      developer: 'Ubisoft Montreal',
      releaseDate: '2015-12-01',
      platforms: ['PC', 'PlayStation 4', 'Xbox One'],
      price: 40
    },
    { 
      name: 'Rocket League', 
      image: '/rocket-league.jpg',
      description: 'A sports game that combines soccer with high-powered vehicles in a fast-paced, physics-based gameplay experience.',
      genre: 'Sports',
      developer: 'Psyonix',
      releaseDate: '2015-07-07',
      platforms: ['PC', 'PlayStation 4', 'Xbox One', 'Nintendo Switch'],
      price: 20
    },
    { 
      name: 'Counter-Strike: Global Offensive', 
      image: '/counter-strike-go.jpg',
      description: 'A multiplayer first-person shooter game that focuses on tactical teamwork and strategic gameplay.',
      genre: 'Tactical Shooter',
      developer: 'Valve',
      releaseDate: '2012-08-21',
      platforms: ['PC', 'Mac', 'Linux', 'PlayStation 3', 'Xbox 360'],
      price: 0
    },
  ];

  const genres = ['All', ...new Set(allGames.map(game => game.genre))];
  const filteredGames = filter === 'All' ? allGames : allGames.filter(game => game.genre === filter);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentDetails(prev => ({ ...prev, [name]: value }));
  };

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedGame) {
      // Add the game to the user's library
      const userLibrary = JSON.parse(localStorage.getItem('userLibrary') || '[]');
      userLibrary.push(selectedGame);
      localStorage.setItem('userLibrary', JSON.stringify(userLibrary));

      setShowPurchaseForm(false);
      setShowConfirmation(true);
    }
  };

  useEffect(() => {
    // Add animation to background
    const bg = document.querySelector('.animated-bg');
    if (bg) {
      bg.classList.add('animate-pulse');
    }
  }, []);

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
      <main className="flex-grow pt-16 relative">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black animated-bg"></div>
          <div className="absolute inset-0 opacity-30">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  animation: `twinkle ${Math.random() * 5 + 5}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-96 mb-12">
          <Image
            src="/games-hero.jpg"
            alt="Games Hero"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent">
            <div className="container mx-auto h-full flex items-center">
              <div className="max-w-2xl">
                <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Game Library</h1>
                <p className="text-xl mb-6">Discover your next gaming adventure</p>
              </div>
            </div>
          </div>
        </section>

        {/* Game Library */}
        <section className="container mx-auto px-4 py-12 relative z-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">All Games</h2>
            <div className="flex space-x-4">
              {genres.map(genre => (
                <button
                  key={genre}
                  className={`px-4 py-2 rounded-full ${filter === genre ? 'bg-purple-600' : 'bg-gray-700'} hover:bg-purple-500 transition duration-300`}
                  onClick={() => setFilter(genre)}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-full z-10"
            onClick={scrollLeft}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-4 pb-4">
            {filteredGames.map((game, index) => (
              <div 
                key={index}
                className="bg-gray-800 bg-opacity-80 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl flex-shrink-0 w-64"
                onClick={() => setSelectedGame(game)}
              >
                <div className="relative w-full h-64">
                  <Image 
                    src={game.image}
                    alt={game.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold mb-2">{game.name}</h3>
                  <p className="text-xs text-gray-400 mb-2">{game.genre}</p>
                  <p className="text-sm font-bold">{game.price === 0 ? 'Free' : `$${game.price.toFixed(2)}`}</p>
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
        </section>

        {/* Game Details Modal */}
        {selectedGame && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl w-full">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-bold">{selectedGame.name}</h2>
                <button 
                  onClick={() => setSelectedGame(null)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="flex mb-6">
                <div className="w-1/2 pr-4">
                  <Image 
                    src={selectedGame.image}
                    alt={selectedGame.name}
                    width={300}
                    height={400}
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="w-1/2">
                  <p className="text-lg mb-4">{selectedGame.description}</p>
                  <p className="mb-2"><span className="font-semibold">Genre:</span> {selectedGame.genre}</p>
                  <p className="mb-2"><span className="font-semibold">Developer:</span> {selectedGame.developer}</p>
                  <p className="mb-2"><span className="font-semibold">Release Date:</span> {selectedGame.releaseDate}</p>
                  <p className="mb-4"><span className="font-semibold">Platforms:</span> {selectedGame.platforms.join(', ')}</p>
                  <button 
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 w-full"
                    onClick={() => setShowPurchaseForm(true)}
                  >
                    {selectedGame.price === 0 ? 'Get' : 'Buy Now'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Purchase Form Modal */}
        {showPurchaseForm && selectedGame && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Purchase {selectedGame.name}</h2>
              <form onSubmit={handlePurchase}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={paymentDetails.name}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-gray-700 rounded text-white"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={paymentDetails.cardNumber}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-gray-700 rounded text-white"
                    required
                  />
                </div>
                <div className="flex mb-4">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={paymentDetails.expiryDate}
                    onChange={handleInputChange}
                    className="w-1/2 p-2 bg-gray-700 rounded-l text-white"
                    required
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={paymentDetails.cvv}
                    onChange={handleInputChange}
                    className="w-1/2 p-2 bg-gray-700 rounded-r text-white"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                  >
                    Confirm Purchase
                  </button>
                  <button
                    type="button"
                    className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                    onClick={() => setShowPurchaseForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Confirmation Modal */}
        {showConfirmation && selectedGame && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
              <h2 className="text-3xl font-bold mb-4 text-purple-400">Thank You!</h2>
              <p className="text-xl mb-6">You have successfully purchased {selectedGame.name}!</p>
              <p className="mb-6">The game has been added to your library.</p>
              <button 
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                onClick={() => {
                  setShowConfirmation(false);
                  setSelectedGame(null);
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
      <style jsx global>{`
        @keyframes twinkle {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}