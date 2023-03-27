import Header from "./Header";
import React, { useState } from 'react';
import "../style/contact.css"

// Logic for sumbitting a contact form still in progress
function ContactMe() {

    const [name, setName] = useState('');
    const [email,setEmail] =useState('');
    const [message, setMessage] =useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleSumbit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const data = {
          name,
          email,
          message,
        };
    
        try {
          const response = await fetch('/api/contactMe', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    
          const responseData = await response.json();
          if (responseData.success) {
            setSubmitSuccess(true);
          } else {
            console.log(responseData.error);
          }
        
        } catch (error) {
          console.log(error);
        }
    
        setIsSubmitting(false);
      };
    
      if (submitSuccess) {
        return <p>Your message wase sent!</p>;
      }
    //   Creates the form for contact me along with header
    return (
        <div>
            <Header></Header>
        <form className="contact-form" onSubmit={handleSumbit} >
          <div className="form-field">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
        </div>
      );
 }


export default ContactMe