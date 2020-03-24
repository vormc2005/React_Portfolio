import React from 'react'
import "./ContactForm.css"

function ContactForm() {
    return (
        <>
        <div >
            <h2>Contact Me</h2>
  <div className='container' id="leaveContacts">
    <form action="https://formspree.io/mknbrjny" method="POST" id ="form">

    <div id="name">
    <div id="userinfo">
      Your name:
      <br />
    </div>
      <input type="text" name="name" id="inputs"/>
    </div>
    <br />
    <div id="email">
    <div id="userinfo">
      Your email:
      <br />
      </div>
      <input type="email" name="_replyto" id="inputs"/>
    </div>
    <br />
    <div id="message">
    <div id="userinfo"/>
      Your message:
      <br />
      </div>
      <textarea name="message" class="form-control" rows="3" id="inquirytext"></textarea>
    
    <br /> 

    <button type="submit" id="submitinfo" class="btn btn-primary">Send</button>
  </form>
  </div>
  </div>
       </> 
    )
}

export default ContactForm
