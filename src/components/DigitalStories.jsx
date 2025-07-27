import { Youtube  } from 'lucide-react';

const DigitalStories = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Digital Stories</h2>
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map(i => (
         <div key={i} className="flex flex-col items-center">
            <div className="bg-gray-200 h-24 w-full rounded flex items-center justify-center">
              <Youtube  className="w-6 h-6 text-gray-600" />
            </div>
            <span className="mt-1 text-sm text-gray-600">Video</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalStories;