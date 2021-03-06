import React from 'react';
import playstore from '../assets/playstore.svg';
import mobileImg from '../assets/mobile-img.jpg';
import desktopImg from '../assets/desktop-img.png';

const Hero = () => {

  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => { 
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    
  }
  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <section className='hero' id='home'>
      <div className="hero_message">
        <span className='hero_message-sec'>Quality Service</span>
        <h1>The <span className='colored-text'>faster <br /> than light</span> delivery <br />service</h1>
        <p>An ideal way to deliver your goods and <br /> packages</p>
        
        <a href="https://play.google.com/store/apps/details?id=com.thirdwinter.mrwills.customer" target="_blank">
          <img src={playstore} alt="playstore-link" />
        </a>
      </div>
      <div className="hero_img">
        <img src={dimensions.width < 960 ? mobileImg : desktopImg} alt="hero" />
      </div>
    </section>
  )
}

export default Hero