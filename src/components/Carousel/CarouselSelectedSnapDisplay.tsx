import styles from "./CarouselSelectedSnapDisplay.module.scss";

type PropsType = {
  selectedSnap: number;
  snapCount: number;
};

export const SelectedSnapDisplay = ({ selectedSnap, snapCount }: PropsType) => {
  return (
    <div className={styles.emblaSelectedSnapDisplay}>
      {selectedSnap + 1} / {snapCount}
    </div>
  );
};
