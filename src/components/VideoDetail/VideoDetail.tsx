import React from "react";
import styles from "./VideoDetail.module.css";

type Video = {
  etag: string;
  id: string;
  kind: string;
  snippet: any;
  previousState: null;
};

type VideoDetailProps = {
  video: Video | null;
};

const VideoDetail = ({ video }: VideoDetailProps) => (
  <section className={styles.detail}>
    {video && (
      <>
        <iframe
          className={styles.video}
          title={video.snippet.title}
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <h2>{video.snippet.title}</h2>
        <h3>{video.snippet.channelTitle}</h3>
        <pre className={styles.description}>{video.snippet.description}</pre>
      </>
    )}
  </section>
);

export default VideoDetail;
