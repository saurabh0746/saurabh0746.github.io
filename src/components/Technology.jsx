import React from 'react';

const Technology=()=> {
    const technologies = [
        {
            title: "ReactJS"
        },
        {
            title: "Angular"
        },
        {
            title: "MERN"
        },
        {
            title: "MERN"
        },
        {
            title: "Java"
        },
        {
            title: "iOS App Development"
        },
        {
            title: "Android App Development"
        },
        {
            title: "React Native"
        },
        {
            title: "Inoic Angular/React"
        },
        {
            title: "Android Custom ROM Dev"
        },
        {
            title: "Robotics/ Mechatronics Engineering"
        },

    ];

    return (
        <>
            <div className='text-[30px] md:text-[35px] lg:text-[40px] text-[#000] leading-[1.1] font-normal mb-[40px] text-center mt-[70px]'>
                Technology
            </div>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-[30px] mt-[15px] mx-[80px]'>
                {technologies.map((technology, index) => (
                    <div key={index} className='flex flex-col justify-center items-center'>
                        <div className='w-[120px] h-[120px] border-[4px] border-[#808080] rounded-full flex items-center justify-center p-[80px]'>
                            <span className='text-[12px] md:text-[14px] lg:text-[16px] text-[#4d4d4d] leading-[1.7] font-semibold'>{technology.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Technology;
