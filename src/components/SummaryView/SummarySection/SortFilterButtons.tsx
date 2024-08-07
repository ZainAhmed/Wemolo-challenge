import SortingList from "./SortingList";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import IconButtonWithPopper from "./IconButtonWithPopper";
import FilterList from "./FilterList";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import styles from "./SortFilterButtons.module.scss";
import { ParkingLot } from "../../../types/ParkingLot";
type SortFilterButtonsProps = {
  lots: ParkingLot[];
  setLots: Dispatch<SetStateAction<ParkingLot[]>>;
};

function SortFilterButtons({ lots, setLots }: SortFilterButtonsProps) {
  const [anchorElSort, setAnchorElSort] = useState<null | HTMLElement>(null);
  const [anchorElFilter, setAnchorElFilter] = useState<null | HTMLElement>(
    null
  );

  const handleClickAway = useCallback(() => {
    setAnchorElSort(null);
    setAnchorElFilter(null);
  }, []);

  return (
    <div className={styles.filterSortIconWrapper}>
      <IconButtonWithPopper
        parkingLots={lots}
        popperInputId="sort-list-popper"
        handleClickAway={handleClickAway}
        anchorEl={anchorElSort}
        setAnchorEl={setAnchorElSort}
        setOtherAnchorEl={setAnchorElFilter}
        icon={
          <SwapVertIcon
            sx={{
              fontSize: 35,
              color: lots.length > 0 ? "#021f35" : "lightgrey",
            }}
          />
        }
        listToOpen={
          <SortingList
            handleClickAway={handleClickAway}
            lots={lots}
            setLots={setLots}
          />
        }
      />
      <IconButtonWithPopper
        parkingLots={lots}
        popperInputId="filter-list-popper"
        handleClickAway={handleClickAway}
        anchorEl={anchorElFilter}
        setAnchorEl={setAnchorElFilter}
        setOtherAnchorEl={setAnchorElSort}
        icon={
          <FilterListIcon
            sx={{
              fontSize: 35,
              color: lots.length > 0 ? "#021f35" : "lightgrey",
            }}
          />
        }
        listToOpen={<FilterList />}
      />
    </div>
  );
}

export default SortFilterButtons;
