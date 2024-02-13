/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import Services from './Services'
import About from './About'
import Events from './Events'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from './Contact'
import ReactPlayer from 'react-player';
import pallazovid from '../assets/pallazovid.mp4';
import latvid from '../assets/latvid.mp4';
import allnicevid from '../assets/allnicevid.mp4';


function Home() {
  useEffect(() => {AOS.init({duration: 2000})}, [])
  const [typedText, setTypedText] = useState('');

  const originalText = `Daylight Insights Network`;

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText(originalText.slice(0, index));
      index += 1;

      if (index > originalText.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);



  return (
        <>
        <div className='text-white mt-20 mb-20 lg:mb-52 grid justify-start p-5 lg:justify-center lg:px-40'>
          <h1 data-aos = 'fade-down' className=' text-4xl lg:text-5xl font-nunito font-extrabold lg:mt-0'>{typedText}</h1>
          <div className='grid mt-1 lg:mt-8'>
          <p data-aos = 'fade-left' className='text-lg lg:text-2xl'>Daylight Insights Network is all about shining a spotlight on great talents and brands in Africa and beyond.</p>
          <div className='grid grid-cols-2 gap-5 lg:w-1/2 mt-5'>
          <NavLink to='/events' className='bg-amber-400 p-4 text-xs lg:text-lg uppercase font-bold rounded-lg'>Explore our Events</NavLink>
          <NavLink className='bg-sky-400 p-4 text-xs lg:text-lg uppercase font-bold rounded-lg'>About Us</NavLink>
          </div>
          </div>
        </div>
          <Services />
          <About />
          <Events />
          <div>
            <div>
              <h3 className='p-4 mt-5 font-semibold text-lg'>Palazzo Salon Gh showing appreciation for being awarded and honored at West African Talents and Entrepreneurs Awards night </h3>
              <ReactPlayer url={pallazovid} controls={true} loop={false} width="100%" aspect-ratio="16/9" className="w-full h-48 mb-4 rounded" />
            </div>
            <div>
            <h3 className='p-4 mt-5 font-semibold text-lg'>Congratulations to  @latifaadekanla ! 🎉 Celebrating their incredible talent and well-deserved victory!”</h3>
              <ReactPlayer url={latvid} controls={true} loop={false} width="100%" aspect-ratio="16/9" className="w-full h-48 mb-4 rounded" />
            </div>
            <div>
            <h3 className='p-4 mt-5 font-semibold text-lg'>Congratulations x 🎉 to ALLNICE CREATION. A video of appreciation for being awarded and honored at the awards night  as the  Best Makeup Artist of the year at West African Talents And Entrepreneurs Awards. Congratulations 🎉.</h3>
              <ReactPlayer url={allnicevid} controls={true} loop={false} width="100%" aspect-ratio="16/9" className="w-full h-48 mb-4 rounded" />
            </div>
          </div>
          <Contact />
        </>
  )
}

export default Home