// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import logo from '../../assets/final.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faXTwitter, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {FaBars, FaTimes} from "react-icons/fa"; 
import { FaRegEnvelope } from "react-icons/fa6";
import { HiOutlinePhone } from "react-icons/hi2";
import { MdLocationPin } from "react-icons/md";


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='bg-green-800 text-white font-normal w-full  shadow-xl flex flex-col'>
      <div className='h-[28px] w-full  bg-[#8F6A2E] hidden md:flex flex-row justify-between text-sm  items-center px-10' >
        <div className='flex flex-row justify-start text-sm px-4 items-center'>
          <div className='pb-2 hover:cursor-pointer flex hover:scale-105 transition-all duration-300 ease-in-out pt-2'>
            <FaRegEnvelope className='pr-1 ' size={18} />
            <h2 className=' font-extralight'>mawinguexporters@gmail.com</h2>
          </div>
          <div className='flex hover:cursor-pointer text-sm hover:scale-105 transition-all duration-300 ease-in-out px-6'>
            <HiOutlinePhone className='pr-1 ' size={18} />
            <h2 className=' font-light '>0741456543</h2>
          </div>
          <div className=' hover:cursor-pointer  hover:scale-105 transition-all duration-300 ease-in-out hidden lg:flex'>
            <MdLocationPin className='pr-1 ' size={20 } />
            <h2 className='font-thin'>Nairobi/ Kenya .....</h2>
          </div>
        </div>

        <div className='flex items-center  '>
        <a href='/' className='hover:scale-110 duration-300'><FontAwesomeIcon className='px-3' icon={faInstagram} size='lg' style={{color: "##2d3748",}} /></a>
          <a href='/' className='hover:scale-110 duration-300'><FontAwesomeIcon className='px-3' icon={faXTwitter} size='lg' style={{color: "##2d3748",}} /></a>
          <a href='/' className='hover:scale-110 duration-300'><FontAwesomeIcon className='px-3' icon={faFacebook} size='lg' style={{color: "##2d3748",}} /></a>
          <a href='/' className='hover:scale-110 duration-300'><FontAwesomeIcon className='px-3' icon={faLinkedin} size='lg' style={{color: "##2d3748",}} /></a>
        </div>
      </div>
      
      <div className=' w-full flex justify-between items-center'>
          <div className='h-[80px] w-[90px] pl-5  '>
          <a className=' h-full w-full' href="/">
            <img className='h-full w-full object-cover'
              src={logo}
              alt='Atote-logo'
            /> 
          </a>
          </div>
          <div className='md:flex flex-col '>
          <nav className='hidden md:flex md:justify-between'>
            <ul className='flex space-x-10 font-raleway font-normal  pr-16 pb-2 justify-between  text-white-400 text-base '>
              <li className=' hover:scale-110'>
                <a href="/" className='hover:text-[#c2a03d]  transition-all duration-300 ease-in-out'>Home</a>
              </li>
              <li className=' hover:scale-110'>
                <a href="/about" className='hover:text-[#c2a03d]  transition-all duration-300 ease-in-out'>About us</a>
              </li>
              <li className=' hover:scale-110'>
                <a href="/services" className='hover:text-[#c2a03d]  transition-all duration-300 ease-in-out'>Products</a>
              </li>
              <li className=' hover:scale-110'>
                <a href="/contact" className='hover:text-[#c2a03d]  transition-all duration-300 ease-in-out'>ContactUs</a>
              </li>
              <li className=' hover:scale-110'>
                <a href="/blog" className='hover:text-[#c2a03d]  transition-all duration-300 ease-in-out'>Team</a>
              </li>
             {/* <li>
                <a href="/resources" className='hover:text-[#c2a03d] transition-all duration-300 ease-in-out'>Resources</a>
              </li>
              */} 
            </ul>
          </nav>
          <div onClick={toggleNav} className='md:hidden absolute top-6 right-4 cursor-pointer  text-[#c2a03d] '>
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div> 
        </div>
      </div>
           
        {isOpen && (
          <nav className='md:hidden  w-full h-screen flex  items-center justify-center bg-black text-3xl'>
            <ul className='flex flex-col space-y-2 text-[#c2a03d]'>
              <li>
                <a href="/" className='hover:text-gray-400 transition-all duration-500 ease-in-out'>Home</a>
              </li>
              <li>
                <a href="/about" className='hover:text-gray-400 transition-all duration-500 ease-in-out'>About us</a>
              </li>
              <li>
                <a href="/services" className='hover:text-gray-400 transition-all duration-500 ease-in-out'>Products</a>
              </li>
              <li>
                <a href="/contact" className='hover:text-gray-400 transition-all duration-500 ease-in-out'>Contact Us</a>
              </li>
              <li>
                <a href="/blog" className='hover:text-gray-400 transition-all duration-500 ease-in-out'>Customers</a>
              </li>
              <li>
                <a href="/team" className='hover:text-gray-400 transition-all duration-500 ease-in-out'>Team</a>
              </li>
              
              

            </ul>
          </nav>
        )}
            
       

      
  
      

      
    </header>
  );
}

export default Header

