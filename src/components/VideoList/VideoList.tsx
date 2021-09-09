import React from "react";
import VideoItem from "../VideoItem/VideoItem";

type Video = {
  etag: string;
  id: string;
  kind: string;
  snippet: object;
};

type VideoListProps = {
  videos: Array<Video>;
};

const VideoList = ({ videos }: VideoListProps) => (
  <ul>
    {videos.map((video) => (
      <VideoItem key={video.id} video={video} />
    ))}
  </ul>
);

export default VideoList;
