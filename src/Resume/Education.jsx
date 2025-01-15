import React from 'react';
import ResumeCard from './ResumeCard';
import { motion } from "framer-motion"

const Education = () => {
    return (
        <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}>
            <div>
                <h1 className='text-4xl py-8'>Educational Qualification</h1>
            </div>
            <div>
            <div className='flex flex-col md:flex-row gap-10'>
                <div className='md:w-1/2 border-l-[6px] border-black h-[400px]'>
                <ResumeCard
                title="BSc in Information and Communication Engineering"
                subTitle="Daffodil International University (2020 - 2024)"
                result="3.70/4"
                
                ></ResumeCard>
                </div>
                
                <div className='md:w-1/2 border-l-[6px] border-black h-[400px] '>
                <ResumeCard
                title="Higher Secondary Certificate"
                subTitle="Adamjee Cantonmnet College"
                result="4.75/5"
                ></ResumeCard>
                </div>
                
                
            </div>
            </div>
        </motion.div>
    );
};

export default Education;