import Sidebar from '../components/Employee/Sidebar';
import { Outlet } from "react-router-dom";
import ReportAndEmpathy from '../pages/Employee/ReportAndEmpathy';
import EmpathyAndDigital from '../pages/Employee/EmpathyAndDigital';

export default function HomeLayout() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* First Column */}
      <div className="w-full md:w-2/3 p-4 overflow-auto">
        <ReportAndEmpathy />
      </div>
        {/* <main className="flex-1 ml-0 md:ml-64 p-4">
          <Outlet />
        </main> */}
      {/* Second Column */}
      <div className="w-full md:w-1/3 p-4 overflow-auto">
        <EmpathyAndDigital />
      </div>
    </div>
  );
}
