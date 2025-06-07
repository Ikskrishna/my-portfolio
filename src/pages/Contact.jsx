import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin,} from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  return (
    <section id="contact" className="bg- min-h-screen
     py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-md text-[#FFE1A8]">Contact Me</h2>
        <form className="mt-8">cd
          <div className="flex flex-col text-left space-y-4">
           
            <h1 className='rounded-xl text-2xl font-md p-2 bg-[#FFE1A8]'>Phone Number - 7976694298</h1>
            <h1 className='rounded-xl text-2xl font-md p-2 bg-[#FFE1A8]'>Gmail - flashm683@gmail.com</h1>
            <h1 className='rounded-xl text-2xl font-md p-2 bg-[#FFE1A8]'>Address - College Road , Beawar Raj.</h1>
            
             <div className='flex gap-10 mx-auto '>
                            <h1> <FontAwesomeIcon 
                    icon={faGithub} 
                    className="text-[#FFE1A8] text-4xl hover:text-gray-700 transition-colors" 
                  /></h1>
                            <h1><FontAwesomeIcon
                             icon={faLinkedin} 
                    className="text-[#FFE1A8] text-4xl hover:text-gray-700 transition-colors" 
                  /></h1> 
                            <h1> <FontAwesomeIcon 
                    icon={faInstagram} 
                    className="text-[#FFE1A8] text-4xl hover:text-gray-700 transition-colors" 
                  /></h1>
          </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
