import React from 'react'
import pic from './project files/Pic.png'
import './Contact.css'




const Contact = () => {
  const handleSubmit = async (e) =>{
    e.preventDefault();

  }
  return (
    <div className='text'>
      <h1>Contact Us</h1>
    <div className='p-2 pic'>
        <img src={pic} alt="" className='pic' />
    </div>
    
       <div className="row justify-content-center mt-2">
       <div className="shadow card col-md-6 p-2">
        <form onSubmit={handleSubmit}> 
          <h3>Have Anything to Say?</h3>
          <input type="text" className='form-control' placeholder='Enter Name' /><br />
          <input type="email" className='form-control' placeholder='Enter Email' /><br />
          <textarea name="" id="" cols={50} rows={6}></textarea><br />
          <button className='button w-25' type="submit">
            Submit
          </button>
        </form>
      </div>

      
     </div>
    
<br /><br />
 
    <div className="row justify-content-center mt-2">

      <div className="shadow card col-md-6 p-2">
        <h3>You can also contact us at</h3>
     <div className="col-md-4">
       <p>linkeyemedia@gmail.com</p>
      <p>+254 720 887</p>
     </div>

     <div className="col-md-4">
      <p></p>
     </div>
     </div>
<br /><br />
   </div>
 
     <br />
    </div>
  )
}

export default Contact;
