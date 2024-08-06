import { useQuery } from "@apollo/client";
import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import CardView from "../components/CardView";
import Loading from "../components/Loading";
import { GET_PARKING_LOTS } from "../graphql/queries";
import useParkingLotReducer from "../hooks/useParkingLotReducer";
import { ParkingLot } from "../types/ParkingLot";
import styles from "./Home.module.scss";
import SummaryView from "../components/SummaryView";
function Home() {
  const [IsSummaryView, setIsSummaryView] = useState(false);
  const { reducerState, dispatch } = useParkingLotReducer();

  const { loading, fetchMore } = useQuery<{
    getAllParkingLots: ParkingLot[];
  }>(GET_PARKING_LOTS, {
    variables: { limit: 5, offset: 0 },
    onCompleted: (data) => {
      dispatch({ type: "SET_PARKING_LOTS", payload: data.getAllParkingLots });
    },
    onError: (error) => {
      throw error;
    },
  });

  if (loading) return <Loading />;

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.buttonWrapper}>
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled button group"
        >
          <Button
            onClick={() => setIsSummaryView(true)}
            variant={IsSummaryView ? "contained" : "outlined"}
            className={styles.button}
            style={{
              color: IsSummaryView ? "white" : "#FF9A00",
            }}
          >
            Summary View
          </Button>
          <Button
            variant={!IsSummaryView ? "contained" : "outlined"}
            onClick={() => setIsSummaryView(false)}
            className={styles.button}
            style={{
              color: !IsSummaryView ? "white" : "#FF9A00",
            }}
          >
            Card View
          </Button>
        </ButtonGroup>

        {IsSummaryView ? (
          <div>
            <SummaryView
              goodParkingLots={reducerState.goodLots}
              badParkingLots={reducerState.badLots}
            />
          </div>
        ) : (
          <CardView
            reducerState={reducerState}
            dispatch={dispatch}
            fetchMore={fetchMore}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
