import { useQuery } from "@apollo/client";
import { ParkingLot } from "../../types/ParkingLot";
import SummarySection from "./SummarySection/SummarySection";
import { DistinctStatusesApiType, DistinctTypesApiType } from "../../types/api";
import {
  GET_DISTINCT_STATUSES,
  GET_DISTINCT_TYPES,
} from "../../graphql/queries";
import Loading from "../Loading";
import { FilterContext } from "../../context/context";
type PropsType = {
  goodParkingLots: ParkingLot[];
  badParkingLots: ParkingLot[];
};

function SummaryView({ goodParkingLots, badParkingLots }: PropsType) {
  const { loading: loadingDistinctStatuses, data: distinctStatuses } =
    useQuery<DistinctStatusesApiType>(GET_DISTINCT_STATUSES, {
      onError: (error) => {
        throw error;
      },
    });

  const { loading: loadingDistinctTypes, data: distinctTypes } =
    useQuery<DistinctTypesApiType>(GET_DISTINCT_TYPES, {
      onError: (error) => {
        throw error;
      },
    });

  const filterValues = {
    types: distinctTypes?.distinctTypes,
    statuses: distinctStatuses?.distinctStatuses,
  };

  if (loadingDistinctStatuses || loadingDistinctTypes) return <Loading />;
  return (
    <FilterContext.Provider value={filterValues}>
      <SummarySection
        parkingLots={goodParkingLots}
        title="Good Parking Lots"
        fallbackText=" No good parking lots found"
      />
      <SummarySection
        parkingLots={badParkingLots}
        title="Bad Parking Lots"
        fallbackText=" No bad parking lots found"
      />
    </FilterContext.Provider>
  );
}

export default SummaryView;
