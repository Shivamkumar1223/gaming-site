'use client';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Login from '../components/Login';

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
export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: ''
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.email) {
      setError('All fields are required');
      return;
    }
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    // For now, we'll just store it in localStorage
    localStorage.setItem('userDetails', JSON.stringify(formData));
    // Redirect to home page or show a success message
    router.push('/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Nav />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Sign Up for Balors Gaming Club</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobile" className="block mb-2">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Sign Up
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}