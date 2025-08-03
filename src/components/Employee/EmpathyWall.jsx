import { Youtube ,MessageCircle } from 'lucide-react';

const EmpathyWall = () => {
  const posts = [
    { id: 1, time: '2 h ago', comments: 5 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Empathy Wall</h2>

      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.id} className="flex gap-4">
            {/* Left column: post content */}
            <div className="w-3/4 pb-2">
              <p className="font-medium">Lorem ipsum dolor sitamet, consectetur adipiscing elit.</p>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="text-sm text-gray-400 mt-1 flex justify-between items-center">
                <span>{post.time}</span>
                <span className="flex items-center gap-1 text-gray-500 text-sm">
                  {post.comments} <MessageCircle className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Right column: video box */}
            <div className="w-1/4">
              <div
              key={post.id}
               className="bg-gray-200 h-24 rounded flex items-center justify-center">
                <Youtube  className="w-6 h-6 text-gray-600" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmpathyWall;
