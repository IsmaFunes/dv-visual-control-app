import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Display.module.css';

const Display = ({
  video,
  isPlaying,
  volume,
  onVideoChanged,
  brightness,
  contrast
}) => {

  const videoRef = useRef(null);
  const sourceRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    videoRef.current.volume = volume;
  }, [volume])

  useEffect(() => {
    if (video?.source && videoRef.current && sourceRef.current) {
      videoRef.current.pause();
      sourceRef.current.src = video.source;
      videoRef.current.load();
      videoRef.current.play();
      onVideoChanged();
    }
  }, [video]);

  return (
    <div className={styles.root}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        style={{
          filter: `brightness(${brightness}) contrast(${contrast})`,
        }}
        poster="https://m.media-amazon.com/images/I/11382C6KyhL.jpg"
        ref={videoRef}
      >
        {video?.source && <source ref={sourceRef} src={video.source} type="video/mp4" />}
      </video>
      <h2>{video?.title}</h2>
      <p>{video?.description}</p>
    </div>
  )
}


Display.propTypes = {
  video: PropTypes.shape({
    source: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired,
  onVideoChanged: PropTypes.func.isRequired,
  brightness: PropTypes.number.isRequired,
  contrast: PropTypes.number.isRequired
}

export default Display;