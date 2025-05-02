import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Photography from './Components/Photography';
import Videography from './Components/Videography';
import Footer from './Components/Footer';





function App() {
  return (
    <div className='App'>
       
       
       <Navbar/>

           <BrowserRouter>
           

            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/photography' element={<Photography/>}/>
              <Route path='/videography' element={<Videography/>}/>
              <Route path='/footer' element={<Footer/>}/>
            </Routes>
           </BrowserRouter>
       <Footer/>    
    </div>
      );
}

export default App;
