import React from "react";

const About = () => {
  return (
    <div id="fh5co-about" className="animate-fadeIn container">
      <div className="container mx-auto py-10">
        <div className="flex justify-center mb-[20px]">
          <div className="text-center">
            <p className="text-[12px] md:text-[14px] lg:text-[40px] md:leading-[36px] lg:leading-[40px] font-normal mb-5">
              About Me
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6  px-[50px]">
          <div className="md:col-span-1 col-span-12 space-y-4">
            <p className="flex">
              <span className="w-1/3 text-[16px] font-semibold">
                Full Name:
              </span>
              <span className="w-2/3 text-[12px] md:text-[14px] lg:text-[16px] text-[rgba(0,0,0,0.5)]">
                Saurabh Chaudhary
              </span>
            </p>
            <p className="flex">
              <span className="w-1/3 text-[12px] md:text-[14px] lg:text-[16px] font-semibold">
                Phone:
              </span>
              <span className="w-2/3 text-[16px] text-[rgba(0,0,0,0.5)]">
                +91 7007031655
              </span>
            </p>
            <p className="flex">
              <span className="w-1/3 text-[16px] font-semibold">
                Email:
              </span>
              <span className="w-2/3 text-[12px] md:text-[14px] lg:text-[16px] text-[rgba(0,0,0,0.5)]">
                saurabh0746@gmail.com
              </span>
            </p>
            <p className="flex">
              <span className="w-1/3 text-[12px] md:text-[14px] lg:text-[16px] font-semibold">
                Website:
              </span>
              <span className="w-2/3 text-[12px] md:text-[14px] lg:text-[16px] text-[rgba(0,0,0,0.5)]">
                saurabhchaudhary.com
              </span>
            </p>
            <p className="flex">
              <span className="w-1/3 text-[12px] md:text-[14px] lg:text-[16px] font-semibold">
                Address:
              </span>
              <span className="w-2/3 text-[12px] md:text-[14px] lg:text-[16px] text-[rgba(0,0,0,0.5)]">
                New Delhi, India
              </span>
            </p>
          </div>
          <div className="md:col-span-2 col-span-12 space-y-4">
            <p className="text-[26px] md:text-[28px] lg:text-[30px] font-medium mb-[20px]">
              Hello There!
            </p>

            <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#4d4d4d] mb-[30px] leading-[1rem] md:leading-[1.2rem] lg:leading-[1.7rem]">
              Hey, It's me, a tech enthusiast riding the waves of software
              engineering for over 4 years. I'm all about crafting sleek
              applications that dance seamlessly across platforms. From tackling
              thorny security challenges to squeezing out every ounce of
              performance, I thrive on the thrill of creating robust solutions
              that just work.
            </p>
            <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#4d4d4d] mb-[30px] leading-[1rem] md:leading-[1.2rem] lg:leading-[1.7rem]">
              Currently, I'm steering the ship at Xcelore Private Limited, where
              I'm knee-deep in Angular and Ionic, sculpting user experiences
              that are as smooth as butter. AWS is my playground, where I flex
              my cloud muscles and push the boundaries of what's possible in app
              deployment.
            </p>
            <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#4d4d4d] mb-[30px] leading-[1rem] md:leading-[1.2rem] lg:leading-[1.7rem]">
              When I'm not immersed in code, you'll find me indulging my love
              for motorcycles, riding through scenic routes, and finding
              tranquility in the mountains, petting around with Doggos
            </p>
            <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#4d4d4d] mb-[30px] leading-[1rem] md:leading-[1.2rem] lg:leading-[1.7rem]">
              Let's connect and geek out over all things tech – whether it's
              about the latest JavaScript libraries or swapping war stories from
              the trenches of software development.
            </p>
            <div className="fh5co-social-icons flex space-x-4 mt-4">
              <a
                href="https://x.com/saurabh_0746/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-twitter2" />
              </a>
              <a
                href="https://www.facebook.com/62624178829.xd.UwU.69/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-facebook3" />
              </a>
              <a
                href="https://www.linkedin.com/in/saurabh0746/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-linkedin2" />
              </a>
              <a
                href="https://www.instagram.com/__saurabhchaudhary/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-instagram2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
