import React, { useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import axios from "axios";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectecVideo] = useState(null);

  const onTextSubmit = async (text) => {
    const response = await axios.get("http://localhost:1234/", {
      params: {
        q: text,
      },
    });

    setVideos(response.data.items);
    setSelectecVideo(response.data.items[0]);
  };

  const onVideoSelect = (video) => {
    setSelectecVideo(video);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTextSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
