import React from 'react';
import logo from '../assets/logo2.svg';
import { IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer_content">
        <div className="logo" style={{color: 'white'}}> 
        <img src={logo} alt="brand-logo"/>
        <div>
          <span>wills royalty</span>
          <span>logistics</span>
        </div>
      </div>

      <div className="footer_links">
        <a href="#hero">Home</a>
        <a href="#services">Services</a>
        <a href="#faqs">FAQ</a>
        <a href="#contact">Contact us</a>
      </div>

      <div className="footer_social-links">
        <a href="https://www.facebook.com/wills-royalty-logistics-107889328590552" target="_blank">
          <IoLogoFacebook className='icon'/>
        </a>
        <a href="https://www.instagram.com/willsroyaltylogistics" target="_blank">
          <IoLogoInstagram className='icon'/>
        </a>
        <a href="https://wa.me/+2348077114630/?text=Welcome to Wills Royalty Logistics, how may we help you today?" target="_blank">
          <IoLogoWhatsapp className='icon'/>
        </a>
      </div>
      </div>

      <p>Copyright Will's Royalty Logistics - {new Date().getFullYear()}</p>
      
    </footer>
  )
}

export default Footer