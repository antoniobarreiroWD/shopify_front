import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-light-blue">Live Video Stream</h2>
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <iframe
          src="https://player.twitch.tv/?channel=itsmoura&parent=localhost"
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          allowFullScreen
          title="Twitch Live Stream"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
