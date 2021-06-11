import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Modal from './modal/modal';
import HelloContainer from './hello/hello_container';
import LoginFormContainer from './session_form/login_form_container.jsx';
import SignupFormContainer from './session_form/signup_form_container.jsx';
import TreeIndex from './tree_index/tree_index';
const App = () => (
  <div>
    <span className="banner">
      <a className="banner-text">More information on how we're handling the pandemic</a>
    </span>
    
      
    <div className="image-background">
      <div className="topnav">
        <img src="../../app/assets/images/leaf-logo.png"></img>
        <a className="topnav-ele" href="/api/trees">Places to stay</a>
        <a className="topnav-ele" href="/#/">Experiences</a>
        <a className="topnav-ele" href="/#/">Online Experiences</a>
        <br/>
        <div className="dropdown">
          <input className="dropdown-button" type="image" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" />
          <div className="dropdown-content">
            <Modal />
            <HelloContainer />
         </div>
        </div>
      </div>
      <div className="search-bar">
        <form>
          <div className="search-container">
            <input type="text" className="search-ele" placeholder="Location"/>
            <input type="text" className="search-ele" placeholder="Check in"/>
            <input type="text" className="search-ele" placeholder="Check out" />
            <input type="text" className="search-ele" placeholder="Guests"/>
            <button type="submit" className="button"><i className="fa fa-search"></i></button>
          </div>
       </form>
      </div>
      <div className="intro-text">
        <h1>Welcome to Trees N Bees</h1>
        <h2>World leaders in finding the right trees with rabid bees</h2>
      </div>
    </div>
    <div className="explore">
      <h2>Explore nearby</h2>
      <div className="explore-container">
        <div className="explore-this">
          <input className="explore-button" type="image" src="https://www.ctvnews.ca/polopoly_fs/1.4498397.1601384027!/httpImage/image.jpg_gen/derivatives/landscape_960/image.jpg" />
          <p>Jamaica</p>
        </div>
        <div className="explore-this">
          <input className="explore-button" type="image" src="https://i.pinimg.com/originals/be/96/fa/be96fac2221da19684e53612ea8aa78c.jpg" />
          <p>Southern Prussia</p>
        </div>
        <div className="explore-this">
          <input className="explore-button" type="image" src="https://cdn.statically.io/img/i.pinimg.com/originals/a2/ba/95/a2ba9586755910b3495a80c430ff3ef2.jpg" />
          <p>Eastern Uzbekistan</p>
        </div>
        <div className="explore-this">
          <input className="explore-button" type="image" src="https://lh3.googleusercontent.com/proxy/OUKGjimBoIcC1NGM1MPkAE55meXQfshYNw4MBU2BprMDfb6iSktTSIK79fL7wsOzZqQW8UpW4YuOZc6N8k-OcagJVzjuuSmFpVAk4goIuY2mMJmiUqDwzIaw_O7Lnj5ulAAPlG69d6_08Q" />
          <p>Southeast Missouri</p>
        </div>
      </div>
      <div className="explore-container">
        <div className="explore-this">
          <input className="explore-button" type="image" src="https://wallpaperaccess.com/full/1163661.jpg" />
          <p>Northern Poland</p>
        </div>  
        <div className="explore-this">
          <input className="explore-button" type="image" src="https://cache.desktopnexus.com/thumbseg/297/297485-bigthumbnail.jpg" />
          <p>Holland</p>
        </div>  
        <div className="explore-this">
          <input className="explore-button" type="image" src="https://www.teahub.io/photos/full/28-287556_1920x1080-high-quality-live-birch-tree-backgrounds-high.jpg" />
          <p>Indonesia</p>
        </div>
        <div className="explore-this">
          <input className="explore-button" type="image" src="https://selfdeterminationtheory.org/wp-content/uploads/2015/02/palm-tree-wallpaper-hd.jpg" />
        <p>Western Mexico</p>
        </div>
      </div>
    </div>
    {/* <Switch>
      <Route exact path="/" component={TreeIndex} />
    </Switch> */}
  </div>
);

export default App;
