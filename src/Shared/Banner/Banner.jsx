import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaBeer, FaFacebookF,FaTwitter,FaLinkedinIn, FaDownload } from 'react-icons/fa';
import cover from '/cover1.png'
import cv from '/resume_of_kamrul.pdf'
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
        <div id='home' className='md:w-[80%] mx-auto flex flex-col md:flex-row items-center gap-4'>
            <div className='flex flex-col gap-3 mx-5 md:w-1/2'  data-aos="fade-right"  data-aos-duration="2000">
            <div className='flex flex-col gap-3 '>
                {/* <h4 className='text-2xl'>Welcome,</h4> */}
                <h1 className='text-[20px] md:text-5xl font-bold'>Hi, I am  <span className='text-orange-500 uppercase'>Kamrul Hasan Ridoy</span></h1>
                <h2 className='text-[24px] md:text-4xl font-bold mb-5'>a <span className='uppercase'>{text}<Cursor cursorColor='#fd9844'
                cursorBlinking='false' /></span></h2>
                
                <p>I am an Information and Communication Engineering student. But I am a passionate MERN stack developer with a strong foundation in JavaScript, React.js, Node.js, and MongoDB. Eager to kick-start my career in web development and contribute to innovative projects that make a positive impact.</p>

            </div>
            <div>
                
                <div className='flex md:flex-row flex-col gap-8 items-center justify-between mt-6 '>
                <div className='flex gap-4'>
                    <h2 className='w-16 h-16 text-2xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-[#fd9844] cursor-pointer duration-300 bg-black bg-opacity-75 text-gray-100 '><a href="https://www.facebook.com/kamruld.ridoy/"><FaFacebookF></FaFacebookF> </a></h2>
                    <h2 className='w-16 h-16 text-2xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-[#fd9844] cursor-pointer duration-300 bg-black bg-opacity-75 text-gray-100 '><a href="https://www.linkedin.com/in/kamrul-ridoy/"><FaLinkedinIn></FaLinkedinIn></a></h2>
                    <h2 className='w-16 h-16 text-2xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-[#fd9844] cursor-pointer duration-300 bg-black bg-opacity-75 text-gray-100 '><FaTwitter></FaTwitter><a href="https://twitter.com/KamrulRidoy1"></a></h2>
                </div>
                <div><button className='btn btn-neutral bg-slate-800 hover:-translate-y-1 transition-all hover:text-[#fd9844] duration-300 shadow-shadowOne' onClick={handleDownload}><FaDownload></FaDownload>Download Resume</button></div>
                </div>
            </div>
            </div>
            <div className='md:w-1/2 inline-flex md:justify-end justify-center relative' data-aos="fade-left"  data-aos-duration="2000">
                <img className='w-[380px] h-[450px] md:w-[480px] md:h-[580px] z-10' src={cover} alt="" />
                <div className='absolute bottom-0 md:w-[480px] md:h-[400px] w-[350px] h-[300px] bg-gradient-to-r from-[#df8939] to-[#ca7d36] shadow-shadowOne flex justify-center items-center'>

                </div>
            </div>
        </div>
    );
};

export default Banner;