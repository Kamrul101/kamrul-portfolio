import React from 'react';

const ResumeCard = ({title,subTitle,result,des}) => {
    return (
        
            <div className='flex group'>
            <div className='w-10 h-[6px] bg-black bg-opacity-40 mt-16 relative '>
                <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
                    <span className='w-3 h-3 bg-[#212428] inline-flex rounded-full group-hover:bg-orange-500 duration-300'></span>
                </span>
            </div>
            <div className='w-full md:w-[780px] h-[300px] bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 md:shadow-shadowOne'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-5'>
                <div>
                    <h1 className='text-[24px] md:text-[32px] font-bold'>{title}</h1>
                    <h1 className='text-[18px] md:text-lg'> {subTitle}</h1>
                    
                </div>
                <div><h1 className='text-2xl px-4 py-2 text-orange-400 bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne font-medium me-5'>{result}</h1></div>
                </div>
            </div>
        
        </div>
    );
};

export default ResumeCard;