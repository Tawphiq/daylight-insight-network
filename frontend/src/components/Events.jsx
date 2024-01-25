/* eslint-disable no-unused-vars */
{/*import { useState } from 'react';
import westalent from '../assets/westalent.jpg'

const EventComponent = () => {
  // State to manage all events
  const [events, setEvents] = useState([
    {
      id: 1,
      eventName: 'Past Event',
      date: '2023-01-01',
      location: 'Past Event Venue',
      description: 'This is a past event.',
      coverImage: 'past-event-cover.jpg',
    },
    {
      id: 2,
      eventName: 'Upcoming Event',
      date: '2024-12-31',
      location: 'Upcoming Event Venue',
      description: 'This is an upcoming event.',
      coverImage: westalent,
    },
    // Add more events as needed
  ]);

  // Filter events based on their date
  const currentDate = new Date();

  const pastEvents = events.filter((event) => new Date(event.date) < currentDate);
  const upcomingEvents = events.filter((event) => new Date(event.date) > currentDate);

  return (
    <div className="container mx-auto mt-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Past Events</h2>
        {pastEvents.map((event) => (
          <div key={event.id} className="bg-gray-100 p-4 mb-4 rounded">
            <img src={event.coverImage} alt={event.eventName} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">{event.eventName}</h3>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
        {upcomingEvents.map((event) => (
          <div key={event.id} className="bg-blue-100 p-4 mb-4 rounded">
            <img src={event.coverImage} alt={event.eventName} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">{event.eventName}</h3>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventComponent;*/}


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
  // State to manage all events
  const [events, setEvents] = useState([
    {
      id: 1,
      eventName: 'Past Event',
      date: '2023-01-01',
      location: 'Past Event Venue',
      description: 'This is a past event.',
      coverImage: 'past-event-cover.jpg',
    },
    {
      id: 2,
      eventName: 'Upcoming Event',
      date: '2024-12-31',
      location: 'Upcoming Event Venue',
      description: 'This is an upcoming event.',
      coverImage: 'upcoming-event-cover.jpg',
    },
    // Add more events as needed
  ]);

  // Filter events based on their date
  const currentDate = new Date();

  const pastEvents = events.filter((event) => new Date(event.date) < currentDate);
  const upcomingEvents = events.filter((event) => new Date(event.date) > currentDate);

  return (
    <div className="container mx-auto mt-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Past Events</h2>
        {pastEvents.map((event) => (
          <Link key={event.id} to={`/events/${event.id}`} className="no-underline">
            <div className="bg-gray-100 p-4 mb-4 rounded cursor-pointer">
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
        <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
        {upcomingEvents.map((event) => (
          <Link key={event.id} to={`/events/${event.id}`} className="no-underline">
            <div className="bg-blue-100 p-4 mb-4 rounded cursor-pointer">
              <img src={event.coverImage} alt={event.eventName} className="w-full h-48 object-cover mb-4 rounded" />
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




