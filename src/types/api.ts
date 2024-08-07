import { ParkingLot } from "./ParkingLot";

export type DistinctStatusesApiType = {
  distinctStatuses: { status: string }[];
};

export type ParkingLotsApiType = {
  getAllParkingLots: ParkingLot[];
};

export type DistinctTypesApiType = {
  distinctTypes: { type: string }[];
};
