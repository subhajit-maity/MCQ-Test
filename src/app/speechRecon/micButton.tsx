import { useState } from "react";

interface MicButtonProps {
  onStartListening: () => void;
  onStopListening: () => void;
}

const MicButton = ({ onStartListening, onStopListening }: MicButtonProps) => {
  const [isListening, setIsListening] = useState(false);

  const handleClick = () => {
    if (isListening) {
      onStopListening();
    } else {
      onStartListening();
    }
    setIsListening(!isListening);
  };

  return (
    <button
      onClick={handleClick}
      className={`p-4 rounded-full w-24 h-24 ${
        isListening ? "bg-red-500" : "bg-blue-500"
      } text-white`}
    >
      <img
        className="rounded-full"
        src={
          "https://cdn0.iconfinder.com/data/icons/music-and-media-player-ui-s94/96/Music_Icon_Pack_-_Outline_ab_microphone-512.png"
        }
      />
    </button>
  );
};

export default MicButton;
