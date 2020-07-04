import React from 'react';
import masthead from '../img/masthead.jpg'
import callout from '../img/callout.jpg'
import Tropical from '../videos/Tropical.mp4'

function Header() {
  return (
    <div>
      <div>

        {/*} <!-- Navigation -->*/}
        <a class="menu-toggle rounded" href="#">
          <i class="fas fa-bars"></i>
        </a>
        <nav id="sidebar-wrapper">
          <ul class="sidebar-nav">
            <li class="sidebar-brand">
              <a class="js-scroll-trigger" href="#page-top">Start Bootstrap</a>
            </li>
            <li class="sidebar-nav-item">
              <a class="js-scroll-trigger" href="#page-top">Home</a>
            </li>
            <li class="sidebar-nav-item">
              <a class="js-scroll-trigger" href="#about">About</a>
            </li>
            <li class="sidebar-nav-item">
              <a class="js-scroll-trigger" href="#services">Services</a>
            </li>
            <li class="sidebar-nav-item">
              <a class="js-scroll-trigger" href="#portfolio">Portfolio</a>
            </li>
            <li class="sidebar-nav-item">
              <a class="js-scroll-trigger" href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/*<!-- Header -->*/}
        <header class="masthead d-flex" style={{ backgroundImage: `url(${require("../img/masthead.jpg")})` }}>
          <div class="container text-center my-auto">
            <h1 class="mb-1">Portfolio</h1>
            <h3 class="mb-5">
              <em>Yariel Dominguez </em>
            </h3>
            <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
          </div>
          <div class="overlay"></div>
        </header>


      </div>
    </div>
  )
}

export default Header