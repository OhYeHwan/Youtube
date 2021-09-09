import React, { useEffect, useState } from "react";
import VideoList from "./components/VideoList/VideoList";

type requestOptions = {
  method: string;
  redirect: RequestRedirect;
};

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions: requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDSwQBgMmzhWv_yMecMsgui6GaaYvFZSJE",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  // 컴포넌트가 업데이트 될 때마다 통신하는 것은 좋지 않기 때문에
  // [] 빈 배열을 넣어준다. -> 마운트가 되었을때만 호출
  // [] 안에 값을 넣으면 넣은 값만 바뀔때마다 호출
  // 없으면 스테이트, 프롭스 업데이트 될때마다 호출

  return <VideoList videos={videos} />;
};

export default App;
