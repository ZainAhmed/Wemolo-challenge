import { Divider, List, ListItem, ListItemText } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import styles from "./SortingList.module.scss";
import { ParkingLot } from "../../../types/ParkingLot";

export type SortingListProps = {
  handleClickAway: () => void;
  lots: ParkingLot[];
  setLots: Dispatch<SetStateAction<ParkingLot[]>>;
};

function SortingList({ lots, setLots, handleClickAway }: SortingListProps) {
  const handleSort = (order: string) => {
    const sortedLots = [...lots];
    sortedLots.sort((a, b) => {
      const numA = parseInt(a.name.match(/\d+/)?.[0] || "0", 10);
      const numB = parseInt(b.name.match(/\d+/)?.[0] || "0", 10);
      if (order === "asc") {
        return numA - numB;
      } else if (order === "desc") {
        return numB - numA;
      }
      return 0;
    });
    setLots(sortedLots);
    handleClickAway();
  };
  return (
    <List component="nav">
      <ListItem className={styles.listItem} onClick={() => handleSort("asc")}>
        <ListItemText primary="Sort by Name - ASC" />
      </ListItem>
      <Divider />
      <ListItem className={styles.listItem}>
        <ListItemText
          primary="Sort by Name - DESC"
          onClick={() => handleSort("desc")}
        />
      </ListItem>
    </List>
  );
}

export default SortingList;
