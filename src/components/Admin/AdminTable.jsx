import React from 'react';

const alerts = [
  { user: "User1285", severity: "High", type: "Toxic Comment", date: "2025-08-01" },
  { user: "User3649", severity: "Medium", type: "High-Severity Report", date: "2025-07-30" },
  { user: "User2510", severity: "Medium", type: "Toxic Comment", date: "2025-07-28" },
  { user: "User4178", severity: "High", type: "High-Severity Report", date: "2025-07-27" },
];

function AdminTable() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Alerts</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4">User</th>
              <th className="py-2 px-4">Severity</th>
              <th className="py-2 px-4">Alert Type</th>
              <th className="py-2 px-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{alert.user}</td>
                <td className="py-2 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium 
                    ${alert.severity === 'High' ? 'bg-red-100 text-red-800' :
                      alert.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-green-100 text-green-800'}`}>
                    {alert.severity}
                  </span>
                </td>
                <td className="py-2 px-4">{alert.type}</td>
                <td className="py-2 px-4">{alert.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-right">
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Review</button>
      </div>
    </div>
  );
}

export default AdminTable;
