import LocationCityIcon from "@mui/icons-material/LocationCity";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ParkingLot } from "../types/ParkingLot";
import styles from "./Card.module.scss";
type CardsProps = {
  parkingLot: ParkingLot;
  zIndex: number;
};
function Card({ parkingLot, zIndex }: CardsProps) {
  return (
    <div className={styles.cardWrapper} style={{ zIndex: zIndex }}>
      <div
        style={{ backgroundImage: `url(${parkingLot.image})` }}
        className={styles.card}
      >
        <div className={styles.metadataContainer}>
          <div className={styles.metadata}>
            <h2>
              {parkingLot.name} - {parkingLot.status}
            </h2>
            <h3>
              <LocationOnIcon
                className={styles.iconText}
                sx={{ fontSize: 20 }}
                color="primary"
              />
              {parkingLot.address}
            </h3>
            <h3>
              <LocationCityIcon
                className={styles.iconText}
                sx={{ fontSize: 20 }}
                color="primary"
              />
              {parkingLot.type} - {parkingLot.size} parking places
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
