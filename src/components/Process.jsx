import React from 'react';
import troller from '../assets/troller.png';
import carton from '../assets/carton.png';
import phone from '../assets/icono.png';
import heroImg from '../assets/hero-img-2.png';

const Process = () => {

  return (
    <section className='process'>
      <h3>How it works</h3>
      <div className="process_content">
        <img src={heroImg} alt="process" className='process'/>

        <div className="process_content-procedure">
          <div className="process_content-procedure-item">
            <div className="img-container">
              <img src={phone} alt="icon-1" />
            </div>
            <div>
              <h4>Delivery Request</h4>
              <p>Place a delivery request on the mobile application</p>
            </div>
          </div>

          <div className="process_content-procedure-item">
            <div className="img-container">
              <img src={carton} alt="icon-2" />
            </div>
            <div>
              <h4>Package pickup</h4>
              <p>Your package will be picked up from your location</p>
            </div>
          </div>

          <div className="process_content-procedure-item">
            <div className="img-container">
              <img src={troller} alt="icon-3" />
            </div>
            <div>
              <h4>Exact Delivery Location</h4>
              <p>Your package will then be delivered to the exact location you specified</p>
            </div>
          </div>
      </div>
      </div>
    </section>
  )
}

export default Process