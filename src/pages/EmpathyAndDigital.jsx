import ReportForm from '../components/ReportForm';
import EmpathyWall from '../components/EmpathyWall';
import DigitalStories from '../components/DigitalStories';

const EmpathyAndDigital = () => {
  return (
    <div >
      <div >
        <div className='my-3'>
          <EmpathyWall />
        </div>
        <div className='mt-3'>
            <DigitalStories />
        </div>

      </div>
    </div>
  );
};

export default EmpathyAndDigital;