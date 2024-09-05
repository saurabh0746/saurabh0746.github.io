import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const Blogs = () => {
  return (
    <>
      <div className='text-[30px] md:text-[35px] lg:text-[40px] leading-[1.5] text-[#000] mb-[60px] font-normal mt-[80px] text-center'>
        Blogs
      </div>
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mx-[100px]'>
        <div className='col-span-1'>
          <div className='overflow-hidden rounded-lg shadow-md'>
            <img src='images/portfolio-1.jpg' alt='Blog post' className='w-full h-auto'/>
            <div className='p-4 rounded-lg shadow-lg h-[200px]'>
              <span className='block text-[14px] md:text-[16px] lg:text-[18px] mb-[10px] leading-[1.7] text-gray-500'>
                May 5, 2023
              </span>
              <p className='text-[20px] md:text-[22px] lg:text-[24px] leading-[1.5] font-normal mb-[10px]'>
                <a href='#' className=''>
                  Building a Robust Node.js Application with MySQL...
                </a>
              </p>
              <div className='border-t pt-[10px]'>
                <ul className='flex justify-start items-center gap-[10px] mb-[10px] mt-[10px]'>
                  <li className='text-[14px] text-gray-500 flex items-center'>
                    <FavoriteBorderIcon className='mr-[5px]' />
                    249
                  </li>
                  <li className='text-[14px] text-gray-500 flex items-center'>
                    <VisibilityOutlinedIcon className='mr-[5px]' />
                    308
                  </li>
                  <a href='#' className='flex items-center text-[14px]'>
                    Read More <ArrowForwardOutlinedIcon className='ml-[5px]' />
                  </a>
                </ul>           
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
