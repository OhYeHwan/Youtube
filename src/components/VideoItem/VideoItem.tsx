import React from "react";
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
};

type VideoItemProps = {
  video: Video;
};

// deconstructing
const VideoItem = ({ video: { snippet } }: VideoItemProps) => (
  <li className={styles.container}>
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

export default VideoItem;
