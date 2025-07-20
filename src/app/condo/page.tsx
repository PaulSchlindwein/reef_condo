import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { condoDetails } from '@/data/activities';

export default function CondoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <Image
            src="/images/condo-hero.jpg"
            alt="Reef Condo Exterior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {condoDetails.name}
            </h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              {condoDetails.description}
            </p>
          </div>
        </div>
      </section>

      {/* Condo Details */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Condo Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Condo Features</h2>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-2xl mb-2">🛏️</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Bedrooms</h3>
                  <p className="text-2xl font-bold text-ocean-blue">{condoDetails.bedrooms}</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-2xl mb-2">🚿</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Bathrooms</h3>
                  <p className="text-2xl font-bold text-ocean-blue">{condoDetails.bathrooms}</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-2xl mb-2">👥</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Max Guests</h3>
                  <p className="text-2xl font-bold text-ocean-blue">{condoDetails.maxGuests}</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-2xl mb-2">🌊</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Ocean View</h3>
                  <p className="text-lg font-semibold text-ocean-blue">Yes</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {condoDetails.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Condo Images */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
              <div className="grid grid-cols-2 gap-4">
                {condoDetails.images.map((image, index) => (
                  <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`Condo interior ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resort Map Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Resort Location</h2>
            <p className="text-xl text-gray-600">
              Our condo is located in the heart of Atlantis Resort, providing easy access to all amenities.
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-lg p-8 text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Atlantis Paradise Island</h3>
            <p className="text-gray-600 mb-4">
              One Casino Drive, Paradise Island, Bahamas
            </p>
            <p className="text-gray-600">
              Interactive resort map coming soon
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-ocean-blue">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Book your stay at our premium condo and enjoy all the amenities of Atlantis Resort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.atlantisbahamas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-ocean-blue px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Book Through Atlantis
            </a>
            <a
              href="mailto:info@reefcondo.com"
              className="border-2 border-white hover:bg-white hover:text-ocean-blue text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Owner
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 