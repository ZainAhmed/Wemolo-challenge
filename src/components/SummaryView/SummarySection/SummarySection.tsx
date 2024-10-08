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
          <h1 data-test-summaryHeading={title}>{title}</h1>
          <SortFilterButtons
            lots={lots}
            setLots={setLots}
            unfilteredParkingLots={parkingLots}
          />
        </div>
      </div>
      {lots.length > 0 ? (
        <div data-test-carousel={title}>
          <Carousel slides={lots} />
        </div>
      ) : (
        <div className={styles.fallbackTextContainer}>
          <h2 className={`${styles.heading} ${styles.whiteHeading}`}>
            {fallbackText}
          </h2>
        </div>
      )}
    </>
  );
}

export default SummarySection;
