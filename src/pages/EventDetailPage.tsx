import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Ticket, Users, Building } from 'lucide-react';
import { events } from '../data/events';
import { Event } from '../types';
import EmailModal from '../components/EmailModal';

export default function EventDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState<Event | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const foundEvent = events.find(e => e.id === id);
    if (!foundEvent) {
      navigate('/');
    } else {
      setEvent(foundEvent);
    }
  }, [id, navigate]);

  if (!event) return null;

  const handleBookingComplete = (email: string) => {
    setTimeout(() => {
      navigate('/history');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-blue-100 hover:text-white mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Events
          </Link>
          <h1 className="text-3xl font-bold">{event.title}</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image and Key Details */}
          <div className="lg:col-span-2">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg mb-6"
            />
            <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
              <h2 className="text-2xl font-bold mb-4">Event Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2 text-blue-600" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  <span>{event.venue}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-2 text-blue-600" />
                  <span>Capacity: {event.capacity} people</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Building className="w-5 h-5 mr-2 text-blue-600" />
                  <span>Organizer: {event.organizer}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Ticket className="w-5 h-5 mr-2 text-blue-600" />
                  <span>{event.price}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Description and Booking */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">About This Event</h2>
              <p className="text-gray-600 mb-6">{event.longDescription}</p>
              
              {event.highlights && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Event Highlights</h3>
                  <ul className="space-y-2">
                    {event.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2"></span>
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                onClick={() => setShowModal(true)}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Ticket className="w-5 h-5" />
                Book Now
              </button>
            </div>
          </div>
        </div>
      </main>

      <EmailModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        eventId={event.id}
        ticketUrl={event.ticketUrl}
        onBookingComplete={handleBookingComplete}
      />
    </div>
  );
}