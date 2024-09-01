import React from "react";
import BannerBackground from "./Assets/about-background-image.png";
import BannerImage from "./Assets/about-background.png";
import { FiArrowRight } from "react-icons/fi";
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Work from './Components/Work'
// Home.js
//export default Home;
function App() {
  return (
    <>
    <div className="App">
      
      <div className="home-container">
      <Navbar />
      <div style={{backgroundImage:`url(${BannerImage})`,
      objectFit:"contain",
      zIndex:"-1"
    }} className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>

      </div>
    </div>   
     </div>
     <About key="about" path="about"></About>
     <Work></Work>
     </>

  );
}

export default App;