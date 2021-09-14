import React, { useEffect, useState } from "react";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import VideoList from "./components/VideoList/VideoList";
import styles from "./app.module.css";

type youtubeProps = {
  youtube: {
    mostPopular: () => Promise<any>;
    search: (query: string) => Promise<any>;
  };
};

const App = ({ youtube }: youtubeProps) => {
  const [videos, setVideos] = useState([]);
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
      <VideoList videos={videos} />
    </div>
  );
};

export default App;
