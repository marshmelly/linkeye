import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import NewPhoto from './Components/NewPhoto';
import Scrolling from './Components/Scrolling';
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from './Components/Landing';
import Newfooter from './Components/Newfooter'






function App() {
  return (
    <div className='App'>
     
       
       <Navbar/>
       <Scrolling/>
       

           <BrowserRouter>
           

            <Routes>
              <Route path='/home' element={<Home/>}/>
              <Route path='/' element={<Landing/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/newfooter' element={<Newfooter/>}/>
              <Route path='/photography' element={<NewPhoto/>}/>
              <Route path='/footer' element={<Footer/>}/>
            </Routes>
           </BrowserRouter>
       <Footer/>    
    </div>
      );
}

export default App;
