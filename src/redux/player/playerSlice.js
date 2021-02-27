const { createSlice } = require("@reduxjs/toolkit");

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    playing: false,
    volume: 1,
    brightness: 1,
    contrast: 1,
    currentVideo: {}
  },
  reducers: {
    play: (state) => {
      state.playing = true;
    },
    pause: (state) => {
      state.playing = false;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
    setBrightness: (state, action) => {
      state.brightness = action.payload;
    },
    setContrast: (state, action) => {
      state.contrast = action.payload;
    },
    setCurrentVideo: (state, action) => {
      state.currentVideo = action.payload;
    }
  }
});

export default playerSlice.reducer;
export const {
  play,
  pause,
  setVolume,
  setBrightness,
  setContrast,
  setCurrentVideo
} = playerSlice.actions;