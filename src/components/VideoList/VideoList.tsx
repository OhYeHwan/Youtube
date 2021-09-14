import VideoItem from "../VideoItem/VideoItem";
import styles from "./VideoList.module.css";

type Video = {
  etag: string;
  id: string;
  kind: string;
  snippet: any;
  previousState: null;
};

type VideoListProps = {
  videos: Array<Video>;
  onVideoClick: (video: Video) => void;
  display: any;
};

const VideoList = ({ videos, onVideoClick, display }: VideoListProps) => (
  <ul className={styles.videos}>
    {videos.map((video) => (
      <VideoItem
        key={video.id}
        video={video}
        onVideoClick={onVideoClick}
        display={display}
      />
    ))}
  </ul>
);

export default VideoList;
