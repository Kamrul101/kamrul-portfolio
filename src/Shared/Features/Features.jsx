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
import "./Features.css";


const Features = () => {
  return (
    <div id="features" className="w-full px-1 md:w-[80%] md:mx-auto my-24">
      <div className="flex flex-col md:flex-row md:items-center md:gap-12">
      <div className="w-full md:w-[40%] right" >
        <h1 className="uppercase text-xl md:text-3xl font-semibold text-orange-400">About Me</h1>
        <p className="text-sm md:text-xl mt-4 mb-10 md:text-justify">
          I am a passionate MERN stack developer with a strong foundation in
          JavaScript, React.js, Node.js, and MongoDB. Eager to kick-start my
          career in web development and contribute to innovative projects that
          make a positive impact.<br/> I thrive in dynamic environments where I can
          collaborate with talented professionals and continuously expand my
          skill set. <br /> As an enthusiastic learner, I stay up-to-date with the
          latest technologies and industry trends to stay ahead of the curve. I
          am actively seeking opportunities to join a growth-oriented
          organization where I can contribute my skills, learn from experienced
          mentors, and propel my career forward.
        </p>
        
      </div>
      <div className="features"  >
        <h1 className="text-center text-3xl font-semibold text-orange-400 uppercase">My Skill Area</h1>
        <div className="grid grid-cols-1 md:gap-8 logoStyle">
          <div className="flex flex-col md:flex-row md:gap-16">
          <div className="">
            <h1 className="text-start font-semibold text-3xl my-6 text-orange-400 uppercase">Expertise</h1>
            <div className="flex gap-3 flex-wrap">
              <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img1} alt="" />
              <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img2} alt="" />
              <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img3} alt="" />
              <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img4} alt="" />
              <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img6} alt="" />
            </div>
          </div>
          <div>
            <h1 className="text-start font-semibold text-3xl my-6 text-orange-400 uppercase">Comfortable</h1>
            <div className="flex gap-3">
              <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img7} alt="" />
              <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img5} alt="" />
            </div>
          </div>
          </div>
          <div>
            <h1 className="text-start font-semibold text-3xl my-6 text-orange-400 uppercase">Familiar</h1>
            <div className="flex gap-3">
              <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img8} alt="" />
              <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img13} alt="" />
              <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img14} alt="" />
            </div>
          </div>
          <div>
            <h1 className="text-start font-semibold text-3xl my-6 text-orange-400 uppercase">Tools</h1>
            <div className="flex gap-3">
              <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img9} alt="" />
              <img className="hover:bg-opacity-40 hover:-translate-y-2  duration-300" src={img10} alt="" />
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
