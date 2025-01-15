import React from "react";
import img1 from "../../assets/skills/react.png";
import img2 from "../../assets/skills/js.png";
import img3 from "../../assets/skills/bootstrap.png";
import img4 from "../../assets/skills/tailwind.png";
import img5 from "../../assets/skills/mongo.png";
import img6 from "../../assets/skills/firebase.png";
import img7 from "../../assets/skills/express.png";
import img8 from "../../assets/skills/node.png";
import img9 from "../../assets/skills/git.png";
import img10 from "../../assets/skills/netlify-logo-png-transparent.png";
import img11 from "../../assets/skills/visual-studio.png";
import img12 from "../../assets/skills/vercel.png";
import img13 from "../../assets/skills/c++.png";
import img14 from "../../assets/skills/c.png";
import img15 from "../../assets/skills/sql-server.png"
import img16 from "../../assets/skills/cf.png"
import img17 from "../../assets/skills/leetcode.png"
import img18 from "../../assets/skills/codechef.png"
import img19 from "../../assets/skills/hackerrank.png"
import "./Features.css";


const Features = () => {
  return (
    <div id="features" className="w-full px-1 md:w-[80%] md:mx-auto my-24">
      <div className="flex flex-col md:flex-row md:items-center md:gap-12">
      <div className="w-full md:w-[40%] right" >
        <h1 className="uppercase text-xl md:text-3xl font-semibold text-orange-400">About Me</h1>
        <p className="text-sm md:text-xl mt-4 mb-10 md:text-justify">
        I have a strong passion for software engineering. My expertise lies in problem-solving and competitive programming, where I primarily use C++ to tackle complex algorithmic challenges. These experiences have sharpened my analytical thinking and ability to devise efficient solutions under time constraints.
        While my focus is on software engineering and problem-solving, I am also well-versed in various modern technologies, including JavaScript, React.js, Node.js, and MongoDB, which gives me a broad technical foundation.
        </p>
      
          <h1 className="uppercase text-xl md:text-3xl font-semibold text-orange-400 my-6">Competitive Programming</h1>
          <div className="flex gap-3 flex-wrap logoStyle2">
           
              <a href="https://codeforces.com/profile/FromPluto" target="_blank"><img className="hover:bg-opacity-40 hover:-translate-y-2 text-white duration-300" src={img16} alt="" /></a>
            
              <a href="https://leetcode.com/u/kamrul101/" target="_blank"><img className="hover:bg-opacity-40 hover:-translate-y-2 text-white duration-300" src={img17} alt="" /></a>
            
              <a href="https://www.codechef.com/users/frompluto" target="_blank"><img className="hover:bg-opacity-40 hover:-translate-y-2 text-white duration-300" src={img18} alt="" /></a>
            
              <a href="https://www.hackerrank.com/profile/FromPluto" target="_blank"><img className="hover:bg-opacity-40 hover:-translate-y-2 text-white duration-300" src={img19} alt="" /></a>
            </div>
            <h1 className="uppercase text-xl md:text-3xl font-semibold text-orange-400 my-6">Problem Solved <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-600">1000+</span></h1>
        
        
      </div>
      <div className="features"  >
        <h1 className="text-center text-3xl font-semibold text-orange-400 uppercase">My Skill Area</h1>
        <div className="grid grid-cols-1 md:gap-8 logoStyle">
          <div className="flex flex-wrap flex-col md:flex-row md:gap-16">
          <div className="">
            <h1 className="text-start font-semibold text-3xl my-6 text-orange-400 uppercase">Programming Language</h1>
            <div className="flex gap-3 flex-wrap">
            <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img14} alt="" />
            <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img13} alt="" />
              <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img2} alt="" />
              
            </div>
          </div>
          <div>
            <h1 className="text-start font-semibold text-3xl my-6 text-orange-400 uppercase">Database</h1>
            <div className="flex gap-3">
              <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img15} alt="" />
              
              <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img5} alt="" />
            </div>
          </div>
          </div>
          <div>
            <h1 className="text-start font-semibold text-3xl my-6 text-orange-400 uppercase">Frameworks and Libraries</h1>
            <div className="flex gap-3">
              <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img1} alt="" />
              <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img6} alt="" />
              <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img7} alt="" />
              <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img8} alt="" />
              
            </div>
          </div>
          <div>
            <h1 className="text-start font-semibold text-3xl my-6 text-orange-400 uppercase">Tools & others</h1>
            <div className="flex flex-wrap gap-3">
              <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img4} alt="" />
              <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img3} alt="" />
              <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img9} alt="" />
              <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img11} alt="" />
              <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img12} alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Features;
