import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import styles from "./Home.module.scss";
function Home() {
  const [IsSummaryView, setIsSummaryView] = useState(false);

  return (
    <div className={styles.homeWrapper}>
      <div>
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled button group"
        >
          <Button
            onClick={() => setIsSummaryView(true)}
            variant={IsSummaryView ? "contained" : "outlined"}
          >
            Summary View
          </Button>
          <Button
            variant={!IsSummaryView ? "contained" : "outlined"}
            onClick={() => setIsSummaryView(false)}
          >
            Card View
          </Button>
        </ButtonGroup>
        {IsSummaryView ? <div>Summary View</div> : <div>Card View</div>}
      </div>
    </div>
  );
}

export default Home;
