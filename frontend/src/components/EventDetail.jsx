// EventDetail.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useParams } from 'react-router-dom';
import westalent from '../assets/daylight-bg2.mp4'
import max24 from '../assets/max24.jpg'
import castvote from '../assets/castvote.jpg'
import guest1 from '../assets/westalents-guests/guest1.jpg'
import guest2 from '../assets/westalents-guests/guest2.jpg'
import guest3 from '../assets/westalents-guests/guest3.jpg'
import guest4 from '../assets/westalents-guests/guest4.jpg'
import winner1 from '../assets/westalents-winners/winner1.jpg'
import winner2 from '../assets/westalents-winners/winner2.jpg'
import winner3 from '../assets/westalents-winners/winner3.jpg'
import winner4 from '../assets/westalents-winners/winner4.jpg'
import winner5 from '../assets/westalents-winners/winner5.jpg'
import winner6 from '../assets/westalents-winners/winner6.jpg'
import winner7 from '../assets/westalents-winners/winner7.jpg'
import winner8 from '../assets/westalents-winners/winner8.jpg'
import winner9 from '../assets/westalents-winners/winner9.jpg'
import winner10 from '../assets/westalents-winners/winner10.jpg'
import winner11 from '../assets/westalents-winners/winner11.jpg'
import winner12 from '../assets/westalents-winners/winner12.jpg'
import winner13 from '../assets/westalents-winners/winner13.jpg'
import winner14 from '../assets/westalents-winners/winner14.jpg'
import winner15 from '../assets/westalents-winners/winner15.jpg'
import winner16 from '../assets/westalents-winners/winner16.jpg'
import winner17 from '../assets/westalents-winners/winner17.jpg'
import winner18 from '../assets/westalents-winners/winner18.jpg'
import winner19 from '../assets/westalents-winners/winner19.jpg'
import winner20 from '../assets/westalents-winners/winner20.jpg'
import winner21 from '../assets/westalents-winners/winner21.jpg'
import winner22 from '../assets/westalents-winners/winner22.jpg'
import ReactPlayer from 'react-player';
import wasacovervid from '../assets/wasacovervid.mp4';
import wasahighlights from '../assets/wasahighlights.mp4';
import wasa1 from '../assets/wasa/wasa1.jpg';
import wasa2 from '../assets/wasa/wasa2.jpg';
import wasa3 from '../assets/wasa/wasa3.jpg';
import wasa4 from '../assets/wasa/wasa4.jpg';
import wasa5 from '../assets/wasa/wasa5.jpg';
import wasa6 from '../assets/wasa/wasa6.jpg';
import wasa7 from '../assets/wasa/wasa7.jpg';
import wasa8 from '../assets/wasa/wasa8.jpg';
import wasa9 from '../assets/wasa/wasa9.jpg';
import wasa10 from '../assets/wasa/wasa10.jpg';
import wasa11 from '../assets/wasa/wasa11.jpg';
import wasa12 from '../assets/wasa/wasa12.jpg';
import wasa13 from '../assets/wasa/wasa13.jpg';
import wasa14 from '../assets/wasa/wasa14.jpg';
import wasa15 from '../assets/wasa/wasa15.jpg';
import wasa16 from '../assets/wasa/wasa16.jpg';
import wasa17 from '../assets/wasa/wasa17.jpg';
import wasa18 from '../assets/wasa/wasa18.jpg';







