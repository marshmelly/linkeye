import React from 'react'
import './Photography.css'
import pic from './project files/Snip1.png'
import pic1 from './project files/potrait.jpg'
import pic3 from './project files/theatre.jpg'

const Photography = () => {
  return (
    <div className='photo'>
      <h1>Photography</h1>
        <img src={pic} alt="pic1" /><br /> <br />
        <img src={pic1} alt="pic2" className='image' /><br /><br /><br />
        <img src={pic3} alt="pic3" className='image' />
    </div>
  )
}

export default Photography;
