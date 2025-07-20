export interface Activity {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  price?: string;
  distance?: string;
  cuisine?: string;
  type?: string;
  rating?: number;
  location?: string;
  duration?: string;
  difficulty?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  activities: Activity[];
}

export const onResortCategories: Category[] = [
  {
    id: 'dining',
    name: 'Dining',
    description: 'World-class restaurants and dining experiences',
    icon: '🍽️',
    activities: [
      {
        id: 'nobu',
        name: 'Nobu',
        description: 'World-renowned Japanese cuisine with fresh seafood and innovative dishes.',
        image: '/images/nobu.jpg',
        category: 'Fine Dining',
        price: '$$$',
        cuisine: 'Japanese',
        type: 'Fine Dining',
        rating: 4.8,
        location: 'Atlantis Paradise Island',
      },
      {
        id: 'casa-d-amore',
        name: 'Casa D\'Amore',
        description: 'Authentic Italian cuisine in an elegant setting with ocean views.',
        image: '/images/casa-d-amore.jpg',
        category: 'Fine Dining',
        price: '$$',
        cuisine: 'Italian',
        type: 'Fine Dining',
        rating: 4.6,
        location: 'Atlantis Paradise Island',
      },
      {
        id: 'virgils-bbq',
        name: 'Virgil\'s Real BBQ',
        description: 'Authentic Southern barbecue with live music and casual atmosphere.',
        image: '/images/virgils-bbq.jpg',
        category: 'Casual Dining',
        price: '$$',
        cuisine: 'American BBQ',
        type: 'Casual Dining',
        rating: 4.4,
        location: 'Atlantis Paradise Island',
      },
    ]
  },
  {
    id: 'bars',
    name: 'Bars & Lounges',
    description: 'Relax and unwind with premium cocktails and entertainment',
    icon: '🍹',
    activities: [
      {
        id: 'aqualounge',
        name: 'Aqualounge',
        description: 'Sophisticated cocktail bar with underwater views of marine life.',
        image: '/images/aqualounge.jpg',
        category: 'Cocktail Bar',
        price: '$$',
        type: 'Cocktail Bar',
        rating: 4.5,
        location: 'Atlantis Paradise Island',
      },
      {
        id: 'sip-sip',
        name: 'Sip Sip',
        description: 'Beachfront bar serving tropical cocktails and light fare.',
        image: '/images/sip-sip.jpg',
        category: 'Beach Bar',
        price: '$$',
        type: 'Beach Bar',
        rating: 4.3,
        location: 'Atlantis Paradise Island',
      },
    ]
  },
  {
    id: 'activities',
    name: 'Things to Do',
    description: 'Exciting activities and entertainment for all ages',
    icon: '🎯',
    activities: [
      {
        id: 'aquaventure',
        name: 'Aquaventure Water Park',
        description: 'World\'s largest open-air marine habitat with thrilling water slides.',
        image: '/images/aquaventure.jpg',
        category: 'Water Park',
        price: 'Included',
        type: 'Water Park',
        rating: 4.9,
        location: 'Atlantis Paradise Island',
        duration: 'Full Day',
        difficulty: 'Easy',
      },
      {
        id: 'marine-habitat',
        name: 'Marine Habitat',
        description: 'Explore the world\'s largest open-air marine habitat with over 50,000 marine animals.',
        image: '/images/marine-habitat.jpg',
        category: 'Aquarium',
        price: 'Included',
        type: 'Aquarium',
        rating: 4.7,
        location: 'Atlantis Paradise Island',
        duration: '2-3 Hours',
        difficulty: 'Easy',
      },
      {
        id: 'spa',
        name: 'Mandara Spa',
        description: 'Luxurious spa treatments inspired by ancient Balinese healing traditions.',
        image: '/images/mandara-spa.jpg',
        category: 'Spa',
        price: '$$$',
        type: 'Spa',
        rating: 4.8,
        location: 'Atlantis Paradise Island',
        duration: '1-3 Hours',
        difficulty: 'Easy',
      },
    ]
  }
];

