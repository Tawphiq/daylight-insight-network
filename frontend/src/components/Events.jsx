import { useState } from 'react';

const Events = () => {
  // State to manage all events
  // eslint-disable-next-line no-unused-vars
  const [events, setEvents] = useState([
    {
      id: 1,
      eventName: 'Past Event',
      date: '2023-01-01',
      location: 'Past Event Venue',
      description: 'This is a past event.',
    },
    {
      id: 2,
      eventName: 'Upcoming Event',
      date: '2024-12-31',
      location: 'Upcoming Event Venue',
      description: 'This is an upcoming event.',
    },
    // Add more events as needed
  ]);

  // Filter events based on their date
  const currentDate = new Date();

  const pastEvents = events.filter((event) => new Date(event.date) < currentDate);
  const upcomingEvents = events.filter((event) => new Date(event.date) > currentDate);

  return (
    <div className="container mx-auto mt-8 p-10 font-nunito">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-4">Past Events</h2>
        {pastEvents.map((event) => (
          <div key={event.id} className="bg-gray-100 p-4 mb-4 rounded">
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

export default Events;
