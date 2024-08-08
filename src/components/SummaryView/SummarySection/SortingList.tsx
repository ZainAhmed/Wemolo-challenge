import { Divider, List, ListItem, ListItemText } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import styles from "./SortingList.module.scss";

export type SortingListProps = {
  handleClickAway: () => void;
  setSortOrder: Dispatch<SetStateAction<string>>;
};

function SortingList({ handleClickAway, setSortOrder }: SortingListProps) {
  const handleSort = (order: string) => {
    setSortOrder(order);
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
