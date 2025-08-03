import EmpathyWall from '../../components/Employee/EmpathyWall';
import DigitalStories from '../../components/Employee/DigitalStories';

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