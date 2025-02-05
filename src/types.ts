export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  imageUrl: string;
  ticketUrl: string;
  price: string;
  category: string;
  longDescription?: string;
  highlights?: string[];
  capacity?: number;
  organizer?: string;
}

export interface EmailSubscription {
  email: string;
  eventId: string;
  marketing: boolean;
}

export interface TicketBooking {
  id: string;
  email: string;
  eventId: string;
  event: Event;
  bookingDate: string;
  status: 'confirmed' | 'pending';
  quantity?: number;
}