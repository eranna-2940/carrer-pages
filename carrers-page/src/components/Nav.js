import React from 'react'
import '../App.css'

const Nav = () => {
  return (
 <div className='main'> 

 <div>
 <img src='https://demositeinfomerica.azurewebsites.net/Content/images/logo.png' height={60} alt='no-images' />
 </div>
 
<div> 
<ul>

  <li><a href="#home">HOME</a></li>
  <li><a href="#news">ABOUTUS</a></li>
  <li><a href="#contact">INDUSTRIES</a></li>
  <li><a href="#services">SERVICES</a></li>
  <li><a href="#solutions">SOLUTIONS</a></li>
  <li><a href="#contact">CONTACT US</a></li>
  <li><a href="#csr">CSR</a></li>
  <li><a href="#carrers">CAREERS</a></li>
   </ul>
   </div>

    </div>
  )
}


export default Nav