const { createSelector } = require("@reduxjs/toolkit");

const getVideosState = state => state.entities.videos;

export const isFetchingVideosSelector = createSelector(
  getVideosState,
  state => state.isFetching
)

export const hasVideosErroredSelector = createSelector(
  getVideosState,
  state => state.error
)

export const videosSelector = createSelector(
  getVideosState,
  state => state.data || { categories: [] }
)
