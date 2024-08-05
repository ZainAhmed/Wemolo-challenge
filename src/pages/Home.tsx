import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import CardView from "../components/CardView";
import { ParkingLot } from "../types/ParkingLot";
import styles from "./Home.module.scss";
function Home() {
  const [IsSummaryView, setIsSummaryView] = useState(false);
  const [goodLots, setGoodLots] = useState<ParkingLot[]>([]);
  const [badLots, setBadLots] = useState<ParkingLot[]>([]);

  return (
    <div className={styles.homeWrapper}>
      <div>
        <div className={styles.buttonWrapper}>
          <div>
            <ButtonGroup
              disableElevation
              variant="contained"
              aria-label="Disabled button group"
            >
              <Button
                onClick={() => setIsSummaryView(true)}
                variant={IsSummaryView ? "contained" : "outlined"}
                className={styles.button}
              >
                Summary View
              </Button>
              <Button
                variant={!IsSummaryView ? "contained" : "outlined"}
                onClick={() => setIsSummaryView(false)}
                className={styles.button}
              >
                Card View
              </Button>
            </ButtonGroup>
          </div>
        </div>
        {IsSummaryView ? (
          <div>Summary View</div>
        ) : (
          <CardView setGoodLots={setGoodLots} setBadLots={setBadLots} />
        )}
      </div>
    </div>
  );
}

export default Home;
