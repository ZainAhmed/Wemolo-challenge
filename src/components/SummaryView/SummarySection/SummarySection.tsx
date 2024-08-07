import FilterListIcon from "@mui/icons-material/FilterList";
import { ParkingLot } from "../../../types/ParkingLot";
import styles from "./SummarySection.module.scss";
import Carousel from "./Carousel/Carousel";
import SortingList from "./SortingList";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import IconButtonWithPopper from "./IconButtonWithPopper";
import { useCallback, useState } from "react";

type PropsType = {
  parkingLots: ParkingLot[];
  title: string;
  fallbackText: string;
};

function SummarySection({ parkingLots, title, fallbackText }: PropsType) {
  const [lots, setLots] = useState<ParkingLot[]>(parkingLots);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClickAway = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <div className={`${styles.headingContainer} ${styles.blueHeading}`}>
        <div className={styles.headingWrapper}>
          <h1>{title}</h1>
          <div className={styles.filterSortIconWrapper}>
            <IconButtonWithPopper
              parkingLots={lots}
              popperInputId="sort-list-popper"
              handleClickAway={handleClickAway}
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
              icon={
                <SwapVertIcon
                  sx={{
                    fontSize: 35,
                    color: parkingLots.length > 0 ? "#021f35" : "lightgrey",
                  }}
                />
              }
              listToOpen={
                <SortingList
                  handleClickAway={handleClickAway}
                  lots={lots}
                  setLots={setLots}
                />
              }
            />
            <IconButtonWithPopper
              parkingLots={lots}
              popperInputId="sort-list-popper"
              handleClickAway={handleClickAway}
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
              icon={
                <FilterListIcon
                  sx={{
                    fontSize: 35,
                    color: lots.length > 0 ? "#021f35" : "lightgrey",
                  }}
                />
              }
              listToOpen={
                <SortingList
                  handleClickAway={handleClickAway}
                  lots={lots}
                  setLots={setLots}
                />
              }
            />
          </div>
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
