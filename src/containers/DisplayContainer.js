import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Display from '../components/Display/Display';
import { play } from '../redux/player/playerSlice';
import { currentVideoSelector, isVideoPlaying, playerBrightnessSelector, playerContrastSelector, playerVolumeSelector } from '../redux/player/selectors';

const DisplayContainer = () => {

  const dispatch = useDispatch();

  const isPlaying = useSelector(isVideoPlaying);
  const currentVideo = useSelector(currentVideoSelector);
  const volume = useSelector(playerVolumeSelector);
  const brightness = useSelector(playerBrightnessSelector);
  const contrast = useSelector(playerContrastSelector);

  const setPlaying = () => dispatch(play());

  return <Display
    volume={volume}
    isPlaying={isPlaying}
    video={currentVideo}
    onVideoChanged={setPlaying}
    brightness={brightness}
    contrast={contrast}
  />;
}

export default DisplayContainer;