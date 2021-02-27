import React from "react";
import { CircularProgress } from "@material-ui/core";
import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => (
  <div className={styles.root}>
    <CircularProgress />
  </div>
);

export default LoadingSpinner;
