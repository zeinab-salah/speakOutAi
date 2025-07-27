// src/components/ReportForm.jsx
import VoiceRecorderButton from '../components/VoiceRecorderButton';

const ReportForm = () => {
   return (
    <div className="bg-white p-6 rounded-lg shadow-md ">
      <h2 className="text-2xl font-bold mb-2">Report an Incident</h2>
      <p className="text-gray-600 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eiusmod quam utraus...
      </p>

      <form className="">
        <div className="mb-6">
           <textarea 
            rows="4" 
           className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
           placeholder="Write your thoughts here..."></textarea>
        </div>
         <div className="mb-6">
          <input
            type="date"
            className="w-full border border-gray-300 rounded-md p-3 mb-4"
          />
         </div>
        <div className="mb-6">
              {/* <button className="flex items-center gap-2 w-full border border-gray-300 rounded-md p-3 mb-4">
                🎤 or record with your voice
              </button> */}
              <VoiceRecorderButton/>
        </div>
         <div className="mb-6">
                    <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition">
            Submit
          </button>
         </div>

      </form>

      
    </div>
  );
}


export default ReportForm;
