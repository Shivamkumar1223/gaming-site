'use client';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useState } from 'react';

// Mock data for community features
const forumTopics = [
  { id: 1, title: "Tips for improving in FPS games", replies: 23, lastActive: "2 hours ago" },
  { id: 2, title: "Favorite RPG of 2023?", replies: 45, lastActive: "1 day ago" },
  { id: 3, title: "Upcoming eSports tournaments", replies: 12, lastActive: "3 hours ago" },
];

const upcomingEvents = [
  { id: 1, name: "Balors Cup: VALORANT Tournament", date: "March 15, 2024", participants: 64 },
  { id: 2, name: "Retro Gaming Night", date: "April 2, 2024", participants: 30 },
  { id: 3, name: "League of Legends Community Clash", date: "April 10, 2024", participants: 100 },
];

const topPlayers = [
  { id: 1, name: "XxDragonSlayerxX", game: "VALORANT", score: 2500 },
  { id: 2, name: "NinjaWarrior99", game: "Fortnite", score: 2350 },
  { id: 3, name: "MidnightAssassin", game: "CS:GO", score: 2200 },
];

export default function Community() {
  const [activeTab, setActiveTab] = useState('forum');

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Nav />
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-purple-400">Balors Club Community</h1>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <button 
            className={`px-4 py-2 mx-2 rounded-full ${activeTab === 'forum' ? 'bg-purple-600' : 'bg-gray-700'} hover:bg-purple-500 transition duration-300`}
            onClick={() => setActiveTab('forum')}
          >
            Forum
          </button>
          <button 
            className={`px-4 py-2 mx-2 rounded-full ${activeTab === 'events' ? 'bg-purple-600' : 'bg-gray-700'} hover:bg-purple-500 transition duration-300`}
            onClick={() => setActiveTab('events')}
          >
            Events
          </button>
          <button 
            className={`px-4 py-2 mx-2 rounded-full ${activeTab === 'leaderboard' ? 'bg-purple-600' : 'bg-gray-700'} hover:bg-purple-500 transition duration-300`}
            onClick={() => setActiveTab('leaderboard')}
          >
            Leaderboard
          </button>
        </div>

        {/* Forum Section */}
        {activeTab === 'forum' && (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Latest Forum Topics</h2>
            <ul>
              {forumTopics.map(topic => (
                <li key={topic.id} className="mb-4 p-4 bg-gray-700 rounded-lg">
                  <h3 className="text-xl font-semibold">{topic.title}</h3>
                  <p className="text-sm text-gray-400">Replies: {topic.replies} | Last active: {topic.lastActive}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Events Section */}
        {activeTab === 'events' && (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
            <ul>
              {upcomingEvents.map(event => (
                <li key={event.id} className="mb-4 p-4 bg-gray-700 rounded-lg">
                  <h3 className="text-xl font-semibold">{event.name}</h3>
                  <p className="text-sm text-gray-400">Date: {event.date} | Participants: {event.participants}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Leaderboard Section */}
        {activeTab === 'leaderboard' && (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Top Players</h2>
            <ul>
              {topPlayers.map(player => (
                <li key={player.id} className="mb-4 p-4 bg-gray-700 rounded-lg flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold">{player.name}</h3>
                    <p className="text-sm text-gray-400">Game: {player.game}</p>
                  </div>
                  <div className="text-2xl font-bold text-purple-400">{player.score}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}