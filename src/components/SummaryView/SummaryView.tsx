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
        title="Good Parking Lots"
        fallbackText=" No good parking lots found"
      />
      {/* <SummarySection
        parkingLots={badParkingLots}
        title="Bad Parking Lots"
        fallbackText=" No bad parking lots found"
      /> */}
    </>
  );
}

export default SummaryView;
