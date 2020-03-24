import React from 'react';
import Navbar from "../components/Navbar/Navbar"
import Footer from '../components/Footer/Footer';
import ContactForm from '../components/Aboutme/ContactForm.js/ContactForm';



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