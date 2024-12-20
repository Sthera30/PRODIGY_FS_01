import React from 'react'
import { FaMailBulk, FaPhone, FaMailchimp } from 'react-icons/fa'
import '../css/contact.css'

function Contact() {
  return (
    <>

      <div className='contact-contaner'>

<h2>GET IN TOUCH</h2>

        <div className='contact-inner'>


          <div className='contact-lef'>

            <span>Send us a message <FaMailBulk style={{ color: 'orange' }} /> </span>
            <p>Feel free to reach out through contact form or find our contact below.</p>

            <div className='info-container'>

              <p className='contact-left'><FaPhone style={{color: 'green'}} /> &nbsp;&nbsp;(+27) 62 419 2299</p>
              <p className='contact-left'><FaMailchimp style={{color: 'green'}} /> &nbsp;&nbsp;support@foodeats.com</p>

            </div>

          </div>

          <div className='contact-right'>

            <form>


              <label>Enter your name</label>
              <input type="text" name='name' placeholder='Enter your name' />


              <label>Enter your email</label>
              <input type="email" name='email' placeholder='Enter your email' />


              <label>Write your messages here</label>
              <textarea name="" id="" cols={10} rows={10} placeholder='Enter your message'></textarea>

            </form>

          </div>

        </div>

      </div>

    </>
  )
}

export default Contact
