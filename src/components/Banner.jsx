import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';


const Banner = () => {
  return (
    <div className="relative h-screen bg-gray-900 font-space-mono">
      <img
        src="images/cover_bg_3.jpg"
        alt="Background"
        className="absolute top-0 inset-0 w-full h-full object-cover object-top opacity-60"
      />
      <div className="absolute inset-0 bg-[gray] opacity-70"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <img
          src="images/user-3.JPG"
          alt="Profile"
          className="w-[200px] h-[200px] rounded-full mb-4 object-cover"
        />
        <h1 className="mb-2 rotate-[-5deg] font-kaushan text-[50px] leading-[1.3] font-light relative custom text-[white]">Saurabh Chaudhary</h1>
        <p className="text-[16px] mt-[20px] text-[white]">Software Engineer / Motovlogger</p>
        <div className="flex space-x-4">
          <TwitterIcon className="text-[white]"/>
          <a href="#" className="text-2xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-2xl">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-2xl">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
