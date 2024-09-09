import Nav from './components/Nav';
import Footer from './components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function MobileHome() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-300">
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/gaming-background.jpg"
          alt="Gaming Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      <Nav />
      <main className="flex-grow flex flex-col items-center p-4 mt-16 mb-16 relative z-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-red-500">Balors Gaming Club</h1>
        <div className="grid grid-cols-1 gap-8 mb-12 w-full">
          <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-red-400">Game Library</h2>
            <Image 
              src="/images/game-library.jpg" 
              alt="Game Library" 
              width={300} 
              height={200}
              className="mb-4 rounded w-full"
            />
            <p className="mb-4">Explore our vast collection of games across all genres and platforms.</p>
            <Link 
              href="/games" 
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full text-sm transition duration-300 inline-block"
            >
              Browse Games
            </Link>
          </div>
          <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-red-400">Gaming Community</h2>
            <Image 
              src="/images/gaming-community.jpg" 
              alt="Gaming Community" 
              width={300} 
              height={200}
              className="mb-4 rounded w-full"
            />
            <p className="mb-4">Join our vibrant community of gamers. Share experiences and find teammates.</p>
            <Link 
              href="/community" 
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full text-sm transition duration-300 inline-block"
            >
              Join Now
            </Link>
          </div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Ready to Play?</h2>
          <Link 
            href="/signup" 
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block"
          >
            Join Balors Gaming Club
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}