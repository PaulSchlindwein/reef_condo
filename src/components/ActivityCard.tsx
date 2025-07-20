import Image from 'next/image';
import { Activity } from '@/data/activities';

interface ActivityCardProps {
  activity: Activity;
  showDetails?: boolean;
}

export default function ActivityCard({ activity, showDetails = false }: ActivityCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={activity.image}
          alt={activity.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {activity.rating && (
          <div className="absolute top-2 right-2 bg-white bg-opacity-90 rounded-full px-2 py-1 text-sm font-semibold text-ocean-blue">
            ⭐ {activity.rating}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{activity.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{activity.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {activity.category && (
            <span className="bg-ocean-blue text-white text-xs px-2 py-1 rounded-full">
              {activity.category}
            </span>
          )}
          {activity.price && (
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              {activity.price}
            </span>
          )}
          {activity.distance && (
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {activity.distance}
            </span>
          )}
        </div>

        {showDetails && (
          <div className="space-y-2 text-sm text-gray-600">
            {activity.cuisine && (
              <div className="flex justify-between">
                <span className="font-medium">Cuisine:</span>
                <span>{activity.cuisine}</span>
              </div>
            )}
            {activity.type && (
              <div className="flex justify-between">
                <span className="font-medium">Type:</span>
                <span>{activity.type}</span>
              </div>
            )}
            {activity.location && (
              <div className="flex justify-between">
                <span className="font-medium">Location:</span>
                <span>{activity.location}</span>
              </div>
            )}
            {activity.duration && (
              <div className="flex justify-between">
                <span className="font-medium">Duration:</span>
                <span>{activity.duration}</span>
              </div>
            )}
            {activity.difficulty && (
              <div className="flex justify-between">
                <span className="font-medium">Difficulty:</span>
                <span>{activity.difficulty}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 