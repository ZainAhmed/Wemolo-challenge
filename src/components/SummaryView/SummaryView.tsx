import { ParkingLot } from "../../types/ParkingLot";
import SummarySection from "./SummarySection/SummarySection";
type PropsType = {
  goodParkingLots: ParkingLot[];
  badParkingLots: ParkingLot[];
};
function SummaryView({ goodParkingLots, badParkingLots }: PropsType) {
  return (
    <>
      <SummarySection
        parkingLots={goodParkingLots}
        title="Favourite Parking Lots"
        fallbackText=" No favourite parking lots found"
      />
      {/* <SummarySection
        parkingLots={badParkingLots}
        title="Disliked Parking Lots"
        fallbackText=" No disliked parking lots found"
      /> */}
    </>
  );
}

export default SummaryView;
