import React from 'react'
import image from './About.jpg'
import  './About.css'

const About = () => {
  return (
    <div className='About-page'>
      <h1 >ABOUT LINK EYE</h1>
      <p className='about-p'>Link Eye Agencies is a company which provides services including Photography and Videography</p>
      <img src={image} alt="link eye" className='image' />
      <p>We are currently located in Kisumu City, Rado Shopping Centre opposite Kisumu Social Hall, near Khetia's Supermarket.</p>
    </div>
  )
}

export default About;
