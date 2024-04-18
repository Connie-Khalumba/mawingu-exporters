// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {faInstagram, faXTwitter, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import logo from '../../assets/final.png'

function Footer() {
  return (
    <footer className='bg-black text-gray-200'>
      <div className='container mx-auto py-14 px-6'>
        <div className='grid md:grid-cols-12 grid-cols-1 gap-7'>
          <div className='lg:col-span-4 col-span-12'>
            <a href="/">
              <div className='   flex justify-start'>
              <img className=' object-cover w-[100px] h-[80px]'
                src={logo}
                alt='Atote-logo'
              />
              <h5 className='tracking-wide text-[#c2a03d] font-semibold pt-6'>Mawingu Exporters</h5>
              </div>
            </a>
            <p className='mt-6'>
              Why hesitate? Describe the task now and we will respond quickly to your problem.
            </p>
          </div>
          <div className='lg:col-span-2 md:col-span-4 col-span-12'>
            <h5 className='tracking-wide text-[#c2a03d] font-semibold'>Our Explore</h5>
            <ul className='list-none mt-6 space-y-2'>
              {[
                'About us',
                'Meet our Team',
                'Products',
                'Customers',
                'Contact us',
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className='hover:text-gray-400 transition-all duration-500 ease-in-out'>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='lg:col-span-3 md:col-span-4 col-span-12'>
            <h5 className='tracking-wide text-[#c2a03d] font-semibold'>Contact Us</h5>
            <ul className='list-none mt-6 space-y-2'>
              <li className='flex items-center hover:cursor-pointer'>
                <div className='text-[#c2a03d]'>
                <FontAwesomeIcon className='pr-2' icon={faEnvelope} size='lg' style={{color: "#c2a03d",}} />
                </div>
                <span className='hover:text-[#c2a03d]'>mawinguexporters@gmail.com</span>
              </li>
              <li className='flex items-center hover:cursor-pointer'>
                <div className='text-[#c2a03d]'>
                  <FontAwesomeIcon className='pr-2' icon={faPhone} size='lg' style={{color: "#c2a03d",}} />
                </div>
                <span>0741456545</span>
              </li>
            </ul>
          </div>
          <div className='lg:col-span-3 md:col-span-4 col-span-12'>
            <h5 className='tracking-wide text-[#c2a03d] font-semibold'>Newsletter</h5>
            <p className='mt-6'>Stay up to date with our latest news and updates</p>
            <form action="">
              <div className='my-3'>
                <label htmlFor="email-input">Write to us <span className='text-red-500'></span></label>
                <input
                  type="email"
                  id='email-input'
                  className='mt-3 w-full py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-500 focus:border-[#ffcda3] focus:ring-0'
                  placeholder='name@example.com'
                />
              </div>
              <div className='mb-3'>
                <input
                  type="submit"
                  className='py-2 px-5 tracking-wide border duration-500 text-base text-center bg-[#c2a03d] hover:bg-[#ffd700] hover:border-[#ffcd88] text-black rounded-md w-full'
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8'>
        <span>Copyright&copy; Mawingu Exporters {new Date().getFullYear()}</span>
        <span>Terms Privacy policy</span>
        <span className='flex justify-center pl-4'>
          <a href='/' className='hover:scale-150 duration-300'><FontAwesomeIcon className='px-3' icon={faInstagram} size='xl' style={{color: "#c2a03d",}} /></a>
          <a href='/' className='hover:scale-150 duration-300'><FontAwesomeIcon className='px-3' icon={faXTwitter} size='xl' style={{color: "#c2a03d",}} /></a>
          <a href='/' className='hover:scale-150 duration-300'><FontAwesomeIcon className='px-3' icon={faFacebook} size='xl' style={{color: "#c2a03d",}} /></a>
          <a href='/' className='hover:scale-150 duration-300'><FontAwesomeIcon className='px-3' icon={faLinkedin} size='xl' style={{color: "#c2a03d",}} /></a>
        </span>
        {/* TODO 
          add social media icons
        */}
      </div>
    </footer>
  );
}

export default Footer
