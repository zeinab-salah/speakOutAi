import React from 'react';

function DashboardCard({ count, label }) {
  return (
    <div className="bg-white shadow rounded-lg p-6 text-center">
      <p className="text-2xl font-bold">{count}</p>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}

export default DashboardCard;
