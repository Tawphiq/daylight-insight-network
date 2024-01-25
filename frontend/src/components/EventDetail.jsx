/* eslint-disable no-unused-vars */
// EventDetail.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useParams } from 'react-router-dom';

const EventDetail = () => {
  const { id } = useParams();

  // Sample data for the detailed event
  const eventDetails = {
    id: 1,
    eventName: 'Past Event',
    date: '2023-01-01',
    location: 'Past Event Venue',
    description: 'This is a past event.',
    coverImage: 'past-event-cover.jpg',
    gallery: {
      guestsOfHonor: ['guest1.jpg', 'guest2.jpg'],
      winners: ['winner1.jpg', 'winner2.jpg'],
    },
    mediaPartners: ['Media Partner 1', 'Media Partner 2'],
    sponsors: ['Sponsor 1', 'Sponsor 2'],
    socialMediaHandles: {
      facebook: 'event_facebook',
      twitter: 'event_twitter',
      instagram: 'event_instagram',
    },
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-gray-100 p-4 rounded">
        <img src={eventDetails.coverImage} alt={eventDetails.eventName} className="w-full h-48 object-cover mb-4 rounded" />
        <h2 className="text-3xl font-bold mb-2">{eventDetails.eventName}</h2>
        <p>Date: {eventDetails.date}</p>
        <p>Location: {eventDetails.location}</p>
        <p>Description: {eventDetails.description}</p>

        {/* Event Gallery */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Event Gallery</h3>

          {/* Guests of Honor */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Guests of Honor</h4>
            <div className="flex">
              {eventDetails.gallery.guestsOfHonor.map((image, index) => (
                <img key={index} src={image} alt={`Guest of Honor ${index + 1}`} className="w-1/4 h-24 object-cover mr-2 rounded" />
              ))}
            </div>
          </div>

          {/* Winners */}
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Winners</h4>
            <div className="flex">
              {eventDetails.gallery.winners.map((image, index) => (
                <img key={index} src={image} alt={`Winner ${index + 1}`} className="w-1/4 h-24 object-cover mr-2 rounded" />
              ))}
            </div>
          </div>
        </div>

        {/* Media Partners */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Media Partners</h3>
          <ul>
            {eventDetails.mediaPartners.map((partner, index) => (
              <li key={index}>{partner}</li>
            ))}
          </ul>
        </div>

        {/* Sponsors */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Sponsors</h3>
          <ul>
            {eventDetails.sponsors.map((sponsor, index) => (
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
              <span className="ml-2">{eventDetails.socialMediaHandles.facebook}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} size="2x" />
              <span className="ml-2">{eventDetails.socialMediaHandles.twitter}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              <span className="ml-2">{eventDetails.socialMediaHandles.instagram}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
