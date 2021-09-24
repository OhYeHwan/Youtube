import { memo } from "react";
import styles from "./VideoItem.module.css";

type Snippet = {
  categoryId: string;
  channelId: string;
  channelTitle: string;
  defaultAudioLanguage: string;
  description: string;
  liveBroadcastContent: string;
  localized: any;
  publishedAt: string;
  tags: Array<any>;
  thumbnails: any;
  title: string;
};

type Video = {
  etag: string;
  id: string;
  kind: string;
  snippet: Snippet;
  previousState: null;
};

type VideoItemProps = {
  video: Video;
  onVideoClick: (video: Video) => void;
  display: any;
};

// deconstructing
const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, display }: VideoItemProps) => {
    const displayType = display === "list" ? styles.list : styles.grid;
    return (
      <li
        className={`${styles.container} ${displayType}`}
        onClick={() => onVideoClick(video)}
      >
        <div className={styles.video}>
          <img
            className={styles.thumbnail}
            src={snippet.thumbnails.medium.url}
            alt="viedo thumbnail"
          />
          <div className={styles.metadata}>
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    );
  }
);

export default VideoItem;
