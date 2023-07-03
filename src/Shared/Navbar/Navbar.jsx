import React from "react";
import logo from "../../../public/logo1.png";
import { Links } from "../../Links/Links";
// import { Link } from "react-router-dom";

// import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const navLinks = Links.map(({link,title,_id})=> <li key={_id} className="px-2 text-xl rounded-lg">
    <Link activeClass="active"
      to={link}
      spy={true}
      smooth={true}
      
      offset={-70}
      duration={500} 
      className="hover:text-orange-500">

        {title}

        </Link>
    </li>)
const Navbar = () => {
  return (
    <div className="md:w-[80%] mx-auto mb-2 sticky top-0 z-50 bg-slate-800">
      <div className="navbar border-b-[1px] border-b-gray-600 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-slate-800 rounded-box w-52"
            >
              {navLinks}
              
            </ul>
          </div>
          <div className="flex items-center text-2xl">
          <Link to='/'><img className="rounded-full border-double border-2 border-[#c76617]" src={logo} style={{width:'80px', }} alt="" /></Link>
          <h1 className="pl-3">Kamrul</h1>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal ">
            {navLinks}
            
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
