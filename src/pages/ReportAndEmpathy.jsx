import ReportForm from '../components/ReportForm';
import EmpathyWall from '../components/EmpathyWall';
import Sidebar from '../components/Sidebar';

const ReportAndEmpathy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sidebar and ReportForm */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 p-4">
          <Sidebar />
        </div>

        {/* ReportForm */}
        <div className="w-full md:w-3/4 p-4">
          <ReportForm />
        </div>
      </div>

      {/* EmpathyWall */}
      <div className="p-4">
        <EmpathyWall />
      </div>
    </div>
  );
};

export default ReportAndEmpathy;
