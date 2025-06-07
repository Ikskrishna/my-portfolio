import React from 'react'
import CV from './cv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Intro = () => {
  return (
    <div className=' gap-5 flex font-Roboto flex-col text-[#FFE1A8]'>
      <div className='grid w-full grid-cols-1 shadow-2xl sm:grid-cols-1 md:grid-cols-3  mx-auto'>
        <div className=' p-8 py-20 flex flex-col gap-5  md:col-span-2'>
            <h1 className='text-4xl font-Roboto'>LET ME INTRODUCE MYSELF</h1>
            <h2 className='text-xl'>I fell in love with programming and I have at least learnt something, I think… </h2>
            <p className="text-xl">I am fluent in classics like React, Javascript and Tailwind.</p>
            <p className="text-xl"> My field of Interest's are building new  Web Technologies and Products.</p>
            <p className='text-xl'>  My goal is to build user-friendly, performant web applications that provide great user experiences.
            </p>
            <p className='text-md'>
            Whenever possible, I also apply my passion for developing products with JavaScript and Modern Javascript Library and Frameworks  like React.js and Next.js</p>
        </div>

        <div className='  col-span-1 p-10 flex  '>
            <CV />
        </div>
      </div>

      <div className=' p-10 flex flex-col item-center'>
        <div className='mx-auto text-center flex flex-col gap-5'>
            <h1 className='text-4xl'>FIND ME ON</h1>
            <h2 className='text-xl'>Feel free to connect with me</h2>

            <div className='flex gap-10 mx-auto mt-10'>
                <h1><a href="github.com/ikskrishna/my-portfolio.git"> <FontAwesomeIcon 
        icon={faGithub} 
        className="text-[#FFE1A8] text-4xl hover:text-gray-700 transition-colors" 
      /></a></h1>
                <h1> <FontAwesomeIcon 
        icon={faLinkedin} 
        className="text-[#FFE1A8] text-4xl hover:text-gray-700 transition-colors" 
      /></h1>
                <h1> <FontAwesomeIcon 
        icon={faInstagram} 
        className="text-[#FFE1A8] text-4xl hover:text-gray-700 transition-colors" 
      /></h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
