import { Button, List } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import { Dispatch, FormEvent, SetStateAction } from "react";

import CollapsableFilterListSection from "./CollapsableFilterListSection";
import styles from "./FilterList.module.scss";

type PropsType = {
  handleClickAway: () => void;
  setFiltered: Dispatch<SetStateAction<boolean>>;
  distinctFilterTypes: string[] | undefined;
  distinctFilterStatuses: string[] | undefined;
  typesChecked: string[] | undefined;
  statusesChecked: string[] | undefined;
  setTypesChecked: Dispatch<SetStateAction<string[] | undefined>>;
  setStatusesChecked: Dispatch<SetStateAction<string[] | undefined>>;
};
function FilterList({
  handleClickAway,
  setFiltered,
  distinctFilterTypes,
  distinctFilterStatuses,
  typesChecked,
  statusesChecked,
  setTypesChecked,
  setStatusesChecked,
}: PropsType) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    setFiltered(true);
    handleClickAway();
  };

  return (
    <form onSubmit={handleSubmit}>
      <List component="nav">
        <CollapsableFilterListSection
          title="Type"
          childListItems={distinctFilterTypes}
          checked={typesChecked}
          setChecked={setTypesChecked}
        />
        <CollapsableFilterListSection
          title="Status"
          childListItems={distinctFilterStatuses}
          checked={statusesChecked}
          setChecked={setStatusesChecked}
        />
        <ListItemButton>
          <Button
            className={styles.applyBtn}
            type="submit"
            variant="contained"
            disableElevation
          >
            Apply
          </Button>
          <Button
            onClick={() => handleClickAway()}
            className={styles.cancelBtn}
            variant="outlined"
          >
            Cancel
          </Button>
        </ListItemButton>
      </List>
    </form>
  );
}

export default FilterList;
