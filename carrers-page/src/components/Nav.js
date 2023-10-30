import React from 'react';
    
const Nav = () => {
  return (
    <>
    <nav className="navbar navbar-light bg-light sticky-top">
      <div>
      <span className='toggle' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="bi bi-text-left"></i></span>
      <img src='https://infomericainc.com/Content/images/logo.png' height="60px"  alt='Logo' className='infmlogo'></img>
      </div>
      <div className='col-8 d-flex justify-content-around navmenu'>
          <span>HOME</span>
          <span>ABOUTUS</span>
          <span>INDUSTRIES</span>
          <span>SERVICES</span>
          <span>SOLUTIONS</span>
          <span>CONTACT US</span>
          <span>CSR</span>
          <span>CAREERS</span>
      </div>
    </nav>

    
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
               
      <div className="offcanvas-header">
        <img src='https://infomericainc.com/Content/images/logo.png' height="50px"  alt='Logo'></img>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      {/* <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <img src='https://infomericainc.com/Content/images/logo.png' height="60px"  alt='Logo'></img>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div> */}


      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#">Home</a>
          </li>      
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              ABOUT US
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Vision</a></li>
              <li><a class="dropdown-item" href="#">Mission</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              INDUSTRIES
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Manufacturing & automotive</a></li>
              <li><a class="dropdown-item" href="#">Energy & Utilities</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              SERVICES
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Customer Relationship Management(CRM)</a></li>
              <li><a class="dropdown-item" href="#">Security Architecture</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              SOLUTIONS
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Robotic Automation Process</a></li>
              <li><a class="dropdown-item" href="#">Oracle Cloud</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link " a-current="page" href="#">CONTACT US</a>
          </li> 
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#">CSR</a>
          </li> 
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              CAREERS
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Hyderabad</a></li>
              <li><a class="dropdown-item" href="#">Bangalore</a></li>
              <li><a class="dropdown-item" href="#">US</a></li>
            </ul>
          </li>
        </ul>
        
      </div>
    </div>
              
    </>
  );
};
export default Nav;