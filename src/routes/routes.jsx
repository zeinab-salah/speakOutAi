// src/routes/ApplicationRouter.jsx
import { Routes, Route } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../pages/Employee/EmpathyAndDigital'; 
import AdminDashboard from '../pages/Admin/AdminDashboard';

const ApplicationRouter = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Dashboard />} /> 
        {/* <Route path="example" element={<Example />} /> */}

        {/* Add more routes here */}
        {/* <Route path="profile" element={<Profile />} /> */}
      </Route>

       {/* Admin routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        {/* Example: <Route path="settings" element={<AdminSettings />} /> */}
      </Route>
    </Routes>
  );
};

export default ApplicationRouter;
