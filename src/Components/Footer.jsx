import React from 'react'



const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
   <div className='footer'>
     <footer style={{ textAlign: 'center', padding: '1rem 0', backgroundColor: '#f1f1f1', marginTop: 'auto' }}>
     © {currentYear} Link Eye Agencies. All rights reserved.
     </footer>
   </div>
  )
}

export default Footer
