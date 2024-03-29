import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  AOS.init()
  return (
    <div id="about" className='w-full  bg-slate-900 pb-20 ' >
      <div className='max-w-7xl p-6  border rounded-lg shadow  bg-slate-800 backdrop-blur-md bg-slate-800/60 border-slate-700 lg:mx-auto flex flex-col mx-5' >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-slate-400 text-slate-200' data-aos='fade-up'>About</p>
        </div>
        <p className='text-xl mt-5 text-slate-400 m' data-aos='fade-up'>Results-driven professional with experience in spatial data science, programming, and remote sensing integration. Skilled in software tools and languages such as ArcGIS, QGIS, ERDAS Imagine, Python, Java, and C with proficiency in geospatial analysis techniques and information technology. Adept at utilizing geospatial tools and programming languages to create impactful solutions in areas such as environmental science, urban planning, data analysis, and software development.</p>

        <br />

        <p className='text-xl text-slate-400' data-aos='fade-up'>In my free time, I enjoy a range of hobbies and interests. I'm an avid basketball player and love spending time on the court with friends. I also have a passion for cars and enjoy learning about the latest models and attending car shows. Hitting the gym is another important part of my routine, as I believe in maintaining a healthy and active lifestyle. When I'm not playing sports or exercising, I enjoy reading books on a variety of topics, from science fiction to biographies. Additionally, I love working on random projects, whether it's building something from scratch or experimenting with new technologies. These hobbies allow me to stay active, creative, and continually learning new things.

        </p>
      </div>
    </div>
  )
}

export default About