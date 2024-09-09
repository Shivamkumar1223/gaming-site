'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function BillingPage({ params }: { params: { gameName: string } }) {
  const [game, setGame] = useState<any>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const router = useRouter();

  useEffect(() => {
    // In a real app, you'd fetch the game details from an API
    // For now, we'll just use mock data
    const mockGame = {
      name: params.gameName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      price: 59.99 // Example price
    };
    setGame(mockGame);
  }, [params.gameName]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentDetails(prev => ({ ...prev, [name]: value }));
  };

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement the actual purchase logic
    // For now, we'll just simulate a purchase
    const userLibrary = JSON.parse(localStorage.getItem('userLibrary') || '[]');
    
    // Check if the game is already in the library
    if (!userLibrary.some((libraryGame: any) => libraryGame.name === game.name)) {
      userLibrary.push(game);
      localStorage.setItem('userLibrary', JSON.stringify(userLibrary));
      setShowConfirmation(true);
    } else {
      alert('You already own this game!');
      router.push('/library');
    }
  };

  if (!game) return <div>Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Nav />
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold mb-4">Purchase {game.name}</h1>
        <p className="mb-4">Price: ${game.price}</p>
        <form onSubmit={handlePurchase} className="max-w-md">
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
          <button 
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Complete Purchase
          </button>
        </form>
      </main>
      <Footer />

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
            <h2 className="text-3xl font-bold mb-4 text-blue-400">Thank You!</h2>
            <p className="text-xl mb-6">You have successfully purchased {game.name}!</p>
            <p className="mb-6">The game has been added to your library.</p>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              onClick={() => {
                setShowConfirmation(false);
                router.push('/library');
              }}
            >
              Go to Library
            </button>
          </div>
        </div>
      )}
    </div>
  );
}