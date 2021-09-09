import React from "react";

type Video = {
  etag: string;
  id: string;
  kind: string;
  snippet: any;
};

type VideoItemProps = {
  video: Video;
};

const VideoItem = ({ video }: VideoItemProps) => <h1>{video.snippet.title}</h1>;

export default VideoItem;
