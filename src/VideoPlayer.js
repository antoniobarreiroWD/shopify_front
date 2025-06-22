import React from "react";
import {
  BuildingStorefrontIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/solid";

const VideoPlayer = ({ toggleProductList, toggleLiveChat }) => {
  return (
    <div className="p-1 rounded-lg">
      
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <iframe
          src={`https://player.twitch.tv/?channel=${process.env.REACT_APP_TWITCH_CHANNEL}&parent=${process.env.REACT_APP_TWITCH_PARENT}`}
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          allowFullScreen
          title="Twitch Live Stream"
        ></iframe>

       
        <button
          className="absolute lg:bottom-36 bottom-4 right-4 bg-blue-600 bg-opacity-70 text-white p-2 rounded-full flex items-center justify-center hover:bg-opacity-90 transition duration-300"
          onClick={toggleProductList}
          style={{
            width: "3vw",
            height: "3vw",
            minWidth: "40px",
            minHeight: "40px",
          }}
        >
          <BuildingStorefrontIcon className="w-full h-full text-white" />
        </button>

        
        <button
          className="absolute lg:bottom-20 bottom-16 right-4 bg-blue-600 bg-opacity-70 text-white p-2 rounded-full flex items-center justify-center hover:bg-opacity-90 transition duration-300"
          onClick={toggleLiveChat}
          style={{
            width: "3vw",
            height: "3vw",
            minWidth: "40px",
            minHeight: "40px",
          }}
        >
          <ChatBubbleLeftIcon className="w-full h-full text-white" />
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;

