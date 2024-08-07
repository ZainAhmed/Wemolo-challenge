import { ParkingLot } from "../../../types/ParkingLot";
import styles from "./SummarySection.module.scss";
import Carousel from "./Carousel/Carousel";
import { useState } from "react";
import SortFilterButtons from "./SortFilterButtons";

type PropsType = {
  parkingLots: ParkingLot[];
  title: string;
  fallbackText: string;
};

function SummarySection({ parkingLots, title, fallbackText }: PropsType) {
  const [lots, setLots] = useState<ParkingLot[]>(parkingLots);

  return (
    <>
      <div className={`${styles.headingContainer} ${styles.blueHeading}`}>
        <div className={styles.headingWrapper}>
          <h1>{title}</h1>
          <SortFilterButtons lots={lots} setLots={setLots} />
        </div>
      </div>
      {lots.length > 0 ? (
        <Carousel slides={lots} />
      ) : (
        <h2 className={`${styles.heading} ${styles.whiteHeading}`}>
          {fallbackText}
        </h2>
      )}
    </>
  );
}

export default SummarySection;
