import React, { useCallback } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaBeer, FaFacebookF,FaTwitter,FaLinkedinIn, FaDownload } from 'react-icons/fa';
import cover from '/cover1.png'
import cv from '/resume_of_kamrul.pdf';

const Banner = () => {
    const [text] = useTypewriter({
        words: ['Full Stack Developer', 'React Developer', 'Frontend Developer', 'MERN Developer'],
        loop: true,
        typeSpeed: 40,
        deleteSpeed:20,
        // deleteSpeed:2000,
        // onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })
      const handleDownload = ()=>{
        const url =  '/public/resume_of_kamrul.pdf';
        const anchor = document.createElement('a');
        anchor.href =  url;
        anchor.download = 'resume_of_kamrul.pdf';
        anchor.click();
      }

      
    return (
        
        <div id='home' className='md:w-[80%] md:mx-auto flex flex-col md:flex-row items-center gap-4'>
            
            <div className='flex flex-col gap-3 mx-5 md:w-1/2 banner1'   >
            <div className='flex flex-col gap-3 '>
                {/* <h4 className='text-2xl'>Welcome,</h4> */}
                <h1 className='text-[22px] md:text-5xl font-bold'>Hi, I am <br /></h1> <h1 className='text-orange-400 uppercase text-[22px] md:text-5xl font-bold'>Kamrul Hasan Ridoy</h1>
                
                
                <p>I am a recent graduate in Information and Communication Engineering with a strong passion for software engineering. My expertise lies in problem-solving and competitive programming.</p>

            </div>
            <div>
                <div className='flex md:flex-row flex-col gap-8 items-center justify-between mt-6 '>
                <div className='flex gap-4'>
                    <h2 className='w-16 h-16 text-2xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-[#fd9844] cursor-pointer duration-300 bg-black bg-opacity-75 text-gray-100 '><a href="https://www.facebook.com/kamruld.ridoy/"><FaFacebookF></FaFacebookF> </a></h2>
                    <h2 className='w-16 h-16 text-2xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-[#fd9844] cursor-pointer duration-300 bg-black bg-opacity-75 text-gray-100 '><a href="https://www.linkedin.com/in/kamrul-ridoy/"><FaLinkedinIn></FaLinkedinIn></a></h2>
                    <h2 className='w-16 h-16 text-2xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-[#fd9844] cursor-pointer duration-300 bg-black bg-opacity-75 text-gray-100 '><a href="https://twitter.com/KamrulRidoy1"><FaTwitter></FaTwitter></a></h2>
                </div>
                <div><button className='btn btn-neutral bg-slate-800 hover:-translate-y-1 transition-all hover:text-[#fd9844] duration-300 shadow-shadowOne' onClick={handleDownload}><FaDownload></FaDownload>Download Resume</button></div>
                </div>
            </div>
            </div>
            <div className='md:w-1/2 inline-flex md:justify-end justify-center relative banner2' >
                <img className='w-[350px] h-[450px] md:w-[450px] md:h-[580px] z-10' src={cover} alt="" />
                <div className='absolute bottom-0 md:w-[450px] md:h-[400px] w-[350px] h-[300px] bg-gradient-to-r from-[#df8939] to-[#ca7d36] md:shadow-shadowOne flex justify-center items-center rounded-md'>

                </div>
            </div>
        </div>
    );
};

export default Banner;