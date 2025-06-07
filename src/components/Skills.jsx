import React from 'react';

const Skills = () => {

  const skills =[
    {id:1, name:"Html" },
    {id:2, name:"Css" },
    {id:3, name:"Tailwind" },
    {id:4, name:"JavaScript" },
    {id:5, name:"React" },
    {id:6, name:"BootStrap" },
    {id:7, name:"Next.js" },
    {id:8, name:"Git"},
];

  return (
    <section id="skills" className="bg- shadow-2xl  py-16 px-8">
      <div className="max-w-4xl mx-auto  flex flex-col gap-10 text-center">
        <h2 className="text-3xl font-md">Skills</h2>
        <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

        {skills.map((skill)=>(
          
           <li className="bg-[#FFE1A8] text-black shadow-xl py-10 text-2xl p-4 rounded-lg hover:text-black hover:bg-[#C09C58]">{skill.name}</li>
          ))}
        

         </ul>
         
      </div>
    </section>
  );
};

export default Skills;
