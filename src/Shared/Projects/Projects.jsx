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
        <h1 className="text-center text-4xl text-orange-400 uppercase font-semibold ">Projects</h1>
        <div className='flex flex-col items-center  md:flex-row md:justify-evenly  gap-5 py-5'>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="card card-compact  bg-base-400  md:shadow-shadowOne project3" >
        <div className="image-body h-80">
          <img
          className="scrollImg rounded-t-xl"
            src={img2}
            alt="Deshi Bhozon"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">Donate Red</h2>
          <ul className='text-xs md:text-xl '>
                    <li className='flex items-center'><FaArrowRight></FaArrowRight>Efficient, user-friendly for quicker & easier blood donations</li>
                    <li className='flex items-center'><FaArrowRight></FaArrowRight>Enable direct communication betw. donor and recipient</li>
                    <li className='flex items-center'><FaArrowRight></FaArrowRight>Enforce the 90-day donation interval</li>
                    <li className='flex items-center'><FaArrowRight></FaArrowRight>Reduce the time needed to find matching blood donors</li>
                    <li className='flex items-center'><FaArrowRight></FaArrowRight>Notify donors instantly via web push notifications</li>
                </ul>
          <div className="card-actions justify-end mt-3">
            <div><button className="btn btn-sm md:btn-md btn-success  text-white"><a className='flex' href="https://github.com/Kamrul101/donate-red-client.git"><FaLink className='me-1'></FaLink>GitHub Client</a> </button></div>
            <div><button className="btn btn-sm md:btn-md btn-warning  text-white"><a className='flex' href="https://github.com/Kamrul101/donate-red-server.git"><FaLink className='me-1'></FaLink>GitHub Server</a> </button></div>
            <div><button className="btn btn-sm md:btn-md btn-error  text-white"> <a className='flex' href="https://blood-donation-9245e.web.app/"><FaLink className='me-1'></FaLink>Live Site</a> </button></div>
            
          </div>
        </div>
      </div>
      <div className="card card-compact bg-base-400 md:shadow-shadowOne project1" >
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
      <div className="card card-compact  bg-base-400  md:shadow-shadowOne project2" >
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
      
      </div>
      
    </div>
  );
};

export default Projects;
