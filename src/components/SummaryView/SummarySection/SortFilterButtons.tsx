import SortingList from "./SortingList";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import IconButtonWithPopper from "./IconButtonWithPopper";
import FilterList from "./FilterList";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import styles from "./SortFilterButtons.module.scss";
import { ParkingLot } from "../../../types/ParkingLot";
import { filterParkingLotsByAttribute, sortArray } from "../../../utils/utils";
import { FilterContext } from "../../../context/context";
type SortFilterButtonsProps = {
  lots: ParkingLot[];
  setLots: Dispatch<SetStateAction<ParkingLot[]>>;
  unfilteredParkingLots: ParkingLot[];
};

function SortFilterButtons({
  lots,
  setLots,
  unfilteredParkingLots,
}: SortFilterButtonsProps) {
  const filterContextVal = useContext(FilterContext);

  const distinctFilterTypes = filterContextVal?.types?.map((val) => val.type);
  const distinctFilterStatuses = filterContextVal?.statuses?.map(
    (val) => val.status
  );

  const [typesChecked, setTypesChecked] = useState(() => {
    return distinctFilterTypes;
  });
  const [statusesChecked, setStatusesChecked] = useState(() => {
    return distinctFilterStatuses;
  });
  const [anchorElSort, setAnchorElSort] = useState<null | HTMLElement>(null);
  const [anchorElFilter, setAnchorElFilter] = useState<null | HTMLElement>(
    null
  );
  const [isFiltered, setFiltered] = useState(false);
  const [sortOrder, setSortOrder] = useState("");

  const handleClickAway = useCallback(() => {
    setAnchorElSort(null);
    setAnchorElFilter(null);
  }, []);

  useEffect(() => {
    if (isFiltered) {
      const sortedFilteredLots = [...unfilteredParkingLots];
      sortArray(sortedFilteredLots, sortOrder);
      const typeFiltered = filterParkingLotsByAttribute(
        sortedFilteredLots,
        typesChecked,
        "type"
      );
      const statusFiltered = filterParkingLotsByAttribute(
        typeFiltered,
        statusesChecked,
        "status"
      );
      setLots(statusFiltered);
      setFiltered(false);
    }
  }, [isFiltered]);

  const iconStyles = {
    fontSize: 35,
    color: unfilteredParkingLots.length > 0 ? "#021f35" : "lightgrey",
  };
  return (
    <div className={styles.filterSortIconWrapper}>
      <IconButtonWithPopper
        popperInputId="sort-list-popper"
        handleClickAway={handleClickAway}
        anchorEl={anchorElSort}
        setAnchorEl={setAnchorElSort}
        setOtherAnchorEl={setAnchorElFilter}
        unfilteredParkingLots={unfilteredParkingLots}
        icon={<SwapVertIcon sx={iconStyles} />}
        listToOpen={
          <SortingList
            handleClickAway={handleClickAway}
            setSortOrder={setSortOrder}
            lots={lots}
            setLots={setLots}
          />
        }
      />
      <IconButtonWithPopper
        popperInputId="filter-list-popper"
        handleClickAway={handleClickAway}
        anchorEl={anchorElFilter}
        setAnchorEl={setAnchorElFilter}
        setOtherAnchorEl={setAnchorElSort}
        unfilteredParkingLots={unfilteredParkingLots}
        icon={<FilterListIcon sx={iconStyles} />}
        listToOpen={
          <FilterList
            distinctFilterTypes={distinctFilterTypes}
            distinctFilterStatuses={distinctFilterStatuses}
            typesChecked={typesChecked}
            statusesChecked={statusesChecked}
            setTypesChecked={setTypesChecked}
            setStatusesChecked={setStatusesChecked}
            handleClickAway={handleClickAway}
            setFiltered={setFiltered}
          />
        }
      />
    </div>
  );
}

export default SortFilterButtons;
