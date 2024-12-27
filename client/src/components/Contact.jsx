import React, { useState } from 'react'
import { FaMailBulk, FaPhone, FaMailchimp } from 'react-icons/fa'
import '../css/contact.css'

function Contact() {

  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    formData.append("access_key", "eb6025cf-c28c-4ad9-b96e-d3b44e44269c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email sent...");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <>

      <div className='contact-contaner'>

        <h2>GET IN TOUCH</h2>

        <div className='contact-inner'>


          <div className='contact-lef'>

            <span>Send us a message <FaMailBulk style={{ color: 'orange' }} /> </span>
            <p>Feel free to reach out through contact form or find our contact below.</p>

            <div className='info-container'>

              <p className='contact-left'><FaPhone style={{ color: 'green' }} /> &nbsp;&nbsp;(+27) 62 419 2299</p>
              <p className='contact-left'><FaMailchimp style={{ color: 'green' }} /> &nbsp;&nbsp;support@foodeats.com</p>

            </div>

          </div>

          <div className='contact-right'>

            <form onSubmit={async (event) => onSubmit(event)}>


              <label>Enter your name</label>
              <input type="text" name='name' placeholder='Enter your name' required />


              <label>Enter your email</label>
              <input type="email" name='email' placeholder='Enter your email' required />


              <label>Write your messages here</label>
              <textarea name="message" cols={10} rows={10} placeholder='Enter your message' required></textarea>


              <div className='button-con'>

                <button>Send Message</button>
                <br />
                <span style={{color: 'green'}}>{result}</span>

              </div>

            </form>

          </div>

        </div>

      </div>

    </>
  )
}

export default Contact
