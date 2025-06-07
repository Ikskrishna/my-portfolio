import React from 'react';
import Skills from '../components/Skills'

const About = () => {
  return (
    <div className=' text-[#FFE1A8] shadow-2xl bg-'>
      
      <div className='grid w-full shadow-2xl grid-cols-1 sm:grid-cols-1 md:grid-cols-3  mx-auto '>
        <div className='p-8 py-20 flex flex-col gap-5  md:col-span-2 '>
            <h1 className='text-4xl'>Know Who I'M</h1>
            <p className='text-md'>Hi Everyone, I am Krishna Sharma from Jaitaran Rajasthan, India.<br/>
                I am currently Complet My WebDeveloper Cource.
                I have completed B.A. in S.D.Govt College Beawar.
            </p>

            <h1>Apart from coding, some other activities that I love to do!<br/></h1>

          <p>🎮Playing Games<br/>
            💪🏻Gyming<br />
            ✈️Travel.</p>
            

            <h2>"Believe in yourself, because every step forward, no matter how small, brings you closer to your dreams."</h2>
              <h1 className='ml-10'>__Krishna Sharma</h1>

               </div>

        
      </div>
      <Skills />
      <section id="skills" className="bg- py-16 px-8">
      <div className="max-w-4xl mx-auto text-center flex flex-col gap-10">
        <h2 className="text-3xl font-md">Tools</h2>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6">
          <li className="bg-white text-black shadow-md text-2xl px-5 py-5 rounded-2xl">Chat GPT</li>
          <li className="bg-white text-black shadow-md text-2xl px-5 py-5 rounded-2xl">Visual Studio</li>
          <li className="bg-white text-black shadow-md text-2xl px-5 py-5 rounded-2xl">Netlify</li>
        </ul>
      </div>
    </section>
    </div>
  );
};

export default About;
