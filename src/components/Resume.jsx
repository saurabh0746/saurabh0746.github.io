import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from '@mui/icons-material/School';

const Resume = () => {
  return (
    <>
      <div>
        <div className="col-md-8 text-center mb-[20px]">
          <h1 className="text-[12px] md:text-[14px] lg:text-[40px] md:leading-[36px] lg:leading-[40px] font-normal mb-5">
            My Resume
          </h1>
        </div>
        <div className="grid grid-cols-2 mt-[80px] w-[full]">
          <div className="col-span-1 border-r-[1px] border-[gray] relative h-[1150px]">
            <p className="inline-block uppercase tracking-[5px] p-[7px_15px] bg-[#e6e6e6] rounded mb-[20px] items-center text-[#000] text-[14px] md:text-[16px] lg:text-[18px] font-semibold absolute top-[-30px] right-[-90px]">
              Freelance
            </p>
            <p className="bg-[#808080] rounded-3xl inline-block absolute top-[80px]  right-[-22px] p-[10px]">
              <WorkIcon className="w-[20px] h-[20px] text-[white]" />
            </p>
            <p className="inline-block uppercase tracking-[5px] p-[7px_15px] bg-[#e6e6e6] rounded mb-[20px] items-center text-[#000] text-[14px] md:text-[16px] lg:text-[18px] font-semibold absolute top-[360px] right-[-135px]">
              Work Experience
            </p>
            <div className="text-[20px] md:text-[22px] lg:text-[24px] font-normal leading-[1.1] text-[#000] mt-[450px] ml-[340px]">
              Senior Software Engineer
              <p className="text-[12px] md:text-[14px] lg:text-[16px] font-normal text-[#bfbfbf] mt-[20px] leading-[1.7]">
                Xcelore(Noida) - 2023 - Current
              </p>
            </div>
            <p className="bg-[#808080] rounded-3xl inline-block absolute top-[480px]   right-[-22px] p-[10px]">
              <WorkIcon className="w-[20px] h-[20px] text-[white]" />
            </p>
            <p className="bg-[#808080] rounded-3xl inline-block absolute top-[600px]   right-[-22px] p-[10px]">
              <WorkIcon className="w-[20px] h-[20px] text-[white]" />
            </p>
            <div className="text-[20px] md:text-[22px] lg:text-[24px] font-normal leading-[1.1] text-[#000] mt-[140px] ml-[380px]">
            Software Engineer
              <p className="text-[12px] md:text-[14px] lg:text-[16px] font-normal text-[#bfbfbf] mt-[20px] leading-[1.7]">
              Hashstudioz(Noida) - 2021 - 2023
              </p>
            </div>
            <p className="bg-[#808080] rounded-3xl inline-block absolute top-[700px]  lg:right-[-22px] p-[10px]">
              <WorkIcon className="w-[20px] h-[20px] text-[white]" />
            </p>
            <p className="inline-block uppercase tracking-[5px] p-[5px_10px] bg-[#e6e6e6] rounded mb-[20px] items-center text-[#000] text-[14px] md:text-[16px] lg:text-[18px] font-semibold absolute top-[800px] right-[-90px]">
            Education
            </p>
            <p className="bg-[#808080] rounded-3xl inline-block absolute top-[920px]   right-[-22px] p-[10px]">
              <SchoolIcon className="w-[20px] h-[20px] text-[white]" />
            </p>
            <div className="text-[20px] md:text-[22px] lg:text-[24px] font-normal leading-[1.1] text-[#000] mt-[230px] ml-[380px]">
            Intermediate
              <p className="text-[12px] md:text-[14px] lg:text-[16px] font-normal text-[#bfbfbf] mt-[20px] leading-[1.7]">  
              St. Basil School(Basti) - 2017
              </p>
            </div>
            <p className="bg-[#808080] rounded-3xl inline-block absolute top-[1000px]   right-[-22px] p-[10px]">
              <SchoolIcon className="w-[20px] h-[20px] text-[white]" />
            </p>
            <p className="bg-[#808080] rounded-3xl inline-block absolute top-[1090px]   right-[-22px] p-[10px]">
              <SchoolIcon className="w-[20px] h-[20px] text-[white]" />
            </p>
          </div>
          <div className="col-span-1 md:px-[30px] lg:px-[40px]">
            <p className="text-[18px] md:text-[22px] lg:text-[24px] text-[#000] font-normal mb-[20px] mt-[40px]">
              Freelancing
            </p>
            <span className="text-[12px] md:text-[16px] lg:text-[16px] font-normal text-[#bfbfbf] mb-[20px]">
              2019 - Current
            </span>
            <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-[1.7] font-normal text-[#4d4d4d] mt-[20px] pr-[80px]">
              We have successfully delivered over 10+ projects across various
              platforms, showcasing our expertise and versatility. Each project
              has enriched our experience and honed our skills, allowing us to
              tackle diverse challenges and deliver high-quality solutions. This
              journey highlights our commitment to excellence and continuous
              improvement in our work.
            </p>
            <div className="text-[20px] md:text-[22px] lg:text-[24px] font-normal leading-[1.1] text-[#000] mt-[240px]">
            Software Engineer
              <p className="text-[12px] md:text-[14px] lg:text-[16px] font-normal text-[#bfbfbf] mt-[20px] leading-[1.7]">
              Hashstudioz(Noida) - 2021 - 2023
              </p>
            </div>
            <div className="text-[20px] md:text-[22px] lg:text-[24px] font-normal leading-[1.1] text-[#000] mt-[240px]">
            Bachelor of Technology(CSE)
              <p className="text-[12px] md:text-[14px] lg:text-[16px] font-normal text-[#bfbfbf] mt-[20px] leading-[1.7]">
              BBD Group(Lucknow) - 2017 - 2021
              </p>
            </div>
            <div className="text-[20px] md:text-[22px] lg:text-[24px] font-normal leading-[1.1] text-[#000] mt-[100px]">
            High School
              <p className="text-[12px] md:text-[14px] lg:text-[16px] font-normal text-[#bfbfbf] mt-[20px] leading-[1.7]">  
              St. Basil School(Basti) - 2015
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
