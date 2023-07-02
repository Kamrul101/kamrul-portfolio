import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from '../Shared/Banner/Banner';
import Features from '../Shared/Features/Features';

const Home = () => {
    
    return (
        <div className='w-full h-auto bg-slate-800 text-white'>
            
            <Navbar></Navbar>
            <Banner></Banner>
            <Features></Features>
        </div>
    );
};

export default Home;