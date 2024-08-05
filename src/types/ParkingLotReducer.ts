import { ParkingLot } from "./ParkingLot";

export type ActionType =
  | { type: "ADD_GOOD_LOT"; payload: ParkingLot }
  | { type: "ADD_BAD_LOT"; payload: ParkingLot }
  | { type: "SET_PARKING_LOTS"; payload: ParkingLot[] }
  | { type: "INCREMENT_OFFSET" };

export type reducerStateType = {
  goodLots: ParkingLot[];
  badLots: ParkingLot[];
  parkingLots: ParkingLot[];
  nextOffset: number;
};
