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
const AdvancedFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <p>Simplified Footer</p>
      </div>
    </footer>
  );
};

export default AdvancedFooter;