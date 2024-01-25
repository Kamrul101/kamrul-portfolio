import React, { useState } from 'react';
import ResumeCard from './ResumeCard';
import Education from './Education';
import Skills from './Skills';


const Resume = () => {

    const [educationData, setEducationData]=useState(true);
    const [skillData, setSkillData]=useState(false);

    return (
        <div id='resume' className='mx-3 md:w-[80%] md:mx-auto mb-20'>
            <h1 className='text-center text-4xl uppercase font-semibold py-10'>My Resume</h1>
            <div >
                <ul className='grid grid-cols-2 text-center'>
                    <li onClick={()=>setEducationData(true) & setSkillData(false)} className='resumeLi'>Education</li>
                    <li onClick={()=>setEducationData(false) & setSkillData(true)} className='resumeLi'>Professional Skills</li>
                </ul>
            </div>
            {
                educationData && <Education></Education>
            }
            {
                skillData && <Skills></Skills>
            }
            
        </div>
    );
};

export default Resume;