const EventDetail = () => {
  const { id } = useParams();

  // Sample data for multiple events
  const eventsData = [
    {
      id: 1,
      eventName: 'West African Talents And Entrepreneurs Awards',
      date: '2023-01-01',
      location: 'Past Event 1 Venue',
      description: 'This is the first past event.',
      coverVideo: westalent,
      gallery: {
        guestsOfHonor: [guest1, guest2, guest3, guest4],
        winners: [winner1, winner2, winner3, winner4, winner5, winner6, winner7, winner8, winner9, winner10, winner11, winner12, winner13,
            winner14, winner15, winner16, winner17, winner18, winner19, winner20, winner21, winner22
        ],
      },
      mediaPartners: [max24],
      sponsors: [castvote],
      socialMediaHandles: {
        facebook: 'West African Talents And Entrepreneurs Awards',
        twitter: 'WestTalentsCeos',
        instagram: 'african_talents_entrepreneurs',
      },
    },
    {
      id: 2,
      eventName: 'West African sports awards and honors',
      date: '2024-12-31',
      location: 'AMA City Hall',
      coverVideo: [wasacovervid],
      eventGallery: [wasa1, wasa2, wasa3, wasa4, wasa5, wasa6, wasa7, wasa8, wasa9, wasa10, wasa11, wasa12, wasa13, wasa14, wasa15, wasa16, wasa17, wasa18],
      highlights: [wasahighlights],
    },

    {
      id: 3,
      eventName:'West African Photographers Awards and Honors',
      date: null,
    }
    // Add more events as needed
  ];

  // Find the selected event based on the id parameter
  const selectedEvent = eventsData.find((event) => event.id.toString() === id);

  // If the selected event is not found, you can handle it as needed (e.g., show a message)
  if (!selectedEvent) {
    return <div>No event found</div>;
  }

  const {
    eventName,
    date,
    location,
    description,
    coverVideo,
    gallery,
    mediaPartners,
    sponsors,
    socialMediaHandles,
    highlights,
    eventGallery,
  } = selectedEvent;

  return (
    <div className="container mx-auto mt-8 font-nunito">
      <div className="bg-gray-100 p-4 rounded">
        <ReactPlayer url={coverVideo} controls={true} loop={true} width="100%" aspect-ratio="16/9" className="w-full h-48 object-coverj mb-4 rounded" />
        <h2 className="text-3xl font-bold mb-2">{eventName}</h2>
        <p>Date: {date}</p>
        <p>Location: {location}</p>
        <p>Description: {description}</p>

        {/* Event Gallery */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Event Gallery</h3>
          <div className='grid grid-cols-2 gap-2'>
            {eventGallery && eventGallery.map((img, index) => (
              <img key={index} src={img} />
            ))

            }
          </div>

          {/* Guests of Honor */}
          {gallery && gallery.guestsOfHonor && <div>
            <h4 className="text-lg font-semibold mb-2">Guests of Honor</h4>
            <div className="grid grid-cols-2 gap-2">
              {gallery && gallery.guestsOfHonor && gallery.guestsOfHonor.map((image, index) => (
                <img key={index} src={image} alt={`Guest of Honor ${index + 1}`} className="object-cover mr-2 rounded" />
              ))}
            </div>
          </div>}

          {/* Winners */}
          {gallery && gallery.winners && <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Winners</h4>
            <div className="grid grid-cols-2 gap-2">
              {gallery && gallery.winners && gallery.winners.map((image, index) => (
                <img key={index} src={image} alt={`Winner ${index + 1}`} className="object-cover mr-2 rounded" />
              ))}
            </div>
              </div>}
          </div>

        <div>
          <h1 className='text-3xl mt-10'>Event Highlights</h1>
          <div className='-mt-14'>
            {highlights && highlights.map((highlight, index) => (
              <ReactPlayer key={index} url={highlight} controls={true} loop={true} width="100%" aspect-ratio="16/9" />
            ))}
          </div>
            </div>

        {/* Media Partners */}
        {mediaPartners && <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Media Partners</h3>
          <div>
            {mediaPartners && mediaPartners.map((partner, index) => (
              <img key={index} src={partner} />
            ))}
          </div>
        </div>}

        {/* Sponsors */}
        {sponsors && <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Sponsors</h3>
          <div>
            {sponsors && sponsors.map((sponsor, index) => (
              <img key={index} src={sponsor} />
            ))}
          </div>
        </div>}

        {/* Social Media Handles */}
        {socialMediaHandles && <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Social Media Handles</h3>
          <ul className="grid grid-rows-1">
            <li>
              <FontAwesomeIcon icon={faFacebook} size="2x" />
              <span className="ml-2">{socialMediaHandles.facebook}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} size="2x" />
              <span className="ml-2">{socialMediaHandles.twitter}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              <span className="ml-2">{socialMediaHandles.instagram}</span>
            </li>
          </ul>
        </div>}
      </div>
    </div>
  );
};

export default EventDetail;
