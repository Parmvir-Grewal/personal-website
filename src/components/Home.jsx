import React from 'react'
import { HiArrowRight } from "react-icons/hi";
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  AOS.init();
  return (
    <div name="home" className='h-screen w-full bg-slate-900 text-white'>
      <div className='max-w-screen-2xl mx-auto flex flex-col items-center
         justify-center h-full px-4 md:flex-row' data-aos='fade-up'>
        <div className='flex flex-col justify-center items-center h-full w-5/6 mb-40'>
          <p className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-center py-3 max-w-lg sm:text-3xl text-2xl' >Hi, my name is</p>
          <h2 className='text-slate-300 text-4xl sm:text-7xl font-bold' >
            Parmvir Grewal
          </h2>
          <h2 className='text-slate-400 text-center text-4xl sm:text-7xl py-2 font-light'>
            <Typewriter
              options={{
                strings: ["GIS / CS Specialist"],
                autoStart: true,
                loop: true,
                delay: 90,
                pauseFor: 800,
              }}
            />
          </h2>

          <div>
            <Link to="portfolio" smooth duration={500} className='group  w-fit px-6 py-3 mt-5 flex items-center bg-slate-800 backdrop-blur-md bg-slate-800/60 text-slate-300 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white rounded-3xl cursor-pointer hover:scale-105 duration-200'>
              Portfolio
              <span className='group-hover:rotate-90 duration-200'>
                <HiArrowRight size={20} className='ml-2' />
              </span>
            </Link>
          </div>
        </div>

      </div>
    </div>


  )

}

export default Home