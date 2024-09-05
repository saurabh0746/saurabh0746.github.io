import React from 'react'

const Hobby=()=>{
  return (
    <>
    <div className='bg-[#808080] py-[50px] mt-[80px]'>
        <div className='text-[30px] md:text-[35px] lg:text-[40px] leading-[1.5] font-normal text-[#fff] text-center'>
            Hobby
        </div>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 m-[120px] gap-[20px]'>
            <div className='col-span-1'>
                <img src='images/portfolio-5.jpg' alt='' className='w-[450px] h-[350px]'>

                </img>
            </div>
            <div className='col-span-1'>
                <img src='images/portfolio-6.jpg' alt='' className='w-[450px] h-[350px]'>

                </img>
            </div>
            <div className='col-span-1'>
                <img src='images/portfolio-7.jpg' alt='' className='w-[450px] h-[350px]'>

                </img>
            </div>
            <div className='col-span-1'>
                <img src='images/portfolio-8.jpg' alt='' className='w-[450px] h-[350px]'>

                </img>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hobby