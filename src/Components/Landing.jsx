import React from 'react'
import Home from './Home'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Landing = () => {
 const navigate = useNavigate('');
  
  return (
    <div>
      <header className='App-header'>
      <h2 className='land-text'>Come with us and explore the world of memories</h2>
      <button className='button' onClick={()=>{navigate('/home')}}>Explore</button>
      </header><Home/>
    </div>
  )
}

export default Landing
