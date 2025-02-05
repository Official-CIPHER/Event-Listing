import { Event } from '../types';

export const events: Event[] = [
  {
    id: '1',
    title: 'Sydney Opera House - Symphony Under the Stars',
    date: '2024-03-25',
    time: '19:30',
    venue: 'Sydney Opera House',
    description: 'Experience a magical evening of classical music under the stars at the iconic Sydney Opera House.',
    longDescription: 'Join us for an unforgettable evening of classical masterpieces performed by the Sydney Symphony Orchestra. Under the direction of Maestro David Robertson, the orchestra will perform works by Mozart, Beethoven, and Tchaikovsky. The stunning backdrop of Sydney Harbour and the Opera House will create a magical atmosphere for this special outdoor concert.',
    imageUrl: 'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?auto=format&fit=crop&q=80',
    ticketUrl: 'https://example.com/tickets/1',
    price: '$89 - $250',
    category: 'Music',
    highlights: [
      'World-class symphony orchestra',
      'Iconic venue setting',
      'Pre-concert talks',
      'VIP reception available'
    ],
    capacity: 5000,
    organizer: 'Sydney Symphony Orchestra'
  },
  {
    id: '2',
    title: 'Bondi Beach Food Festival',
    date: '2024-03-27',
    time: '11:00',
    venue: 'Bondi Beach',
    description: 'Indulge in Sydney\'s finest culinary delights with stunning ocean views.',
    longDescription: 'The Bondi Beach Food Festival brings together over 50 of Sydney\'s best restaurants, food trucks, and artisanal producers. Enjoy live cooking demonstrations, wine tastings, and musical performances while sampling incredible dishes from around the world. With the beautiful Bondi Beach as your backdrop, this is a food lover\'s paradise.',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80',
    ticketUrl: 'https://example.com/tickets/2',
    price: '$25',
    category: 'Food',
    highlights: [
      '50+ food vendors',
      'Celebrity chef demonstrations',
      'Wine and craft beer tastings',
      'Live entertainment'
    ],
    capacity: 10000,
    organizer: 'Bondi Beach Events'
  },
  {
    id: '3',
    title: 'Australian Art Exhibition',
    date: '2024-03-30',
    time: '10:00',
    venue: 'Museum of Contemporary Art',
    description: 'Discover stunning works from Australia\'s leading contemporary artists.',
    longDescription: 'This landmark exhibition showcases the diversity and dynamism of contemporary Australian art. Featuring works from both established and emerging artists, the exhibition explores themes of identity, landscape, and cultural heritage. Interactive installations and multimedia presentations create an immersive experience for visitors.',
    imageUrl: 'https://images.unsplash.com/photo-1594794312433-05a69a98b7a0?auto=format&fit=crop&q=80',
    ticketUrl: 'https://example.com/tickets/3',
    price: '$20',
    category: 'Art',
    highlights: [
      'Over 100 artworks',
      'Artist talks and workshops',
      'Interactive installations',
      'Guided tours available'
    ],
    capacity: 1000,
    organizer: 'Museum of Contemporary Art'
  },
  {
    id: '4',
    title: 'Sydney Harbor Bridge Climb',
    date: '2024-04-02',
    time: 'Multiple Times',
    venue: 'Sydney Harbor Bridge',
    description: 'Scale one of Sydney\'s most iconic landmarks for breathtaking views.',
    longDescription: 'Experience Sydney from new heights with our guided Bridge Climb experience. Professional climbers will lead you to the summit of the Sydney Harbor Bridge, sharing fascinating stories about the bridge\'s history and construction. Perfect for thrill-seekers and photography enthusiasts.',
    imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80',
    ticketUrl: 'https://example.com/tickets/4',
    price: '$150 - $300',
    category: 'Adventure',
    highlights: [
      'Professional guides',
      'Safety equipment provided',
      'Photo opportunities',
      'Dawn and twilight climbs available'
    ],
    capacity: 200,
    organizer: 'BridgeClimb Sydney'
  },
  {
    id: '5',
    title: 'Sydney Comedy Festival',
    date: '2024-04-05',
    time: '20:00',
    venue: 'State Theatre',
    description: 'A night of non-stop laughter with Australia\'s best comedians.',
    longDescription: 'The Sydney Comedy Festival returns with an all-star lineup of local and international comedians. Featuring stand-up sets, improv shows, and comedy workshops, this festival promises to deliver the biggest laughs of the year. Don\'t miss the chance to see both established stars and rising talents.',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80',
    ticketUrl: 'https://example.com/tickets/5',
    price: '$45 - $80',
    category: 'Entertainment',
    highlights: [
      'International comedians',
      'Multiple venues',
      'Late-night shows',
      'Festival club access'
    ],
    capacity: 2000,
    organizer: 'Sydney Comedy Festival'
  },
  {
    id: '6',
    title: 'Wine & Cheese Festival',
    date: '2024-04-10',
    time: '12:00',
    venue: 'The Rocks',
    description: 'Sample premium wines and artisanal cheeses in historic The Rocks.',
    longDescription: 'Discover the perfect pairings at Sydney\'s premier Wine & Cheese Festival. Meet local winemakers and cheese artisans, attend masterclasses, and enjoy live music in the historic setting of The Rocks. Features wines from Hunter Valley, Barossa Valley, and international regions.',
    imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80',
    ticketUrl: 'https://example.com/tickets/6',
    price: '$60',
    category: 'Food',
    highlights: [
      'Premium wine tastings',
      'Cheese making demonstrations',
      'Expert-led workshops',
      'Souvenir wine glass'
    ],
    capacity: 3000,
    organizer: 'Sydney Food & Wine Events'
  },
  {
    id: '7',
    title: 'Sydney Tech Conference',
    date: '2024-04-15',
    time: '09:00',
    venue: 'International Convention Centre',
    description: 'Connect with tech leaders and discover the latest innovations.',
    longDescription: 'The Sydney Tech Conference brings together industry leaders, startups, and innovators for two days of inspiring talks, workshops, and networking. Explore the latest developments in AI, blockchain, cybersecurity, and more. Perfect for professionals, entrepreneurs, and tech enthusiasts.',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
    ticketUrl: 'https://example.com/tickets/7',
    price: '$299 - $599',
    category: 'Technology',
    highlights: [
      'Keynote speakers',
      'Startup showcase',
      'Networking events',
      'Workshop sessions'
    ],
    capacity: 5000,
    organizer: 'Tech Sydney'
  },
  {
    id: '8',
    title: 'Taronga Zoo Night Safari',
    date: '2024-04-20',
    time: '19:00',
    venue: 'Taronga Zoo',
    description: 'Experience the zoo after dark with a guided night safari.',
    longDescription: 'Discover the magical world of nocturnal animals at Taronga Zoo\'s Night Safari. Led by expert guides, you\'ll observe native and exotic animals in their nighttime habitats. Includes special keeper talks, animal encounters, and a gourmet dinner under the stars.',
    imageUrl: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&q=80',
    ticketUrl: 'https://example.com/tickets/8',
    price: '$120',
    category: 'Nature',
    highlights: [
      'Guided tour',
      'Night vision equipment',
      'Gourmet dinner',
      'Animal encounters'
    ],
    capacity: 100,
    organizer: 'Taronga Zoo'
  },
  {
    id: '9',
    title: 'Sydney Fashion Week',
    date: '2024-04-25',
    time: 'Various',
    venue: 'Carriageworks',
    description: 'Experience the latest in Australian and international fashion.',
    longDescription: 'Sydney Fashion Week showcases the best of Australian fashion with runway shows, presentations, and industry talks. See collections from established designers and emerging talents, attend styling workshops, and shop at exclusive pop-up boutiques.',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80',
    ticketUrl: 'https://example.com/tickets/9',
    price: '$80 - $500',
    category: 'Fashion',
    highlights: [
      'Designer runway shows',
      'Industry networking',
      'Beauty workshops',
      'Pop-up shopping'
    ],
    capacity: 3000,
    organizer: 'Australian Fashion Council'
  },
  {
    id: '10',
    title: 'Sydney Marathon',
    date: '2024-05-01',
    time: '06:00',
    venue: 'Sydney CBD',
    description: 'Run through Sydney\'s most iconic locations in this annual marathon.',
    longDescription: 'The Sydney Marathon takes runners on a scenic journey past the city\'s most famous landmarks. Starting at Bradfield Park, the course crosses the Harbor Bridge, passes the Opera House, and finishes at the Royal Botanic Gardens. Suitable for all levels with full marathon, half marathon, and fun run options.',
    imageUrl: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80',
    ticketUrl: 'https://example.com/tickets/10',
    price: '$85 - $120',
    category: 'Sports',
    highlights: [
      'Multiple race distances',
      'Medal for all finishers',
      'Post-race celebration',
      'Live tracking'
    ],
    capacity: 15000,
    organizer: 'Athletics Australia'
  }
];