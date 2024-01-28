/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import westalent from '../assets/westalent.jpg'
import wasa from '../assets/hero-daylight.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Events = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      eventName: 'West African Talents And Entrepreneurs Awards',
      date: '2023-12-22',
      location: 'Past Event Venue',
      description: 'This is a past event.',
      coverImage: westalent,
    },
    {
      id: 2,
      eventName: 'West African sports awards and honors',
      date: '2023-08-20',
      location: 'Upcoming Event Venue',
      description: 'This is an upcoming event.',
      coverImage: wasa,
    },
    // Add more events as needed
  ]);

  // Filter events based on their date
  const currentDate = new Date();

  const pastEvents = events.filter((event) => new Date(event.date) < currentDate);
  const upcomingEvents = events.filter((event) => new Date(event.date) > currentDate);

  useEffect(() => {AOS.init({duration: 2000})}, [])

  return (
    <div className="container mx-auto mt-8 font-nunito">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 ml-4">Past Events</h2>
        {pastEvents.map((event) => (
          <Link key={event.id} to={`/events/${event.id}`} className="no-underline">
            <div data-aos="fade-up" className="bg-gray-100 p-4 mb-4 rounded cursor-pointer">
              <img src={event.coverImage} alt={event.eventName} className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-semibold mb-2">{event.eventName}</h3>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <p>Description: {event.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-4 ml-4">Upcoming Events</h2>
        {upcomingEvents.map((event) => (
          <Link key={event.id} to={`/events/${event.id}`} className="no-underline">
            <div data-aos="fade-up" className="bg-blue-100 p-4 mb-4 rounded cursor-pointer">
              {event.coverImage && <img src={event.coverImage} alt={event.eventName} className="w-full h-48 object-cover mb-4 rounded" />}
              <h3 className="text-xl font-semibold mb-2">{event.eventName}</h3>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <p>Description: {event.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events;




