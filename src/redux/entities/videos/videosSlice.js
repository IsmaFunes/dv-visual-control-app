import getVideos from "../../../services/videos";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchVideos = createAsyncThunk(
  'videos/fetchVideos',
  getVideos
);

const videosSlice = createSlice({
  name: 'videos',
  initialState: {
    isFetching: false,
    error: false,
    data: {
      categories: []
    }
  },
  reducers: {},
  extraReducers: {
    [fetchVideos.pending]: (state) => {
      state.isFetching = true;
    },
    [fetchVideos.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.data = action.payload;
    },
    [fetchVideos.rejected]: (state) => {
      state.error = true;
      state.isFetching = false;
    }
  }
});

export default videosSlice.reducer;