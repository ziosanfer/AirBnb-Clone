import React from 'react';
import Modal from './modal/modal'

const App = () => (
  <div className="full-page">
    <div className="banner">
      <h3 className="banner-text">More information on how we're handling the pandemic</h3>
    </div>
    <div className="search-bar">
      <form>
        <div className="search-container">
          <input type="text" className="search" placeholder="Location"/>
          <input type="text" className="search" placeholder="Check in"/>
          <input type="text" className="search" placeholder="Check out" />
          <input type="text" className="search" placeholder="Guests"/>
          <button type="submit" className="button">Search</button>
        </div>
      </form>
    </div>
    <div className="topnav">
      <a className="topnav-ele" href="#home">Places to stay</a>
      <a className="topnav-ele" href="#about">Experiences</a>
      <a className="topnav-ele" href="#contact">Online Experiences</a>
      <br/>
    </div>
    <div className="dropdown">
      <input className="dropdown-button" type="image" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" />
      <div class="dropdown-content">
        <a href="#">Login</a>
        <br/>
        <a href="#">Signup</a>
      </div>
    </div>
    <Modal />
  </div>
);

export default App;
