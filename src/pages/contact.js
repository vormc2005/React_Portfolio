import React from 'react';
import Navbar from "../components/Navbar/Navbar"
import Footer from '../components/Footer/Footer';
import ContactForm from '../components/ContactForm.js/ContactForm';
import "./style.css"


function Contact() {
  return (

    
    <div className="background">
        
      <Navbar/>
      <ContactForm/>
      <Footer/>     
    </div>
  );
}

export default Contact;