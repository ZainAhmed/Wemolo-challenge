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
        <h3>{parkingLot.name}</h3>
      </div>
    </div>
  );
}

export default Card;
