'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ActivityCard from '@/components/ActivityCard';
import { excursions } from '@/data/activities';

export default function ExcursionsPage() {
  const [sortBy, setSortBy] = useState<string>('name');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterPrice, setFilterPrice] = useState<string>('all');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');

  const sortedExcursions = [...excursions].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'price':
        const priceOrder = { '$': 1, '$$': 2, '$$$': 3, '$$$$': 4 };
        return (priceOrder[a.price as keyof typeof priceOrder] || 0) - (priceOrder[b.price as keyof typeof priceOrder] || 0);
      case 'duration':
        const durationOrder = { 'Half Day': 1, 'Full Day': 2 };
        return (durationOrder[a.duration as keyof typeof durationOrder] || 0) - (durationOrder[b.duration as keyof typeof durationOrder] || 0);
      default:
        return 0;
    }
  });

  const filteredExcursions = sortedExcursions.filter(excursion => {
    if (filterCategory !== 'all' && excursion.category !== filterCategory) return false;
    if (filterPrice !== 'all' && excursion.price !== filterPrice) return false;
    if (filterDifficulty !== 'all' && excursion.difficulty !== filterDifficulty) return false;
    return true;
  });

  const uniqueCategories = Array.from(new Set(excursions.map(e => e.category)));
  const uniquePrices = Array.from(new Set(excursions.map(e => e.price)));
  const uniqueDifficulties = Array.from(new Set(excursions.map(e => e.difficulty).filter(Boolean)));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-purple-500 to-purple-600">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Excursions & Adventures
            </h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Embark on unforgettable adventures - from swimming with pigs to deep sea fishing.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option value="name">Name</option>
                <option value="rating">Rating</option>
                <option value="price">Price</option>
                <option value="duration">Duration</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category:</label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option value="all">All Categories</option>
                {uniqueCategories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price:</label>
              <select
                value={filterPrice}
                onChange={(e) => setFilterPrice(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option value="all">All Prices</option>
                {uniquePrices.map((price) => (
                  <option key={price} value={price}>{price}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty:</label>
              <select
                value={filterDifficulty}
                onChange={(e) => setFilterDifficulty(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option value="all">All Difficulties</option>
                {uniqueDifficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>{difficulty}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Excursions Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Available Excursions
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our curated selection of the best excursions in the Bahamas.
            </p>
          </div>

          {filteredExcursions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExcursions.map((excursion) => (
                <ActivityCard key={excursion.id} activity={excursion} showDetails={true} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No excursions found with the selected filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="py-16 px-4 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Your Adventure?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Contact us to reserve your spot on any of these amazing excursions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@reefcondo.com?subject=Excursion Booking"
              className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Book Excursion
            </a>
            <a
              href="tel:+1-242-363-3000"
              className="border-2 border-white hover:bg-white hover:text-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Call to Book
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 