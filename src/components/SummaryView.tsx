import React from "react";
import Carousel from "./Carousel/Carousel";
import { ParkingLot } from "../types/ParkingLot";
type PropsType = {
  goodParkingLots: ParkingLot[];
  badParkingLots: ParkingLot[];
};
function SummaryView({ goodParkingLots, badParkingLots }: PropsType) {
  return (
    <div>
      <Carousel slides={goodParkingLots} />
    </div>
  );
}

export default SummaryView;
