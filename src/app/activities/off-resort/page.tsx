'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ActivityCard from '@/components/ActivityCard';
import { offResortCategories, Category } from '@/data/activities';

export default function OffResortActivitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('name');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterDistance, setFilterDistance] = useState<string>('all');

  const currentCategory = selectedCategory 
    ? offResortCategories.find(cat => cat.id === selectedCategory)
    : null;

  const activities = currentCategory?.activities || [];

  const sortedActivities = [...activities].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'price':
        const priceOrder = { '$': 1, '$$': 2, '$$$': 3, '$$$$': 4 };
        return (priceOrder[a.price as keyof typeof priceOrder] || 0) - (priceOrder[b.price as keyof typeof priceOrder] || 0);
      case 'distance':
        const getDistance = (dist: string) => parseFloat(dist.replace(' miles', ''));
        return getDistance(a.distance || '999') - getDistance(b.distance || '999');
      default:
        return 0;
    }
  });

  const filteredActivities = sortedActivities.filter(activity => {
    if (filterType !== 'all' && activity.type !== filterType) return false;
    if (filterDistance !== 'all') {
      const distance = parseFloat(activity.distance?.replace(' miles', '') || '999');
      switch (filterDistance) {
        case 'close':
          return distance <= 2;
        case 'medium':
          return distance > 2 && distance <= 5;
        case 'far':
          return distance > 5;
        default:
          return true;
      }
    }
    return true;
  });

  const uniqueTypes = Array.from(new Set(activities.map(a => a.type).filter(Boolean)));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-green-500 to-green-600">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Off-Resort Activities
            </h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Explore Nassau and the surrounding areas - from local cuisine to historic landmarks.
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                !selectedCategory 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Categories
            </button>
            {offResortCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  selectedCategory === category.id 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {!selectedCategory ? (
            // Show all categories
            <div className="space-y-12">
              {offResortCategories.map((category) => (
                <div key={category.id}>
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-3">{category.icon}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {category.activities.slice(0, 3).map((activity) => (
                      <ActivityCard key={activity.id} activity={activity} />
                    ))}
                  </div>
                  
                  {category.activities.length > 3 && (
                    <div className="text-center">
                      <button
                        onClick={() => setSelectedCategory(category.id)}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
                      >
                        View All {category.activities.length} {category.name}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            // Show selected category with filters
            <div>
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{currentCategory?.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{currentCategory?.name}</h2>
                  <p className="text-gray-600">{currentCategory?.description}</p>
                </div>
              </div>

              {/* Filters */}
              <div className="bg-white p-4 rounded-lg shadow-md mb-8">
                <div className="flex flex-wrap gap-4 items-center">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Sort by:</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border border-gray-300 rounded-md px-3 py-1 text-sm"
                    >
                      <option value="name">Name</option>
                      <option value="rating">Rating</option>
                      <option value="price">Price</option>
                      <option value="distance">Distance</option>
                    </select>
                  </div>
                  
                  {uniqueTypes.length > 0 && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Filter by type:</label>
                      <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-1 text-sm"
                      >
                        <option value="all">All Types</option>
                        {uniqueTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Filter by distance:</label>
                    <select
                      value={filterDistance}
                      onChange={(e) => setFilterDistance(e.target.value)}
                      className="border border-gray-300 rounded-md px-3 py-1 text-sm"
                    >
                      <option value="all">All Distances</option>
                      <option value="close">Close (≤2 miles)</option>
                      <option value="medium">Medium (2-5 miles)</option>
                      <option value="far">Far (&gt;5 miles)</option>
                    </select>
                  </div>
                  
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="text-green-600 hover:text-green-800 font-medium"
                  >
                    ← Back to All Categories
                  </button>
                </div>
              </div>

              {/* Activities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredActivities.map((activity) => (
                  <ActivityCard key={activity.id} activity={activity} showDetails={true} />
                ))}
              </div>

              {filteredActivities.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No activities found with the selected filters.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
} 