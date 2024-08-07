import Carousel from "./Carousel/Carousel";
import { ParkingLot } from "../../types/ParkingLot";
import styles from "./SummaryView.module.scss";
import { IconButton } from "@mui/material";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import FilterListIcon from "@mui/icons-material/FilterList";
type PropsType = {
  goodParkingLots: ParkingLot[];
  badParkingLots: ParkingLot[];
};
function SummaryView({ goodParkingLots, badParkingLots }: PropsType) {
  return (
    <>
      <div className={`${styles.headingContainer} ${styles.blueHeading}`}>
        <div className={styles.headingWrapper}>
          <h1>Favourite Parking Lots</h1>
          <div className={styles.filterSortIconWrapper}>
            <IconButton className={styles.iconButton}>
              <SortByAlphaIcon
                sx={{
                  fontSize: 35,
                  color: goodParkingLots.length > 0 ? "#021f35" : "grey",
                }}
              />
            </IconButton>
            <IconButton className={styles.iconButton}>
              <FilterListIcon
                sx={{
                  fontSize: 35,
                  color: goodParkingLots.length > 0 ? "#021f35" : "grey",
                }}
              />
            </IconButton>
          </div>
        </div>
      </div>
      {goodParkingLots.length > 0 ? (
        <Carousel slides={goodParkingLots} />
      ) : (
        <h2 className={`${styles.heading} ${styles.whiteHeading}`}>
          No favourite parking lots found
        </h2>
      )}
    </>
  );
}

export default SummaryView;
