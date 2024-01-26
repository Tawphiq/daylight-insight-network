/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react'
import about from '../assets/daylight-about.jpg'
import about1 from '../assets/hero-daylight.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


function About() {
  useEffect(() => {AOS.init({duration: 2000})}, [])


  return (
    <div className="lg:grid lg:grid-cols-2 bg-sky-400 text-white p-10 lg:px-40 font-nunito text-lg">
      <div className='grid grid-cols-2 gap-2'>
      <img data-aos="flip-right" src={about1} alt="" className='rounded-lg' />
      <img data-aos="flip-left" src={about} alt="" className='mt-28 mb-5 rounded-lg' />
      </div>
      <div data-aos="fade-left" className=''>
      <h1 className="text-4xl lg:6xl font-bold">About Us</h1>
      <p>
        Daylight Insight's Network is a vibrant community dedicated to illuminating the brilliance of extraordinary talents and remarkable brands, not only in Africa but also across the global stage.
      </p>
      <p>
        Our mission is to cast a radiant spotlight on the wealth of creativity and innovation that often goes unnoticed.
      </p>
      </div>
    </div>
  );
}

export default About