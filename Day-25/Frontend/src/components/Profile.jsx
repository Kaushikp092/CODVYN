import { useEffect, useState } from "react";
import { fetchCurrentUser } from "../services/api";
import "./Profile.css";

function Profile({ setIsLoggedIn }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCurrentUser()
      .then((data) => {
        setUser(data.user);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  if (loading) {
    return (
      <div className="profile-page">
        <div className="profile-loading">
          <div className="profile-loading-spinner"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-error">
        <h2>Oops!</h2>
        <p>{error}</p>
        <button onClick={handleLogout} className="logoutBtn">
          Go to Login
        </button>
      </div>
    );
  }

  // Get initials for avatar
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            {getInitials(user.username)}
          </div>
          <h1>Welcome, {user.username}</h1>
          <p className="profile-subtitle">Your Profile</p>
        </div>
        
        <div className="profile-content">
          <div className="profile-info-card">
            <div className="profile-info-item">
              <div className="profile-info-icon">
                <span>👤</span>
              </div>
              <div>
                <div className="profile-info-label">Username</div>
                <div className="profile-info-value">{user.username}</div>
              </div>
            </div>
            
            <div className="profile-info-item">
              <div className="profile-info-icon">
                <span>✉️</span>
              </div>
              <div>
                <div className="profile-info-label">Email</div>
                <div className="profile-info-value">{user.email}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="profile-actions">
          <button onClick={handleLogout} className="logoutBtn">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;

