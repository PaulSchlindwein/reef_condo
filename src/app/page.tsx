import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-condo.jpg"
            alt="Reef Condo at Atlantis Resort"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Reef Condo
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Experience luxury and adventure at our premium condo in Atlantis Resort. 
            Discover endless activities, world-class dining, and unforgettable excursions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/condo"
              className="bg-ocean-blue hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              View Condo Details
            </Link>
            <Link
              href="/activities"
              className="bg-white hover:bg-gray-100 text-ocean-blue px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Explore Activities
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Perfect Vacation Destination
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Atlantis Resort, our luxury condo offers the perfect blend 
              of comfort, convenience, and adventure for your dream vacation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-ocean-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Luxury Accommodations</h3>
              <p className="text-gray-600">
                2-bedroom condo with stunning ocean views, fully equipped kitchen, and resort amenities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-ocean-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Endless Activities</h3>
              <p className="text-gray-600">
                From water parks to fine dining, explore everything Atlantis Resort has to offer.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-ocean-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚤</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Amazing Excursions</h3>
              <p className="text-gray-600">
                Discover the Bahamas with guided tours, fishing charters, and island adventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Start Your Adventure
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/activities/on-resort"
              className="group block bg-gradient-to-br from-ocean-blue to-blue-600 rounded-lg p-6 text-white hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-4">🏊‍♂️</div>
              <h3 className="text-xl font-semibold mb-2">On-Resort Activities</h3>
              <p className="text-blue-100 mb-4">
                Water parks, dining, spa, and entertainment within Atlantis Resort.
              </p>
              <span className="text-blue-200 group-hover:text-white transition-colors">
                Explore →
              </span>
            </Link>

            <Link
              href="/activities/off-resort"
              className="group block bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-4">🏖️</div>
              <h3 className="text-xl font-semibold mb-2">Off-Resort Activities</h3>
              <p className="text-green-100 mb-4">
                Local attractions, beaches, and cultural experiences in Nassau.
              </p>
              <span className="text-green-200 group-hover:text-white transition-colors">
                Explore →
              </span>
            </Link>

            <Link
              href="/excursions"
              className="group block bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-4">🚤</div>
              <h3 className="text-xl font-semibold mb-2">Excursions</h3>
              <p className="text-purple-100 mb-4">
                Boat tours, fishing charters, and island adventures.
              </p>
              <span className="text-purple-200 group-hover:text-white transition-colors">
                Explore →
              </span>
            </Link>

            <Link
              href="/gallery"
              className="group block bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg p-6 text-white hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-4">📸</div>
              <h3 className="text-xl font-semibold mb-2">Photo Gallery</h3>
              <p className="text-pink-100 mb-4">
                Browse photos of the condo, resort, and surrounding areas.
              </p>
              <span className="text-pink-200 group-hover:text-white transition-colors">
                Explore →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-ocean-blue">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Your Dream Vacation?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today to reserve your stay at our luxury condo in Atlantis Resort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-ocean-blue px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Us
            </Link>
            <a
              href="https://www.atlantisbahamas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white hover:bg-white hover:text-ocean-blue text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Visit Atlantis Resort
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 