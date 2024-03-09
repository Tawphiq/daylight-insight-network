import { FaEnvelope, FaInstagram, FaPhone } from 'react-icons/fa';
import ceo from '../assets/daylightceo.jpg';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-blue-100 mb-10 md:grid md:grid-cols-2 w-5/6 md:ml-24 md:gap-5">
      <img
        src={ceo}
        alt="CEO's Picture"
        className="w-full h-full object-cover md:object-top mb-4 md:h-96"
      />
      <div>
      <h2 className="text-2xl font-bold mb-2">Chief Executive Officer (CEO): MR. SAMUEL ADJEI</h2>
      <div className='grid justify-start mr-20'>
      <div className="flex items-center mb-2">
        <FaEnvelope className="mr-2" />
        <p>daylightinsightsnetwork@gmail.com</p>
      </div>
      <div className="flex items-center mb-2 mr-28">
        <FaInstagram className="mr-2" />
        <p>@daylights_network</p>
      </div>
      <div className="flex items-center mb-2 mr-40">
        <FaPhone className="mr-2" />
        <p>0550663208</p>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
