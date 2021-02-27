import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import Player from "../components/Player/Player";
import { isFetchingVideosSelector } from "../redux/entities/videos/selectors";
import { fetchVideos } from "../redux/entities/videos/videosSlice";

const GeneralContainer = () => {

  const dispatch = useDispatch();
  const isFetching = useSelector(isFetchingVideosSelector);

  useEffect(() => dispatch(fetchVideos()), []);

  if (isFetching) {
    return <LoadingSpinner />
  }

  return <Player />;

}

export default GeneralContainer;