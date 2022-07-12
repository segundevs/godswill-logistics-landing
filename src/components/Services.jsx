import React from 'react';
import phone from '../assets/1-phone.svg';
import icon1 from '../assets/icon-1.png';
import icon2 from '../assets/icon-2.png';
import icon3 from '../assets/icon-3.png';
import icon4 from '../assets/icon-4.png';

const Services = () => {
  return (
    <div className='services' id='services'>
      <div className="services_heading">
        <h3>What we provide</h3>
        <p>We are expanding rapidly with a robust global network that offers domestic & international, inter & intra-state delivery services</p>
      </div>
      <div className="services_content">
        <img src={phone} alt="i-phone" className='services_content-phone'/>
        <div className="services_content-offer">
            <div className="services_content-offer-item">
              <div className="img-container">
                <img src={icon1} alt="icon-1" />
              </div>
              <div>
                <h4>Exact Delivery Location</h4>
                <p>We deliver to the exact delivery location or address</p>
              </div>
            </div>
            <div className="services_content-offer-item">
              <div className="img-container">
                <img src={icon2} alt="icon-2" />
              </div>
              <div>
                <h4>Order Tracking</h4>
                <p>Conveniently track the location and status of your delivery from our mobile application</p>
              </div>
            </div>
        </div>
        <div className="services_content-offer">
            <div className="services_content-offer-item">
              <div className="img-container">
                <img src={icon3} alt="icon-3" />
              </div>
              <div>
                <h4>City Delivery</h4>
                <p>We deliver to any city within Edo State</p>
              </div>
            </div>
            <div className="services_content-offer-item">
              <div className="img-container">
                <img src={icon4} alt="icon-4" />
              </div>
              <div>
                <h4>Packaging</h4>
                <p>We also provide amazing packaging for your product or parcel you wish to deliver</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services