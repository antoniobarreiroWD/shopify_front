import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid"; 
import { FaGithub, FaLinkedin } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white p-4 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 mt-6">
     
      <div className="text-sm flex items-center space-x-2">
        <EnvelopeIcon className="w-5 h-5" /> 
        <p>
          <a
            href="mailto:antoniobarreiro@icloud.com"
            className="underline hover:text-secondary-blue"
          >
            antoniobarreiro@icloud.com
          </a>
        </p>
      </div>

     
      <div className="text-sm text-center lg:text-left">
        <p>&copy; 2024 Shopify Live Commerce</p>
      </div>

      
      <div className="flex space-x-4 justify-center lg:justify-end">
        <a
          href="https://github.com/antoniobarreiroWD"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-secondary-blue"
        >
          <FaGithub className="w-5 h-5 lg:w-6 lg:h-6" /> 
        </a>
        <a
          href="https://www.linkedin.com/in/antonio-barreiro-b240b8104/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-secondary-blue"
        >
          <FaLinkedin className="w-5 h-5 lg:w-6 lg:h-6" /> 
        </a>
      </div>
    </footer>
  );
};

export default Footer;
