// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { CiCalendar } from "react-icons/ci"; // Import CiCalendar from react-icons/ci
import { FaUser } from "react-icons/fa"; // Import FaUser from react-icons/fa
import AOS from "aos";
import "aos/dist/aos.css";
import cake from "../../assets/about.jpg"
import cashew from "../../assets/Fruit.jpg"

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (


    
   <div className=' bg-gray-50 '>

    {/*Welcome */}
      <div className="px-2 md:px-8 py-4 bg-gray-50  text-gray-800 text-center lg:text-left  ">
          <div className="container mx-auto xl:px-12">
              <div className="grid lg:grid-cols-2 gap-12  items-center">
                  <div className="mt-12 lg:mt-0 " data-aos="fade-right">
                      <h2 className="text-4xl md:text-3xl lg:text-5xl font-bold tracking-tight mb-12 "
                        style={{ color: '#8F6A2E' }}> Welcome to Mawingu Exporters</h2>
                      <p className="text-xl text-black mb-4"> Where we pride ourselves on being the leading export company dedicated to delivering premium agricultural products amongest them coffee to global markets. With a commitment to quality, sustainability and customer satisfaction.</p>
                      <a className="inline-block px-7 py-3 mr-2 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-custom-gold-dark text-white focus:bg-custom-gold-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-custom-gold-dark hover:scale-105 transition-all duration-300 ease-in-out bg-[#8F6A2E] opacity-0 animate-slidein1000"
                          data-mdb-ripple="true" data-mdb-ripple-color="black" href="Home.jsx" role="button"
                        >Get Started</a>
                  </div>
            
                  <div className="mb-12 lg:mb-0 "data-aos="fade-left">
                      <img src={cake}
                          className="w-full rounded-lg shadow-lg" alt="" />
                  </div>
              </div>
          </div>
      </div>


{/*Who are we */}
  <div className="px-2 md:px-4 py-12 text-gray-800 text-center lg:text-left bg-[#8F6A2E]" data-aos="fade-up">
    <div className="container mx-auto xl:px-16">
        <div className="grid lg:grid-cols-2 gap-12  items-center">
            <div className="mb-12 lg:mb-0">
                <img src={cashew}
                    className="w-full rounded-lg shadow-lg" alt=""/>
            </div>
            <div className="mt-12 lg:mt-0">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-raleway font-bold tracking-tight mb-12 animate-slidein300"
                    style={{ color: 'white' }}>Who are we?</h2>
                <p className="text-xl text-black mb-4">we are a leading export company dedicated to deliver premium agricultural products to global markets. With a commitment to quality, sustainability and customer satisfaction. We specialize in the export of high=quality coffee, tea, avocados and nuts sourced from Kenya finest farms.</p>
                <a className=" bg-black hover:scale-105 inline-block px-7 py-3 mr-2 font-openSans font-semibold text-sm leading-snug uppercase rounded-lg shadow-md hover:bg-custom-gold-dark text-white focus:bg-custom-gold-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-custom-gold-dark transition-all duration-300 ease-in-out "
                    data-mdb-ripple="true" data-mdb-ripple-color="black" href="About.jsx" role="button"
                     >For More</a>
            </div>
        </div>
    </div>
  </div>

  {/* Blog */}

<div className=' m-8 w-11/12 mx-auto' >
  <h2 className="text-3xl font-bold mb-8 text-center text-neutral-600" data-aos="zoom-in">Blogs</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 xl:gap-8  ">
    <div className="relative bg-transparent shadow-lg rounded-lg overflow-hidden p-8 border" data-aos="zoom-in">
      <img src="https://www.getfoundquick.com/wp-content/uploads/2017/07/shutterstock_451991974-1.jpg" alt="Blog Post Title"
        className="w-full h-48 object-cover rounded-lg" />
      <div className="absolute bottom-2 left-20 p-2 bg-white shadow-md border rounded-lg w-3/4 h-44 lg:h-40">
        <div className="flex items-center justify-around space-x-2 ">
          <span className="text-gray-500 flex justify-between pt-2 ">
          <CiCalendar  size={15} />
          <span className="text-gray-700 text-xs pl-1">January   1,   2023</span>
          </span>
          
          <span className="text-gray-500 flex pt-2">
          <FaUser size={12} />
          <span className="text-gray-700 text-xs pl-1">Author Name</span>
          </span>
          
        </div>
        <p className="mt-3 text-gray-800 font-Raleway">
          we stand at the forefront at having the best cash crops accross the country 
         
        </p>
        <div className='flex justify-end'>
        <a className=" bg-[#8F6A2E] inline-block  px-3 py-2 mr-2 mt-2 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-custom-gold-dark text-white focus:bg-custom-gold-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-custom-gold-dark hover:scale-105 transition-all duration-3000 ease-in-out"
          data-mdb-ripple="true" data-mdb-ripple-color="black" href="Blog.jsx" role="button">Read More</a>
         </div>
      
      </div>
    </div>

    <div className="relative bg-transparent shadow-lg rounded-lg overflow-hidden p-8 border " data-aos="zoom-in">
      <img src="https://www.outlookmarketingsrv.com/wp-content/uploads/2021/02/blog-2021.jpg" alt="Blog Post Title"
        className="w-full h-48 object-cover rounded-lg" />
      <div className="absolute bottom-2 left-20 p-2 bg-white shadow-md border rounded-lg w-3/4 h-44 lg:h-40">
        <div className="flex items-center justify-around space-x-2 ">
          <span className="text-gray-500 flex justify-between pt-2 ">
          <CiCalendar  size={15} />
          <span className="text-gray-700 text-xs pl-1">January   1,   2023</span>
          </span>
          
          <span className="text-gray-500 flex pt-2">
          <FaUser size={12} />
          <span className="text-gray-700 text-xs pl-1">Author Name</span>
          </span>
          
        </div>
        <p className="mt-3 text-gray-800 font-Raleway">
          we stand at the forefront of change, navigating uncharted
         territories 
         
        </p>
        <div className='flex justify-end'>
        <a className="inline-block  px-3 py-2 mr-2 mt-2 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-custom-gold-dark text-white focus:bg-custom-gold-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-custom-gold-dark hover:scale-105 transition-all duration-300 ease-in-out"
          data-mdb-ripple="true" data-mdb-ripple-color="black" href="Blog.jsx" role="button" style={{
            backgroundColor: '#8F6A2E' }}>Read More</a>
         </div>
      
      </div>
    </div>

    <div  className="relative bg-transparent shadow-lg border   rounded-lg overflow-hidden p-8" data-aos="zoom-in">
      <img src="https://howtostartablog.com/wp-content/uploads/2018/09/how-to-start-a-blog-1600x960.jpg" alt="Blog Post Title"
        className="w-full h-48 object-cover rounded-lg" />
      <div className="absolute bottom-2 left-20 p-2 bg-white shadow-md border rounded-lg w-3/4 h-44 lg:h-40">
        <div className="flex items-center justify-around space-x-2 ">
          <span className="text-gray-500 flex justify-between pt-2 ">
          <CiCalendar  size={15} />
          <span className="text-gray-700 text-xs pl-1">January   1,   2023</span>
          </span>
          
          <span className="text-gray-500 flex pt-2">
          <FaUser size={12} />
          <span className="text-gray-700 text-xs pl-1">Author Name</span>
          </span>
          
        </div>
        <p className="mt-3 text-gray-800 font-Raleway">
          we stand at the forefront of change, navigating uncharted
         territories 
         
        </p>
        <div className='flex justify-end mt-'>
        <a className="inline-block  px-3 py-2 mr-2 mt-2  font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-custom-gold-dark text-white focus:bg-custom-gold-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-custom-gold-dark transition hover:scale-105 duration-300 ease-in-out"
          data-mdb-ripple="true" data-mdb-ripple-color="black" href="Blog.jsx" role="button" style={{
            backgroundColor: '#8F6A2E' }}>Read More</a>
         </div>
      
      </div>
    
</div>
</div>
</div>






</div>


  )
}

export default Home
