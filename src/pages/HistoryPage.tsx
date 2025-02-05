import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Ticket } from 'lucide-react';
import { TicketBooking } from '../types';
import { events } from '../data/events';

export default function HistoryPage() {
  const bookings: TicketBooking[] = JSON.parse(localStorage.getItem('ticketBookings') || '[]')
    .map((booking: any) => ({
      ...booking,
      event: events.find(e => e.id === booking.eventId)
    }))
    .filter((booking: TicketBooking) => booking.event)
    .sort((a: TicketBooking, b: TicketBooking) => 
      new Date(b.bookingDate).getTime() - new Date(a.bookingDate).getTime()
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/" className="text-white hover:text-blue-200 flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Back to Events
            </Link>
          </div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Ticket className="w-8 h-8" />
            Your Ticket History
          </h1>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {bookings.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <Ticket className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No Tickets Yet</h2>
            <p className="text-gray-600 mb-4">You haven't booked any tickets yet.</p>
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Browse Events
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6 items-center"
              >
                <img
                  src={booking.event.imageUrl}
                  alt={booking.event.title}
                  className="w-full md:w-48 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{booking.event.title}</h3>
                  <div className="text-gray-600 mb-2">
                    <p>Event Date: {new Date(booking.event.date).toLocaleDateString()}</p>
                    <p>Time: {booking.event.time}</p>
                    <p>Venue: {booking.event.venue}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      booking.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {booking.status}
                    </span>
                    <span className="text-sm text-gray-500">
                      Booked on {new Date(booking.bookingDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <a
                  href={booking.event.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Ticket
                </a>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}