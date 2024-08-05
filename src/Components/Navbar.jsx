import React from 'react';
import Brand from './brand';
import { HashLink as Link } from 'react-router-hash-link';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';


gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {

    const scrollToPage =(id)=>{
        gsap.to(window,{duration:2,scrollTo:`#${id}`});
          
    }
    return (

        <>
        
            <div 
            style={{fontFamily:"Lato"}}
            className="sticky top-0 navbar bg-white text-black shadow-md  z-50  ">
                <div className="navbar-start">
                    <div
                     style={{fontFamily:"Lato"}}
                     className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-slate-50 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li
                        onClick={() => scrollToPage('hero')}
                         className='hover:bg-red-600 rounded-3xl hover:text-white'>
                            <p>Home</p>
                        </li>
                        <li
                         onClick={() => scrollToPage('about')}
                         className='hover:bg-red-600 rounded-3xl hover:text-white'>
                            <p>About</p>
                        </li>
                        <li
                         onClick={() => scrollToPage('room')}
                         className='hover:bg-red-600 rounded-3xl hover:text-white'>
                            <p>Room</p>
                        </li>
                        <li
                        onClick={() => scrollToPage('services')}
                         className='hover:bg-red-600 rounded-3xl hover:text-white'>
                            <p>Services</p>
                        </li>
                        <li
                        onClick={() => scrollToPage('gallary')}
                         className='hover:bg-red-600 rounded-3xl hover:text-white'>
                            <p>Gallery</p>
                        </li>
                        <li 
                        onClick={() => scrollToPage('contact')}
                        className='hover:bg-red-600 rounded-3xl hover:text-white'>
                          <p>Contact</p> 
                        </li>
                        </ul>
                    </div>
                    <Brand />
                </div>
                <div
                 style={{fontFamily:"Lato"}} className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       <li
                        onClick={() => scrollToPage('hero')}
                         className='hover:bg-red-600 rounded-3xl hover:text-white'>
                            <p>Home</p>
                        </li>
                        <li
                         onClick={() => scrollToPage('about')}
                         className='hover:bg-red-600 rounded-3xl hover:text-white'>
                            <p>About</p>
                        </li>
                        <li
                         onClick={() => scrollToPage('room')}
                         className='hover:bg-red-600 rounded-3xl hover:text-white'>
                            <p>Room</p>
                        </li>
                        <li
                        onClick={() => scrollToPage('services')}
                         className='hover:bg-red-600 rounded-3xl hover:text-white'>
                            <p>Services</p>
                        </li>
                        <li
                        onClick={() => scrollToPage('gallary')}
                         className='hover:bg-red-600 rounded-3xl hover:text-white'>
                            <p>Gallery</p>
                        </li>
                        <li 
                        onClick={() => scrollToPage('contact')}
                        className='hover:bg-red-600 rounded-3xl hover:text-white'>
                          <p>Contact</p> 
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
