import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import { validateEmail } from '../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
      setErrorMessage('Message Sent');
      emailjs.sendForm('service_q1gurj6', 'template_nmtrq4k',e.target, 'user_WKjtfxtfgBID1daYlQ3y3' )
      .then(res => {
        console.log(res);
      }).catch(err=> console.log(err));
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section className = "container mt-5 text-light pb-400">
      <h1 className = "font-weight-light" data-testid="h1tag ">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className = "col-6">
          <label htmlFor="name">Name:</label>
          <input className = "form-control" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className = "col-6">
          <label htmlFor="email">Email address:</label>
          <input className = "form-control" type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className = "col-6">
          <label htmlFor="message">Message:</label>
          <textarea className = "form-control" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div className = "ml-3">
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className = "btn btn-light ml-3 mt-2" data-testid="button" type="submit">Submit</button>
        
      </form>
    </section>
  );
}

export default Contact;