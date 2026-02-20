import { useState } from 'react';
import Dashboard from './components/Dashboard';
import AuthPage from './components/AuthPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem('token');
  });

  return (
    <>
    {isLoggedIn ? <Dashboard setIsLoggedIn={setIsLoggedIn} /> : <AuthPage setIsLoggedIn={setIsLoggedIn} />}
    </>
  )
}

export default App
