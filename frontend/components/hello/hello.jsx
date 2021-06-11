import React from 'react';



const Hello = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <button onClick={() => openModal('login')}>Login</button>
      <button onClick={() => openModal('signup')}>Signup</button>
    </nav>
  );
  const hi = () => (
    <div>
      <h1 className="welcome-name"> Hi {currentUser.username}!</h1>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </div>
  );

  return (
    currentUser ?
    hi(currentUser, logout) :
    sessionLinks()
  );
};

export default Hello;
