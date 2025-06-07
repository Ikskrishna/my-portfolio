import React from "react";
import resume from "../assets/resume.pdf"; // Step 1: Import the PDF

function CV() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* <h1 className="text-4xl font-bold mb-8">My Resume</h1> */}

      <a
        href={resume}
        download="My_Resume.pdf"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
      >
        Download CV
      </a>
    </div>
  );
}

export default CV;