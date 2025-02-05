import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { TicketBooking } from '../types';
import { events } from '../data/events';

export default function TicketHistory() {
  const bookings: TicketBooking[] = JSON.parse(localStorage.getItem('ticketBookings') || '[]')
    .map((booking: any) => ({
      ...booking,
      event: events.find(e => e.id === booking.eventId)
    }))
    .filter((booking: TicketBooking) => booking.event)
    .sort((a: TicketBooking, b: TicketBooking) => 
      new Date(b.bookingDate).getTime() - new Date(a.bookingDate).getTime()
    );

  if (bookings.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6">Your Ticket History</h2>
      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50"
          >
            <img
              src={booking.event.imageUrl}
              alt={booking.event.title}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{booking.event.title}</h3>
              <div className="flex gap-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(booking.event.date).toLocaleDateString()}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {booking.event.time}
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {booking.status}
              </span>
              <div className="text-sm text-gray-500 mt-1">
                {new Date(booking.bookingDate).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}