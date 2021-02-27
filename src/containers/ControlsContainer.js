import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Controls from '../components/Controls/Controls';
import { videosSelector } from '../redux/entities/videos/selectors';
import { pause, play, setBrightness, setContrast, setCurrentVideo, setVolume } from '../redux/player/playerSlice';
import { isVideoPlaying, playerBrightnessSelector, playerContrastSelector, playerVolumeSelector } from '../redux/player/selectors';

const ControlsContainer = () => {

  const videos = useSelector(videosSelector);
  const isPlaying = useSelector(isVideoPlaying);
  const volume = useSelector(playerVolumeSelector);
  const brightness = useSelector(playerBrightnessSelector);
  const contrast = useSelector(playerContrastSelector);
  
  const dispatch = useDispatch();
  const playVideo = () => dispatch(play());
  const pauseVideo = () => dispatch(pause());
  const selectVideo = (video) => {
    window.scrollTo(0, 0);
    dispatch(setCurrentVideo(video))
  };
  const changeVolume = (_, newValue) => dispatch(setVolume(newValue / 100));
  const changeBrightness = (_, newValue) => dispatch(setBrightness(newValue / 100));
  const changeContrast = (_, newValue) => dispatch(setContrast(newValue / 100));

  return (
    <Controls
      volume={volume * 100}
      videos={videos}
      play={playVideo}
      pause={pauseVideo}
      onVolumeChange={changeVolume}
      isPlaying={isPlaying}
      onVideoClick={selectVideo} 
      brightness={brightness * 100}
      onBrightnessChange={changeBrightness}
      contrast={contrast * 100}
      onContrastChange={changeContrast}
    />
  )
}

export default ControlsContainer;