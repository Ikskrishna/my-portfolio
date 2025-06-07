import { useNavigate } from "react-router-dom";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Back = () => {

    const navigate =useNavigate();

  return (
    <div>
      <button className="p-4" onClick={()=> navigate(-1)}>
      <FontAwesomeIcon icon={faArrowLeft} className="text-white text-xl" />
      </button>
    </div>
  )
}

export default Back
