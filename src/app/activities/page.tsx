import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
            Explore Activities
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Discover everything Atlantis Resort and the Bahamas have to offer. Choose your adventure below.
          </p>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
          
          {/* On-Resort Activities */}
          <Link href="/activities/on-resort" className="group">
            <div className="relative h-full rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80 group-hover:from-blue-600/90 group-hover:to-purple-600/90 transition-all duration-300">
                {/* Placeholder for background image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-center items-center text-center p-8">
                <div className="text-6xl mb-6">🏖️</div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  On-Resort Activities
                </h2>
                <p className="text-white/90 text-lg leading-relaxed max-w-xs">
                  World-class dining, thrilling water parks, and luxury amenities within Atlantis Resort
                </p>
                <div className="mt-6 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold group-hover:bg-white/30 transition-all duration-300">
                  Explore Resort Activities →
                </div>
              </div>
            </div>
          </Link>

          {/* Off-Resort Activities */}
          <Link href="/activities/off-resort" className="group">
            <div className="relative h-full rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 to-teal-600/80 group-hover:from-green-600/90 group-hover:to-teal-600/90 transition-all duration-300">
                {/* Placeholder for background image */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-center items-center text-center p-8">
                <div className="text-6xl mb-6">🌴</div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Off-Resort Activities
                </h2>
                <p className="text-white/90 text-lg leading-relaxed max-w-xs">
                  Local culture, historic sites, and authentic Bahamian experiences beyond the resort
                </p>
                <div className="mt-6 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold group-hover:bg-white/30 transition-all duration-300">
                  Explore Local Activities →
                </div>
              </div>
            </div>
          </Link>

          {/* Excursions */}
          <Link href="/excursions" className="group">
            <div className="relative h-full rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/80 to-red-600/80 group-hover:from-orange-600/90 group-hover:to-red-600/90 transition-all duration-300">
                {/* Placeholder for background image */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-center items-center text-center p-8">
                <div className="text-6xl mb-6">🚤</div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Excursions
                </h2>
                <p className="text-white/90 text-lg leading-relaxed max-w-xs">
                  Guided adventures including fishing charters, snorkeling tours, and island hopping
                </p>
                <div className="mt-6 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold group-hover:bg-white/30 transition-all duration-300">
                  Explore Excursions →
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Need Help Choosing?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our concierge team can help you plan the perfect itinerary based on your interests and preferences.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200"
          >
            Contact Concierge
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
} 