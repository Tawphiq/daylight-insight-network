import ReactPlayer from 'react-player';
import pallazovid from '../assets/pallazovid.mp4';
import latvid from '../assets/latvid.mp4';
import allnicevid from '../assets/allnicevid.mp4';
import dayl from '../assets/dayl.mp4';

function Recepients() {
  return (
    <div className='md:grid md:grid-cols-2 md:gap-4 md:px-20'>
            <div>
              <h3 className='p-4 mt-5 font-semibold text-lg font-nunito'>Palazzo Salon Gh showing appreciation for being awarded and honored at West African Talents and Entrepreneurs Awards night </h3>
              <ReactPlayer url={pallazovid} controls={true} loop={false} width="100%" aspect-ratio="16/9" className="w-full h-48 mb-4 rounded" />
            </div>
            <div>
            <h3 className='p-4 mt-5 font-semibold text-lg font-nunito'>Congratulations to  @latifaadekanla ! 🎉 Celebrating their incredible talent and well-deserved victory!”</h3>
              <ReactPlayer url={latvid} controls={true} loop={false} width="100%" aspect-ratio="16/9" className="w-full h-48 mb-4 rounded" />
            </div>
            <div>
            <h3 className='p-4 mt-5 font-semibold text-lg font-nunito'>Congratulations x 🎉 to ALLNICE CREATION. A video of appreciation for being awarded and honored at the awards night  as the  Best Makeup Artist of the year at West African Talents And Entrepreneurs Awards. Congratulations 🎉.</h3>
              <ReactPlayer url={allnicevid} controls={true} loop={false} width="100%" aspect-ratio="16/9" className="w-full h-48 mb-4 rounded" />
            </div>
            <div className='md:mt-40'>
            <ReactPlayer url={dayl} controls={true} loop={false} width="100%" aspect-ratio="16/9" className="w-full h-48 mb-4 rounded" />
            </div>
          </div>
  )
}

export default Recepients