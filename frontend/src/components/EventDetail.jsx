// EventDetail.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useParams } from 'react-router-dom';

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
        winners: ['winner1.jpg', 'winner2.jpg'],
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
    <div className="container mx-auto mt-8">
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
            <div className="flex">
              {gallery.winners.map((image, index) => (
                <img key={index} src={image} alt={`Winner ${index + 1}`} className="w-1/4 h-24 object-cover mr-2 rounded" />
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
