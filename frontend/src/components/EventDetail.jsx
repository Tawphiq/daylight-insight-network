// EventDetail.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useParams } from 'react-router-dom';
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
import winner23 from '../assets/westalents-winners/winner23.jpg'







const EventDetail = () => {
  const { id } = useParams();

  // Sample data for multiple events
  const eventsData = [
    {
      id: 1,
      eventName: 'Past Event 1',
      date: '2023-01-01',
      location: 'Past Event 1 Venue',
      description: 'This is the first past event.',
      coverImage: 'past-event-1-cover.jpg',
      gallery: {
        guestsOfHonor: ['guest1.jpg', 'guest2.jpg'],
        winners: [winner1, winner2, winner3, winner4, winner5, winner6, winner7, winner8, winner9, winner10, winner11, winner12, winner13,
            winner14, winner15, winner16, winner17, winner18, winner19, winner20, winner21, winner22, winner23
        ],
      },
      mediaPartners: ['Media Partner 1', 'Media Partner 2'],
      sponsors: ['Sponsor 1', 'Sponsor 2'],
      socialMediaHandles: {
        facebook: 'event1_facebook',
        twitter: 'event1_twitter',
        instagram: 'event1_instagram',
      },
    },
    {
      id: 2,
      eventName: 'Upcoming Event 1',
      date: '2024-12-31',
      location: 'Upcoming Event 1 Venue',
      description: 'This is the first upcoming event.',
      coverImage: 'upcoming-event-1-cover.jpg',
      gallery: {
        guestsOfHonor: ['guest3.jpg', 'guest4.jpg'],
        winners: ['winner3.jpg', 'winner4.jpg'],
      },
      mediaPartners: ['Media Partner 3', 'Media Partner 4'],
      sponsors: ['Sponsor 3', 'Sponsor 4'],
      socialMediaHandles: {
        facebook: 'event2_facebook',
        twitter: 'event2_twitter',
        instagram: 'event2_instagram',
      },
    },
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
    coverImage,
    gallery,
    mediaPartners,
    sponsors,
    socialMediaHandles,
  } = selectedEvent;

  return (
    <div className="container mx-auto mt-8 font-nunito">
      <div className="bg-gray-100 p-4 rounded">
        <img src={coverImage} alt={eventName} className="w-full h-48 object-cover mb-4 rounded" />
        <h2 className="text-3xl font-bold mb-2">{eventName}</h2>
        <p>Date: {date}</p>
        <p>Location: {location}</p>
        <p>Description: {description}</p>

        {/* Event Gallery */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Event Gallery</h3>

          {/* Guests of Honor */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Guests of Honor</h4>
            <div className="flex">
              {gallery.guestsOfHonor.map((image, index) => (
                <img key={index} src={image} alt={`Guest of Honor ${index + 1}`} className="w-1/4 h-24 object-cover mr-2 rounded" />
              ))}
            </div>
          </div>

          {/* Winners */}
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Winners</h4>
            <div className="grid grid-cols-3">
              {gallery.winners.map((image, index) => (
                <img key={index} src={image} alt={`Winner ${index + 1}`} className="h-24 object-cover mr-2 rounded" />
              ))}
            </div>
          </div>
        </div>

        {/* Media Partners */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Media Partners</h3>
          <ul>
            {mediaPartners.map((partner, index) => (
              <li key={index}>{partner}</li>
            ))}
          </ul>
        </div>

        {/* Sponsors */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Sponsors</h3>
          <ul>
            {sponsors.map((sponsor, index) => (
              <li key={index}>{sponsor}</li>
            ))}
          </ul>
        </div>

        {/* Social Media Handles */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Social Media Handles</h3>
          <ul className="flex space-x-4">
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
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
