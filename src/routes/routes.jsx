// src/routes/ApplicationRouter.jsx
import { Routes, Route } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Dashboard from '../pages/EmpathyAndDigital'; 
import Example from '../pages/ReportAndEmpathy';

const ApplicationRouter = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Dashboard />} /> 
        {/* <Route path="example" element={<Example />} /> */}

        {/* Add more routes here */}
        {/* <Route path="profile" element={<Profile />} /> */}
      </Route>
    </Routes>
  );
};

export default ApplicationRouter;
