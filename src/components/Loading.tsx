import { CircularProgress } from "@mui/material";
import styles from "./Loading.module.scss";

function Loading() {
  return (
    <div className={styles.loadingWrapper}>
      <CircularProgress />
    </div>
  );
}

export default Loading;
