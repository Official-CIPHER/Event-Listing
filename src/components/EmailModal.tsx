import React, { useState } from 'react';
import { Check, Loader2, X } from 'lucide-react';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventId: string;
  ticketUrl: string;
  onBookingComplete: (email: string) => void;
}

export default function EmailModal({ isOpen, onClose, eventId, ticketUrl, onBookingComplete }: EmailModalProps) {
  const [email, setEmail] = useState('');
  const [marketing, setMarketing] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus('success');
    onBookingComplete(email);
    
    // Store booking in localStorage
    const bookings = JSON.parse(localStorage.getItem('ticketBookings') || '[]');
    bookings.push({
      id: Math.random().toString(36).substr(2, 9),
      email,
      eventId,
      bookingDate: new Date().toISOString(),
      status: 'confirmed'
    });
    localStorage.setItem('ticketBookings', JSON.stringify(bookings));
    
    // Redirect after showing success message
    setTimeout(() => {
      window.location.href = ticketUrl;
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          disabled={status === 'loading'}
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-xl font-bold mb-4">Get Your Tickets</h3>
        
        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
              <Check className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="text-lg font-semibold text-green-600 mb-2">Email Verified Successfully!</h4>
            <p className="text-gray-600">Redirecting you to the ticket page...</p>
          </div>
        ) : (
          <>
            <p className="text-gray-600 mb-4">
              Enter your email to proceed to ticket purchase. We'll keep you updated about similar events!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                  disabled={status === 'loading'}
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="marketing"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="mt-1"
                  disabled={status === 'loading'}
                />
                <label htmlFor="marketing" className="ml-2 text-sm text-gray-600">
                  I agree to receive marketing emails about upcoming events and special offers
                </label>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  'Continue to Tickets'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}