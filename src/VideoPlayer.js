import React from "react";
import {
  BuildingStorefrontIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/solid";

const VideoPlayer = ({ toggleProductList, toggleLiveChat }) => {
  return (
    <div className="max-w-7xl mx-auto p-2 sm:p-4">
      <div
        className="relative w-full rounded-lg overflow-hidden"
        style={{ paddingTop: "56.25%" }}
      >
        <iframe
          src={`https://player.twitch.tv/?channel=${process.env.REACT_APP_TWITCH_CHANNEL}&parent=${process.env.REACT_APP_TWITCH_PARENT}`}
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          title="Live Stream"
        ></iframe>

        <div className="absolute bottom-4 right-4 flex flex-col space-y-4">
          <button
            className="bg-blue-600 bg-opacity-70 text-white p-2 rounded-full flex items-center justify-center hover:bg-opacity-90 transition duration-300 transform hover:scale-105"
            onClick={toggleProductList}
            style={{
              width: "clamp(40px, 3vw, 56px)",
              height: "clamp(40px, 3vw, 56px)",
            }}
          >
            <BuildingStorefrontIcon className="w-2/3 h-2/3 text-white" />
          </button>

          <button
            className="bg-blue-600 bg-opacity-70 text-white p-2 rounded-full flex items-center justify-center hover:bg-opacity-90 transition duration-300 transform hover:scale-105"
            onClick={toggleLiveChat}
            style={{
              width: "clamp(40px, 3vw, 56px)",
              height: "clamp(40px, 3vw, 56px)",
            }}
          >
            <ChatBubbleLeftIcon className="w-2/3 h-2/3 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

