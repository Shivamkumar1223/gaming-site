import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function ValorantPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Nav />
      <main className="flex-grow flex flex-col items-center p-4 mt-24 mb-16">
        <h1 className="text-4xl font-bold mb-6 text-center text-red-500">Valorant</h1>
        <Image 
          src="/valorant-logo.png" 
          alt="Valorant Logo" 
          width={200} 
          height={100}
          className="mb-8"
        />
        <p className="text-xl text-center mb-8">
          A 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-red-400">Agents</h2>
            <p>Choose from a diverse cast of agents, each with unique abilities to outplay your opponents.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-red-400">Maps</h2>
            <p>Battle across a variety of maps, each designed to emphasize strategic gameplay and teamwork.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-red-400">Weapons</h2>
            <p>Master an arsenal of lethal weapons, each with unique recoil patterns and shooting mechanics.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-red-400">Competitive</h2>
            <p>Climb the ranked ladder and prove your skills against players from around the world.</p>
          </div>
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full text-xl transition duration-300">
          Play Now
        </button>
      </main>
      <Footer />
    </div>
  );
}