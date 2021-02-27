import { createSelector } from "@reduxjs/toolkit";

const getPlayerState = state => state.player;

export const isVideoPlaying = createSelector(
  getPlayerState,
  state => state.playing
)

export const playerVolumeSelector = createSelector(
  getPlayerState,
  state => state.volume
)

export const playerBrightnessSelector = createSelector(
  getPlayerState,
  state => state.brightness
)

export const playerContrastSelector = createSelector(
  getPlayerState,
  state => state.contrast
)

export const currentVideoSelector = createSelector(
  getPlayerState,
  state => state.currentVideo
)