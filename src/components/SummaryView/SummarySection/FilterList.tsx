import { Checkbox, List, ListItem, ListItemText } from "@mui/material";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useContext, useState } from "react";
import { FilterContext } from "../../../context/context";
function FilterList() {
  const [openType, setOpenType] = useState(true);
  const [checked, setChecked] = useState([0]);
  const filterContextVal = useContext(FilterContext);

  const handleClick = () => {
    setOpenType(!openType);
  };

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <List component="nav" sx={{ minWidth: "158px" }}>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Type" />
        {openType ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openType} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem disablePadding>
            <ListItemButton
              role={undefined}
              //   onClick={handleToggle(value)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  //   checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  //   inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id="Type" primary={`Line item 1`} />
            </ListItemButton>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}

export default FilterList;
