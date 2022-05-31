import React from 'react';
import playstore from '../assets/playstore.svg';
import phones from '../assets/3-phones.svg';

const Action = () => {
  return (
    <div className='action'>
      <h3>Download our app</h3>
      <div className="action_content">
        <div className="action_content-text">
          <h4>Stress free delivery</h4>
          <p>We provide an ideal way to deliver your packages, it only takes a few minutes to start enjoying a seamless delivery service.</p>
          <a href="#" target="_blank">
            <img src={playstore} alt="playstore" className='playstore'/>
          </a>
        </div>
          <img src={phones} alt="phones" className="action_content-img" />
      </div>
    </div>
  )
}

export default Action