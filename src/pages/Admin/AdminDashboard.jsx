import React from 'react';
import Card from '../../components/Admin/DashboardCard';
import Table from '../../components/Admin/AdminTable';

function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card count={8} label="Flagged Reports" />
        <Card count={15} label="Toxic Comments" />
        <Card count={42} label="Resolved" />
      </div>
      <Table />
    </div>
  );
}

export default AdminDashboard;
