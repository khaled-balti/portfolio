import React from 'react';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-black sticky-top px-5'>
      <a className='navbar-brand' href='#'>
        <img src={Logo} alt='Logo' className='img-fluid' width={60} height={60} style={{ borderRadius: '50%' }} />
      </a>
      <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav ms-auto d-flex justify-content-between w-50'>
          <li className='nav-item d-flex align-items-center'>
            <a className='nav-link text-center text-white fs-5' href='#home'>Home</a>
          </li>
          <li className='nav-item d-flex align-items-center'>
            <a className='nav-link text-center text-white fs-5' href='#services'>Service</a>
          </li>
          <li className='nav-item d-flex align-items-center'>
            <a className='nav-link text-center text-white fs-5' href='#about'>About me</a>
          </li>
          <li className='nav-item d-flex align-items-center'>
            <a className='nav-link text-center text-white fs-5' href='#projects'>Portfolio</a>
          </li>
          <li className='nav-item d-flex align-items-center'>
            <a className='nav-link text-center text-white fs-5' href='#contact'>Contact me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
