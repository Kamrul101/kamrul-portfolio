import img1 from '../../assets/projects/otaku.png'
import img2 from '../../assets/projects/deshi.png'
import img3 from '../../assets/projects/bucket.png'
import {FaArrowRight, FaLink } from 'react-icons/fa';
import './Projects.css'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';



const Projects = () => {
   const [counterOn, setCounterOn]=useState(false);

  return (
    <div id="projects" className="mx-2 md:w-[80%] md:mx-auto my-24" >
        <h1 className="text-center text-4xl text-orange-400 uppercase font-semibold mb-10">Projects</h1>
        <div className='flex flex-col items-center  md:flex-row md:justify-evenly  gap-5 py-10'>
          <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
          <div className='text-4xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-600'>
            <h1>Total</h1>
            <h1 className='text-center'>{
              counterOn && <CountUp start={0} end={35} duration={2} delay={0} />
              }+
            
            </h1>
          </div>
          </ScrollTrigger>
          <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
          <div className='text-4xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-600'>
          <h1>Frontend</h1>
            <h1 className='text-center'>{
              counterOn && <CountUp start={0} end={20} duration={2} delay={0} />
              }+
            
            </h1>
          </div>
          </ScrollTrigger>
          <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
          <div className='text-4xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-600'>
          <h1>Full Stack</h1>
            <h1 className='text-center'>{
              counterOn && <CountUp start={0} end={5} duration={2} delay={0} />
              }
            
            </h1>
          </div>
          </ScrollTrigger>
          
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="card card-compact bg-base-400 md:shadow-shadowOne project1" data-aos="flip-right"  data-aos-duration="2000" data-aos-anchor=".project1">
        <div className="image-body h-80">
          <img
          className="scrollImg rounded-t-xl"
            src={img1}
            alt="OtakuLet"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">Otaku Let</h2>
          <ul className='text-xs md:text-xl '>
                    <li className='flex items-center'><FaArrowRight></FaArrowRight>This website can offer you some best action figure toys</li>
                    <li className='flex items-center'><FaArrowRight></FaArrowRight>You can see our action figure's</li>
                    <li className='flex items-center'><FaArrowRight></FaArrowRight>You can add action figure</li>
                    <li className='flex items-center'><FaArrowRight></FaArrowRight>You can also see other's action figure</li>
                    <li className='flex items-center'><FaArrowRight></FaArrowRight>One can shop by Sub category</li>
                </ul>
          
          <div className="card-actions justify-end mt-3">
            <div><button className="btn btn-sm md:btn-md btn-success  text-white"><a className='flex' href="https://github.com/Kamrul101/otaku-let-client"><FaLink className='me-1'></FaLink>GitHub Client</a> </button></div>
            <div><button className="btn btn-sm md:btn-md btn-warning  text-white"><a className='flex' href="https://github.com/Kamrul101/otaku-let-server"><FaLink className='me-1'></FaLink>GitHub Server</a> </button></div>
            <div><button className="btn btn-sm md:btn-md btn-error  text-white"> <a className='flex' href="https://toy-store-3764d.web.app/"><FaLink  className='me-1'></FaLink>Live Site</a> </button></div>
            

          </div>
        </div>
      </div>
      <div className="card card-compact  bg-base-400  md:shadow-shadowOne project2" data-aos="flip-up"  data-aos-duration="2000" data-aos-anchor=".project2">
        <div className="image-body h-80">
          <img
          className="scrollImg rounded-t-xl"
            src={img3}
            alt="Bucket Head"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">Bucket Head</h2>
          <ul className='text-xs md:text-xl '>
                <li className='flex items-center'><FaArrowRight></FaArrowRight>This website can offer you some best Class</li>
                <li className='flex items-center'><FaArrowRight></FaArrowRight>You can see our class</li>
                <li className='flex items-center'><FaArrowRight></FaArrowRight>You can see our instructor</li>
                <li className='flex items-center'><FaArrowRight></FaArrowRight>Admin and Instructor route is available</li>
                <li className='flex items-center'><FaArrowRight></FaArrowRight>We have 2 types of login option(Email/Password, Google)</li>
            </ul>
          <div className="card-actions justify-end mt-3">
            <div><button className="btn btn-sm md:btn-md btn-success  text-white"><a className='flex' href="https://github.com/Kamrul101/bucket-head-client"><FaLink className='me-1'></FaLink>GitHub Client</a> </button></div>
            <div><button className="btn btn-sm md:btn-md btn-warning  text-white"><a className='flex' href="https://github.com/Kamrul101/bucket-head-server"><FaLink className='me-1'></FaLink>GitHub Server</a> </button></div>
            <div><button className="btn btn-sm md:btn-md btn-error  text-white"> <a className='flex' href="https://summer-school-3817d.web.app/"><FaLink className='me-1'></FaLink>Live Site</a> </button></div>
            
          </div>
        </div>
      </div>
      <div className="card card-compact  bg-base-400  md:shadow-shadowOne project3" data-aos="flip-left"  data-aos-duration="2000" data-aos-anchor=".project3">
        <div className="image-body h-80">
          <img
          className="scrollImg rounded-t-xl"
            src={img2}
            alt="Deshi Bhozon"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">Deshi Bhozon</h2>
          <ul className='text-xs md:text-xl '>
                    <li className='flex items-center'><FaArrowRight></FaArrowRight>This website can offer you some recipe's of best chef</li>
                    <li className='flex items-center'><FaArrowRight></FaArrowRight>You can see our chef's details</li>
                    <li className='flex items-center'><FaArrowRight></FaArrowRight>And the recipe's they are offering</li>
                    <li className='flex items-center'><FaArrowRight></FaArrowRight>This is also contain recipe's ingredient</li>
                    <li className='flex items-center'><FaArrowRight></FaArrowRight>If you want to make it you have the instruction</li>
                </ul>
          <div className="card-actions justify-end mt-3">
            <div><button className="btn btn-sm md:btn-md btn-success  text-white"><a className='flex' href="https://github.com/Kamrul101/deshi-bhozon-client"><FaLink className='me-1'></FaLink>GitHub Client</a> </button></div>
            <div><button className="btn btn-sm md:btn-md btn-warning  text-white"><a className='flex' href="https://github.com/Kamrul101/deshi-bhozon-server"><FaLink className='me-1'></FaLink>GitHub Server</a> </button></div>
            <div><button className="btn btn-sm md:btn-md btn-error  text-white"> <a className='flex' href="https://recipe-hunter-client.web.app/"><FaLink className='me-1'></FaLink>Live Site</a> </button></div>
            
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Projects;
