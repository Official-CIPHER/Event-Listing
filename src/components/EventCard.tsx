import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Event } from '../types';
import EmailModal from './EmailModal';

interface EventCardProps {
  event: Event;
  onBookingComplete: (email: string) => void;
}

export default function EventCard({ event, onBookingComplete }: EventCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <Link to={`/event/${event.id}`}>
        <img 
          src={event.imageUrl} 
          alt={event.title}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <Link to={`/event/${event.id}`}>
            <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600">{event.title}</h3>
          </Link>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            {event.category}
          </span>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{event.venue}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Ticket className="w-4 h-4 mr-2" />
            <span>{event.price}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{event.description}</p>
        
        <div className="flex gap-2">
          <Link 
            to={`/event/${event.id}`}
            className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-center"
          >
            View Details
          </Link>
          <button
            onClick={() => setShowModal(true)}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <Ticket className="w-4 h-4" />
            Book Now
          </button>
        </div>
      </div>

      <EmailModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        eventId={event.id}
        ticketUrl={event.ticketUrl}
        onBookingComplete={onBookingComplete}
      />
    </div>
  );
}