import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from '../Shared/Banner/Banner';
import Features from '../Shared/Features/Features';
import Projects from '../Shared/Projects/Projects';
import Footer from '../Shared/Footer/Footer';
import Resume from '../Resume/Resume';

const Home = () => {
    
    return (
        <div className='w-full bg-slate-800 text-white'>
            
            <Navbar></Navbar>
            <Banner></Banner>
            <Features></Features>
            <Projects></Projects>
            <Resume></Resume>
            <Footer></Footer>
        </div>
    );
};

export default Home;