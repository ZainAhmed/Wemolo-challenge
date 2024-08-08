import { Divider, List, ListItem, ListItemText } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import styles from "./SortingList.module.scss";
import { ParkingLot } from "../../../types/ParkingLot";
import { sortArray } from "../../../utils/utils";

export type SortingListProps = {
  handleClickAway: () => void;
  setSortOrder: Dispatch<SetStateAction<string>>;
  lots: ParkingLot[];
  setLots: Dispatch<SetStateAction<ParkingLot[]>>;
};

function SortingList({
  handleClickAway,
  setSortOrder,
  lots,
  setLots,
}: SortingListProps) {
  const handleSort = (order: string) => {
    const sortedLots = [...lots];
    sortArray(sortedLots, order);
    setSortOrder(order);
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
