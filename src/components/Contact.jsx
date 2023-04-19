import React from 'react'
import BannerImage from '../assets/banner.png';

import "../styles/style.css";

function Contact() {
    return (
        <div className='contact'>
            <div className='leftSide'
                style={{ backgroundImage: `url(${BannerImage})` }}></div>
            <div className='rightSide'>
                <h1>Contact Us</h1>
                <form >
                    <label > Name - Lastname </label>
                    <input type="text" required name='name' placeholder='Please enter your name and lastname...' />

                    <label >Email </label>
                    <input type="email" name='email' placeholder='Please enter your email...' />

                    <label >Your Message</label>
                    <textarea name="message" rows="6" placeholder='Please enter your message...'></textarea>

                    <button>Send</button>

                </form>

            </div>
        </div>
    )
}

export default Contact