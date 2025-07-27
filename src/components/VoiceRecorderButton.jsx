import React, { useState, useRef } from "react";

const VoiceRecorderButton = () => {
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef(null);

  const handleVoiceRecording = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Your browser does not support Speech Recognition.');
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!recognitionRef.current) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log("You said:", transcript);
        alert(`You said: ${transcript}`);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error", event.error);
      };

      recognitionRef.current = recognition;
    }

    if (isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
    } else {
      recognitionRef.current.start();
      setIsRecording(true);
    }
  };

  return (
    <div className="mb-6">
      <button
        type="button"
        onClick={handleVoiceRecording}
        className={`flex items-center gap-2 w-full border ${
          isRecording ? 'border-red-500 text-red-600' : 'border-gray-300'
        } rounded-md p-3 mb-4`}
      >
        🎤 {isRecording ? 'Recording...' : 'Or record with your voice'}
      </button>
    </div>
  );
};

export default VoiceRecorderButton;
