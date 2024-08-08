import { IconButton, Popper, ClickAwayListener, Paper } from "@mui/material";
import { ReactNode } from "react";
import { ParkingLot } from "../../../types/ParkingLot";

type PropsType = {
  popperInputId: string;
  icon: ReactNode;
  listToOpen: ReactNode;
  handleClickAway: () => void;
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  setOtherAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  unfilteredParkingLots: ParkingLot[];
};

function IconButtonWithPopper({
  popperInputId,
  icon,
  listToOpen,
  handleClickAway,
  anchorEl,
  setAnchorEl,
  setOtherAnchorEl,
  unfilteredParkingLots,
}: PropsType) {
  const handleSortIconClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl((prev) => {
      if (prev) return null;
      setOtherAnchorEl(null);
      return event.currentTarget;
    });
  };

  const isPopperOpen = Boolean(anchorEl);
  const popperId = isPopperOpen ? popperInputId : undefined;

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <>
        <IconButton
          onClick={handleSortIconClick}
          disabled={unfilteredParkingLots.length === 0}
        >
          {icon}
        </IconButton>
        <Popper
          id={popperId}
          open={isPopperOpen}
          anchorEl={anchorEl}
          placement="bottom-start"
        >
          <Paper>{listToOpen}</Paper>
        </Popper>
      </>
    </ClickAwayListener>
  );
}

export default IconButtonWithPopper;
