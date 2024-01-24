/* eslint-disable react/no-unescaped-entities */
import about from '../assets/daylight-about.jpg'
import about1 from '../assets/hero-daylight.jpg'


function About() {
  return (
    <div className="lg:grid lg:grid-cols-2 bg-sky-400 text-white p-10 lg:px-40 font-nunito text-lg">
      <div className='grid grid-cols-2 gap-2'>
      <img src={about} alt="" className='rounded-lg' />
      <img src={about1} alt="" className='mt-28 rounded-lg' />
      </div>
      <div className=''>
      <h1 className="text-4xl lg:6xl font-bold">About Us</h1>
      <p>
        Daylight Insight's Network is a vibrant community dedicated to illuminating the brilliance of extraordinary talents and remarkable brands, not only in Africa but also across the global stage.
      </p>
      <p>
        Our mission is to cast a radiant spotlight on the wealth of creativity and innovation that often goes unnoticed. Whether it's showcasing the prowess of artists, entrepreneurs, or thought leaders, we aim to shed light on stories that inspire, challenge, and redefine the boundaries of what is possible.
      </p>
      </div>
    </div>
  );
}

export default About