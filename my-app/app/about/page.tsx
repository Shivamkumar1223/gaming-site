'use client';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  const [showSubscription, setShowSubscription] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically process the payment
    console.log('Payment details:', paymentDetails);
    setShowSubscription(false);
    setShowThankYou(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Nav />
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        <h1 className="text-5xl font-bold mb-12 text-center text-purple-400">About Balors Club</h1>
        
        <div className="mb-16 text-center">
          <p className="text-xl mb-6">
            Welcome to Balors Club, your premier destination for all things gaming.
          </p>
          <p className="text-lg">
            At Balors Club, we're dedicated to providing an unparalleled gaming experience for enthusiasts and professionals alike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-purple-400">Our Mission</h2>
            <p className="mb-4">
              Balors Club is committed to fostering a vibrant gaming community that celebrates creativity, competition, and camaraderie. We strive to:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Provide access to a diverse library of high-quality games</li>
              <li>Organize competitive tournaments and events</li>
              <li>Offer resources for gamers to improve their skills</li>
              <li>Create a platform for gamers to connect and collaborate</li>
            </ul>
          </div>
          <div>
            <Image 
              src="/images/gaming-setup.jpg" 
              alt="Professional Gaming Setup" 
              width={500} 
              height={300} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Cutting-Edge Technology</h3>
              <p>Experience gaming on state-of-the-art equipment and platforms.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Expert Community</h3>
              <p>Connect with skilled gamers and industry professionals.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Exclusive Events</h3>
              <p>Participate in members-only tournaments and gaming sessions.</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">Join Balors Club Today</h2>
          <p className="text-lg mb-8">
            Elevate your gaming experience and become part of a community that's shaping the future of interactive entertainment.
          </p>
          <button 
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            onClick={() => setShowSubscription(true)}
          >
            Become a Member
          </button>
        </div>
      </main>
      <Footer />

      {/* Subscription Modal */}
      {showSubscription && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Subscribe to Balors Club</h2>
            <p className="mb-6">Join our exclusive gaming community for just $9.99/month!</p>
            <ul className="list-disc list-inside mb-6 text-gray-300">
              <li>Access to premium game content</li>
              <li>Exclusive tournament entries</li>
              <li>Monthly gaming rewards</li>
              <li>24/7 community support</li>
            </ul>
            <form onSubmit={handleSubscribe}>
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
                  Subscribe Now
                </button>
                <button
                  type="button"
                  className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                  onClick={() => setShowSubscription(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
            <h2 className="text-3xl font-bold mb-4 text-purple-400">Thank You!</h2>
            <p className="mb-6">You are now an official member of Balors Club. Welcome to our gaming family!</p>
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              onClick={() => setShowThankYou(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}