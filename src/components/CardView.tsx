import { useQuery } from "@apollo/client";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { IconButton } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { GET_PARKING_LOTS } from "../graphql/queries";
import { ParkingLot } from "../types/ParkingLot";
import Card from "./Card";
import styles from "./CardView.module.scss";
import Loading from "./Loading";

type CardViewProps = {
  setGoodLots: Dispatch<SetStateAction<ParkingLot[]>>;
  setBadLots: Dispatch<SetStateAction<ParkingLot[]>>;
};
function CardView({ setGoodLots, setBadLots }: CardViewProps) {
  const [parkingLots, setParkingLots] = useState<ParkingLot[]>([]);

  const [nextOffset, setNextOffset] = useState(5);
  const { loading, fetchMore } = useQuery<{
    getAllParkingLots: ParkingLot[];
  }>(GET_PARKING_LOTS, {
    variables: { limit: 5, offset: 0 },
    onCompleted: (data) => {
      setParkingLots(data.getAllParkingLots);
    },
    onError: (error) => {
      throw error;
    },
  });

  async function handleSelection(dir: "left" | "right") {
    if (dir === "left") {
      setBadLots((prev) => [...prev, parkingLots[0]]);
    } else {
      setGoodLots((prev) => [...prev, parkingLots[0]]);
    }

    const firstElementRemoved = parkingLots?.slice(1);

    const { data, error } = await fetchMore({
      variables: {
        limit: 1,
        offset: nextOffset + 1,
      },
    });
    if (error) throw error;

    const res = firstElementRemoved?.concat(data.getAllParkingLots);
    setNextOffset((prev) => prev + 1);
    setParkingLots(res);
  }

  if (loading) return <Loading />;

  return (
    <>
      <div className={styles.cardContainer}>
        {parkingLots?.map((lot, index) => (
          <Card
            parkingLot={lot}
            key={lot.id}
            zIndex={parkingLots.length - index}
          />
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <IconButton
          disabled={parkingLots?.length === 0}
          size="large"
          className={styles.iconButton}
          style={{ color: parkingLots?.length === 0 ? "grey" : "red" }}
          onClick={() => handleSelection("left")}
        >
          <CancelIcon sx={{ fontSize: 72 }} />
        </IconButton>
        <IconButton
          disabled={parkingLots?.length === 0}
          className={styles.iconButton}
          style={{ color: parkingLots?.length === 0 ? "grey" : "green" }}
          onClick={() => handleSelection("right")}
        >
          <CheckCircleIcon sx={{ fontSize: 72 }} />
        </IconButton>
      </div>
    </>
  );
}

export default CardView;
