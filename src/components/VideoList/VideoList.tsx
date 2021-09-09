import React from "react";
import VideoItem from "../VideoItem/VideoItem";
import styles from "./VideoList.module.css";

type Video = {
  etag: string;
  id: string;
  kind: string;
  snippet: any;
};

type VideoListProps = {
  videos: Array<Video>;
};

const VideoList = ({ videos }: VideoListProps) => (
  <ul className={styles.videos}>
    {videos.map((video) => (
      <VideoItem key={video.id} video={video} />
    ))}
  </ul>
);

export default VideoList;
