        
            
                
                
                            import Link from 'next/link';
                            import { useState, useEffect } from 'react';
                            import Login from './Login';





                                
const Nav = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    setShowDropdown(false);
  };

  return (
    <nav className="bg-black bg-opacity-90 p-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:from-pink-500 hover:to-purple-500 transition duration-300">
          Balors Club
        </Link>
        <ul className="flex space-x-8 items-center">
          {['Home', 'Games', 'Library', 'Community', 'About'].map((item) => (
            <li key={item}>
              <Link 
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className="text-white hover:text-purple-400 transition duration-300 text-lg font-medium relative group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
          ))}
          {currentUser ? (
            <li className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center"
              >
                <span className="mr-2">{currentUser.charAt(0).toUpperCase()}</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md overflow-hidden shadow-xl z-10">
                  <Link href="/profile" className="block px-4 py-2 text-sm text-gray-200 hover:bg-purple-600 hover:text-white">Profile</Link>
                  <Link href="/settings" className="block px-4 py-2 text-sm text-gray-200 hover:bg-purple-600 hover:text-white">Settings</Link>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-purple-600 hover:text-white">Logout</button>
                </div>
              )}
            </li>
          ) : (
            <li>
              <button
                onClick={() => setShowLogin(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Login
              </button>
            </li>
          )}
        </ul>
      </div>
      {showLogin && <Login onClose={() => setShowLogin(false)} onLogin={(username) => { setCurrentUser(username); setShowLogin(false); }} />}
    </nav>
  );
};

export default Nav;