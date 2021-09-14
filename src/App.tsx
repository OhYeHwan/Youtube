import React, { useEffect, useState } from "react";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import VideoList from "./components/VideoList/VideoList";
import styles from "./app.module.css";
import VideoDetail from "./components/VideoDetail/VideoDetail";

type youtubeProps = {
  youtube: {
    mostPopular: () => Promise<any>;
    search: (query: string) => Promise<any>;
  };
};

type Video = {
  etag: string;
  id: string;
  kind: string;
  snippet: any;
  previousState: null;
};

const App = ({ youtube }: youtubeProps) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const selectVideo = (video: Video) => {
    setSelectedVideo(video);
  };

  const search = (query: string) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);
  // 컴포넌트가 업데이트 될 때마다 통신하는 것은 좋지 않기 때문에
  // [] 빈 배열을 넣어준다. -> 마운트가 되었을때만 호출
  // [] 안에 값을 넣으면 넣은 값만 바뀔때마다 호출
  // 없으면 스테이트, 프롭스 업데이트 될때마다 호출

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
};

export default App;
