import {
  ApolloQueryResult,
  FetchMoreOptions,
  FetchMoreQueryOptions,
} from "@apollo/client";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { IconButton } from "@mui/material";
import { Dispatch } from "react";
import { ParkingLot } from "../types/ParkingLot";
import { ActionType, reducerStateType } from "../types/ParkingLotReducer";
import Card from "./Card";
import styles from "./CardView.module.scss";

type GetParkingLotsData = {
  getAllParkingLots: ParkingLot[];
};

type GetParkingLotsVars = {
  limit: number;
  offset: number;
};

type CardViewProps = {
  reducerState: reducerStateType;
  dispatch: Dispatch<ActionType>;
  fetchMore: (
    options: FetchMoreQueryOptions<GetParkingLotsVars, GetParkingLotsData> &
      FetchMoreOptions<GetParkingLotsData>
  ) => Promise<ApolloQueryResult<GetParkingLotsData>>;
};
function CardView({ reducerState, dispatch, fetchMore }: CardViewProps) {
  async function handleSelection(dir: "left" | "right") {
    if (dir === "left") {
      dispatch({ type: "ADD_BAD_LOT", payload: reducerState.parkingLots[0] });
    } else {
      dispatch({ type: "ADD_GOOD_LOT", payload: reducerState.parkingLots[0] });
    }

    const firstElementRemoved = reducerState.parkingLots?.slice(1);

    const { data, error } = await fetchMore({
      variables: {
        limit: 1,
        offset: reducerState.nextOffset,
      },
    });
    if (error) throw error;

    dispatch({
      type: "INCREMENT_OFFSET",
    });
    dispatch({
      type: "SET_PARKING_LOTS",
      payload: firstElementRemoved?.concat(data.getAllParkingLots),
    });
  }

  return (
    <>
      <div className={styles.cardContainer}>
        {reducerState.parkingLots.map((lot, index) => (
          <Card
            parkingLot={lot}
            key={lot.id}
            zIndex={reducerState.parkingLots.length - index}
            isCardView={true}
          />
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <IconButton
          disabled={reducerState.parkingLots.length === 0}
          size="large"
          className={styles.iconButton}
          style={{
            color: reducerState.parkingLots.length === 0 ? "grey" : "red",
          }}
          onClick={() => handleSelection("left")}
        >
          <CancelIcon sx={{ fontSize: 72 }} />
        </IconButton>
        <IconButton
          disabled={reducerState.parkingLots?.length === 0}
          className={styles.iconButton}
          style={{
            color: reducerState.parkingLots.length === 0 ? "grey" : "green",
          }}
          onClick={() => handleSelection("right")}
        >
          <CheckCircleIcon sx={{ fontSize: 72 }} />
        </IconButton>
      </div>
    </>
  );
}

export default CardView;
