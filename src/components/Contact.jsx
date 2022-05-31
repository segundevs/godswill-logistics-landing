import React from 'react';
import { IoLocationOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5';

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section id='contact' className='contact'>
      <h3>Contact Us</h3>
      <p className='contact_text'>We don't leave our customers hanging. Everything about us is on this app, but if you ever need help (or you just want to chat), we've got you</p>

      <div className="contact_icons">
        <div className="icon">
          <IoLocationOutline className='icon-item'/>
          <p>71 Mission Road,</p>
          <p>Benin City</p>
        </div>

        <div className="icon">
          <IoCallOutline className='icon-item'/>
          <p>080 7711 5154</p>
          <p>080 7711 6068</p>
        </div>

        <div className="icon">
          <IoMailOutline className='icon-item'/>
          <p>willsroyaltylogistics</p>
          <p>@outlook.com</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="contact_form">
        <div className="contact_form-group">
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
        </div>

        <div className="contact_form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
        </div>

        <div className="contact_form-group">
          <label>Message</label>
          <input className='text-area' value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your message here" />
        </div>

        <button type="submit">Send</button>
      </form>
    </section>
  )
}

export default Contact