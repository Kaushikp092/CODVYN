import { useState } from 'react';
import Dashboard from './components/Dashboard';
import AuthPage from './components/AuthPage';
import Profile from './components/Profile';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem('token');
  });
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <>
    {isLoggedIn ? (
      <div className="app-container">
        <nav className="nav-tabs">
          <button 
            className={activeTab === 'profile' ? 'active' : ''} 
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button 
            className={activeTab === 'dashboard' ? 'active' : ''} 
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
        </nav>
        <div className="main-content">
          {activeTab === 'profile' ? (
            <Profile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <Dashboard setIsLoggedIn={setIsLoggedIn} />
          )}
        </div>
      </div>
    ) : (
      <AuthPage setIsLoggedIn={setIsLoggedIn} />
    )}
    </>
  )
}

export default App;

