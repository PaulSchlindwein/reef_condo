'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  // Condo Images
  { id: 'condo-1', src: '/images/condo-living-room.jpg', alt: 'Living Room', category: 'Condo' },
  { id: 'condo-2', src: '/images/condo-master-bedroom.jpg', alt: 'Master Bedroom', category: 'Condo' },
  { id: 'condo-3', src: '/images/condo-kitchen.jpg', alt: 'Kitchen', category: 'Condo' },
  { id: 'condo-4', src: '/images/condo-balcony.jpg', alt: 'Ocean View Balcony', category: 'Condo' },
  
  // Resort Images
  { id: 'resort-1', src: '/images/aquaventure.jpg', alt: 'Aquaventure Water Park', category: 'Resort' },
  { id: 'resort-2', src: '/images/marine-habitat.jpg', alt: 'Marine Habitat', category: 'Resort' },
  { id: 'resort-3', src: '/images/mandara-spa.jpg', alt: 'Mandara Spa', category: 'Resort' },
  { id: 'resort-4', src: '/images/nobu.jpg', alt: 'Nobu Restaurant', category: 'Resort' },
  { id: 'resort-5', src: '/images/aqualounge.jpg', alt: 'Aqualounge Bar', category: 'Resort' },
  
  // Local Images
  { id: 'local-1', src: '/images/cable-beach.jpg', alt: 'Cable Beach', category: 'Local' },
  { id: 'local-2', src: '/images/queens-staircase.jpg', alt: 'Queen\'s Staircase', category: 'Local' },
  { id: 'local-3', src: '/images/fish-fry.jpg', alt: 'Arawak Cay Fish Fry', category: 'Local' },
  
  // Excursion Images
  { id: 'excursion-1', src: '/images/swimming-pigs.jpg', alt: 'Swimming Pigs', category: 'Excursions' },
  { id: 'excursion-2', src: '/images/fishing-charter.jpg', alt: 'Deep Sea Fishing', category: 'Excursions' },
  { id: 'excursion-3', src: '/images/snorkeling-tour.jpg', alt: 'Snorkeling Adventure', category: 'Excursions' },
  { id: 'excursion-4', src: '/images/island-hopping.jpg', alt: 'Island Hopping', category: 'Excursions' },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = ['all', ...Array.from(new Set(galleryImages.map(img => img.category)))];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-pink-500 to-pink-600">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Photo Gallery
            </h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Browse through stunning photos of our condo, resort amenities, and local attractions.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  selectedCategory === category 
                    ? 'bg-pink-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category === 'all' ? 'All Photos' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-semibold">{image.alt}</p>
                    <p className="text-sm text-gray-200">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No photos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-300 z-10"
            >
              ×
            </button>
            <div className="relative h-96 md:h-[600px] w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
              />
            </div>
            <div className="bg-white p-4 rounded-b-lg">
              <h3 className="text-lg font-semibold text-gray-900">{selectedImage.alt}</h3>
              <p className="text-gray-600">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
} 