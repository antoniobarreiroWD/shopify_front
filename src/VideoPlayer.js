import React from "react";
import {
  BuildingStorefrontIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/solid";

const VideoPlayer = ({ toggleProductList, toggleLiveChat }) => {
  return (
    <div className="p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-light-blue">
        Live Video Stream
      </h2>
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <iframe
          src="https://player.twitch.tv/?channel=itsmoura&parent=localhost"
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          allowFullScreen
          title="Twitch Live Stream"
        ></iframe>

       
        <button
          className="absolute bottom-36 right-4  text-white p-2 rounded-full flex items-center justify-center hover:bg-blue-500 transition duration-300"
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
          className="absolute bottom-20 right-4  text-white p-2 rounded-full flex items-center justify-center hover:bg-blue-500 transition duration-300"
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
