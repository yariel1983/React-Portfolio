import React from 'react';
import { Component } from "react";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";





class Header extends Component {

  componentDidMount() {


      // Closes the sidebar menu
      $(".menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
        $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
        $(this).toggleClass("active");
      });
    
      // Smooth scrolling using jQuery easing
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && window.location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000,);
            return false;
          }
        }
      });
    
      // Closes responsive menu when a scroll trigger link is clicked
      $('#sidebar-wrapper .js-scroll-trigger').click(function() {
        $("#sidebar-wrapper").removeClass("active");
        $(".menu-toggle").removeClass("active");
        $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
      });
    
      // Scroll to top button appear
      $(document).scroll(function() {
        var scrollDistance = $().scrollTop();
        if (scrollDistance > 100) {
          $('.scroll-to-top').fadeIn();
        } else {
          $('.scroll-to-top').fadeOut();
        }
      });
    }; // End of use strict
    
    

    render () {
      return (
        <div>
          <div>

            {/*} <!-- Navigation -->*/}
            <a class="menu-toggle rounded" href="#page-top">
            <i class="fas fa-bars"><FontAwesomeIcon icon={faBars} /></i>
            <i class="fas fa-times" style={{display:"none"}}><FontAwesomeIcon icon={faBars} /></i>
            
            </a>
            <nav id="sidebar-wrapper">
              <ul class="sidebar-nav">
                <li class="sidebar-brand">
                  <a class="js-scroll-trigger" href="#page-top">Menu</a>
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
            <header class="masthead d-flex" style={{ backgroundImage: `url(${require("../img/Landing.jpg")})` }}>
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
      );
    }
    
  }

    export default Header