'use client';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Login from './components/Login';

export default function Home() {
  const [selectedGame, setSelectedGame] = useState<(typeof allGames)[0] | null>(null);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      setCurrentUser(user);
    }
  }, []);

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
      price: 80
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
      description: 'Join the legendary Monkey King in a thrilling adventure filled with action, strategy, and humor.',
      genre: 'Action RPG',
      developer: 'Cyberpunk 2077',
      releaseDate: '2023-01-12',
      platforms: ['PC', 'PlayStation 5', 'Xbox Series X/S'],
      price: 50
    },
    { 
      name: 'The Last of Us Part II Remastered', 
      image: '/the-last-of-us-part-ii-remastered.jpg',
      description: 'Experience the emotional journey of Ellie and Joel in this remastered version of the critically acclaimed game.',
      genre: 'Action-Adventure',
      developer: 'Naughty Dog',
      releaseDate: '2020-06-19',
      platforms: ['PlayStation 5'],
      price: 70
    },
    { 
      name: 'Apex Legends', 
      image: '/apex-legends.jpg',
      description: 'A free-to-play battle royale game where skilled players create their own legend and fight for glory.',
      genre: 'Battle Royale',
      developer: 'Respawn Entertainment',
      releaseDate: '2019-02-04',
      platforms: ['PC', 'PlayStation 4', 'Xbox One'],
      price: 0
    },
    { 
      name: 'Call of Duty: Warzone 2.0', 
      image: '/call-of-duty-warzone.jpg',
      description: 'The next evolution of the free-to-play battle royale experience in the Call of Duty universe.',
      genre: 'Battle Royale',
      developer: 'Infinity Ward',
      releaseDate: '2022-10-05',
      platforms: ['PC', 'PlayStation 4', 'Xbox One'],
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
      description: 'A 2.5D fighting game based on the Dragon Ball universe, featuring fast-paced combat and iconic characters.',
      genre: 'Fighting',
      developer: 'Arc System Works',
      releaseDate: '2018-01-26',
      platforms: ['PC', 'PlayStation 4', 'Xbox One'],
      price: 60
    },
    { 
      name: 'Fortnite', 
      image: '/fortnite.jpg',
      description: 'A free-to-play battle royale game where 100 players fight to be the last one standing on a shrinking island.',
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
      description: 'A team-based multiplayer first-person shooter game that combines elements of hero shooters and team-based assault.',
      genre: 'First-Person Shooter',
      developer: 'Blizzard Entertainment',
      releaseDate: '2022-10-04',
      platforms: ['PC', 'PlayStation 4', 'Xbox One', 'Nintendo Switch'],
      price: 60
    },
    { 
      name: 'Rainbow Six Siege', 
      image: '/rainbow-six-siege.jpg',
      description: 'A tactical first-person shooter game where two teams of five players engage in strategic gameplay.',
      genre: 'First-Person Shooter',
      developer: 'Ubisoft Montreal',
      releaseDate: '2015-12-01',
      platforms: ['PC', 'PlayStation 4', 'Xbox One'],
      price: 40
    },
    { 
      name: 'Rocket League', 
      image: '/rocket-league.jpg',
      description: 'A sports game that combines soccer with high-powered vehicles, allowing players to perform aerial acrobatics.',
      genre: 'Sports',
      developer: 'Psyonix',
      releaseDate: '2015-07-07',
      platforms: ['PC', 'PlayStation 4', 'Xbox One', 'Nintendo Switch'],
      price: 20
    },
    { 
      name: 'Counter-Strike: Global Offensive', 
      image: '/counter-strike-go.jpg',
      description: 'A multiplayer first-person shooter game that emphasizes teamwork and strategy.',
      genre: 'First-Person Shooter',
      developer: 'Valve',
      releaseDate: '2012-08-21',
      platforms: ['PC', 'PlayStation 3', 'Xbox 360'],
      price: 0
    },
  ];

  const handlePlayNow = () => {
    if (!currentUser) {
      setShowLogin(true);
      return;
    }

    if (selectedGame) {
      const userLibrary = JSON.parse(localStorage.getItem('userLibrary') || '[]');
      if (userLibrary.some((game: any) => game.name === selectedGame.name)) {
        router.push('/library');
      } else {
        if (selectedGame.price === 0) {
          // If the game is free, add it to the library
          userLibrary.push(selectedGame);
          localStorage.setItem('userLibrary', JSON.stringify(userLibrary));
          alert(`${selectedGame.name} has been added to your library!`);
          router.push('/library');
        } else {
          // If the game is not free, redirect to the billing page
          router.push(`/billing/${selectedGame.name.toLowerCase().replace(/\s+/g, '-')}`);
        }
      }
    }
  };

  const handleLogin = (username: string) => {
    setCurrentUser(username);
    setShowLogin(false);
    if (selectedGame) {
      handlePlayNow();
    }
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
      <main className="flex-grow pt-16">
        {/* Hero Section with Sliding Background */}
        <section className="relative h-[600px] mb-12 overflow-hidden">
          <div className="absolute inset-0 flex animate-slide">
            {[...allGames, ...allGames].map((game, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Image
                  src={game.image}
                  alt={game.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent">
            <div className="container mx-auto h-full flex items-center">
              <div className="max-w-lg">
                <h1 className="text-6xl font-bold mb-4">Featured Game</h1>
                <p className="text-xl mb-6">Experience the latest and greatest in gaming.</p>
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded transition duration-300"
                  onClick={handlePlayNow}
                >
                  Play Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Message */}
        {currentUser && (
          <section className="container mx-auto px-4 mb-12">
            <h2 className="text-3xl font-bold mb-4">Welcome back, {currentUser}!</h2>
          </section>
        )}

        {/* Featured Games */}
        <section className="container mx-auto px-4 mb-12 relative">
          <h2 className="text-3xl font-bold mb-6 text-center">Featured Games</h2>
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-full z-10"
            onClick={scrollLeft}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-4 pb-4">
            {allGames.map((game, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex-shrink-0 w-64">
                <div className="relative w-full h-64">
                  <Image 
                    src={game.image}
                    alt={game.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{game.name}</h3>
                  <p className="text-gray-400 mb-4">{game.description.substring(0, 100)}...</p>
                  <button 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                    onClick={() => {
                      setSelectedGame(game);
                      handlePlayNow();
                    }}
                  >
                    Play Now
                  </button>
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

        {/* Game Library */}
        <section className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl font-bold mb-6">Game Library</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {allGames.map((game, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105"
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
                  <h3 className="text-sm font-semibold">{game.name}</h3>
                </div>
              </div>
            ))}
          </div>
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
                    onClick={handlePlayNow}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 inline-block"
                  >
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Login Modal */}
        {showLogin && (
          <Login 
            onClose={() => setShowLogin(false)} 
            onLogin={handleLogin}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