export const offResortCategories: Category[] = [
  {
    id: 'dining',
    name: 'Dining',
    description: 'Local restaurants and culinary experiences',
    icon: '🍽️',
    activities: [
      {
        id: 'fish-fry',
        name: 'Arawak Cay Fish Fry',
        description: 'Authentic Bahamian seafood and local cuisine in a vibrant atmosphere.',
        image: '/images/fish-fry.jpg',
        category: 'Local Cuisine',
        price: '$$',
        cuisine: 'Bahamian',
        type: 'Casual Dining',
        rating: 4.5,
        distance: '2.5 miles',
        location: 'Arawak Cay',
      },
      {
        id: 'cafe-matisse',
        name: 'Café Matisse',
        description: 'Elegant French-Italian fusion cuisine in a historic building.',
        image: '/images/cafe-matisse.jpg',
        category: 'Fine Dining',
        price: '$$$',
        cuisine: 'French-Italian',
        type: 'Fine Dining',
        rating: 4.7,
        distance: '1.8 miles',
        location: 'Downtown Nassau',
      },
    ]
  },
  {
    id: 'bars',
    name: 'Bars & Nightlife',
    description: 'Local bars and entertainment venues',
    icon: '🍹',
    activities: [
      {
        id: 'senor-frogs',
        name: 'Senor Frog\'s',
        description: 'Famous party bar with tropical drinks and live entertainment.',
        image: '/images/senor-frogs.jpg',
        category: 'Party Bar',
        price: '$$',
        type: 'Party Bar',
        rating: 4.2,
        distance: '2.1 miles',
        location: 'Downtown Nassau',
      },
      {
        id: 'green-parrot',
        name: 'Green Parrot Bar',
        description: 'Historic bar with local character and traditional Bahamian drinks.',
        image: '/images/green-parrot.jpg',
        category: 'Local Bar',
        price: '$',
        type: 'Local Bar',
        rating: 4.4,
        distance: '1.5 miles',
        location: 'Downtown Nassau',
      },
    ]
  },
  {
    id: 'activities',
    name: 'Things to Do',
    description: 'Local attractions and cultural experiences',
    icon: '🎯',
    activities: [
      {
        id: 'queens-staircase',
        name: 'Queen\'s Staircase',
        description: 'Historic 66-step staircase carved from limestone in the 18th century.',
        image: '/images/queens-staircase.jpg',
        category: 'Historical Site',
        price: 'Free',
        type: 'Historical Site',
        rating: 4.3,
        distance: '1.2 miles',
        location: 'Downtown Nassau',
        duration: '1 Hour',
        difficulty: 'Easy',
      },
      {
        id: 'cable-beach',
        name: 'Cable Beach',
        description: 'Pristine white sand beach perfect for swimming and water sports.',
        image: '/images/cable-beach.jpg',
        category: 'Beach',
        price: 'Free',
        type: 'Beach',
        rating: 4.6,
        distance: '3.0 miles',
        location: 'Cable Beach',
        duration: 'Half Day',
        difficulty: 'Easy',
      },
      {
        id: 'fort-charlotte',
        name: 'Fort Charlotte',
        description: 'Historic British fort with stunning views and guided tours.',
        image: '/images/fort-charlotte.jpg',
        category: 'Historical Site',
        price: '$',
        type: 'Historical Site',
        rating: 4.4,
        distance: '2.8 miles',
        location: 'Downtown Nassau',
        duration: '2 Hours',
        difficulty: 'Easy',
      },
    ]
  }
];

export const excursions: Activity[] = [
  {
    id: 'swimming-pigs',
    name: 'Swimming Pigs Excursion',
    description: 'Visit the famous swimming pigs of Exuma on a full-day boat excursion.',
    image: '/images/swimming-pigs.jpg',
    category: 'Boat Tour',
    price: '$$$',
    rating: 4.9,
    location: 'Exuma Cays',
    duration: 'Full Day',
    difficulty: 'Easy',
  },
  {
    id: 'fishing-charter',
    name: 'Deep Sea Fishing Charter',
    description: 'Professional fishing charter for marlin, tuna, and other big game fish.',
    image: '/images/fishing-charter.jpg',
    category: 'Fishing',
    price: '$$$$',
    rating: 4.8,
    location: 'Nassau Waters',
    duration: 'Half Day',
    difficulty: 'Moderate',
  },
  {
    id: 'snorkeling-tour',
    name: 'Snorkeling Adventure',
    description: 'Explore vibrant coral reefs and marine life with professional guides.',
    image: '/images/snorkeling-tour.jpg',
    category: 'Water Sports',
    price: '$$',
    rating: 4.7,
    location: 'Various Locations',
    duration: 'Half Day',
    difficulty: 'Easy',
  },
  {
    id: 'island-hopping',
    name: 'Island Hopping Tour',
    description: 'Visit multiple islands including Rose Island and Green Turtle Cay.',
    image: '/images/island-hopping.jpg',
    category: 'Boat Tour',
    price: '$$$',
    rating: 4.6,
    location: 'Various Islands',
    duration: 'Full Day',
    difficulty: 'Easy',
  },
];

export const condoDetails = {
  name: 'Reef Condo at Atlantis Resort',
  description: 'Luxury 2-bedroom condo with stunning ocean views and resort amenities',
  bedrooms: 2,
  bathrooms: 2,
  maxGuests: 6,
  amenities: [
    'Ocean View Balcony',
    'Fully Equipped Kitchen',
    'Master Suite with King Bed',
    'Second Bedroom with Queen Bed',
    'Sofa Bed in Living Room',
    'In-Unit Laundry',
    'High-Speed WiFi',
    'Resort Pool Access',
    'Beach Access',
    'Fitness Center Access',
    'Spa Access',
    'Water Park Access',
  ],
  images: [
    '/images/condo-living-room.jpg',
    '/images/condo-master-bedroom.jpg',
    '/images/condo-kitchen.jpg',
    '/images/condo-balcony.jpg',
  ],
}; 