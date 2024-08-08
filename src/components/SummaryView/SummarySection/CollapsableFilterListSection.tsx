import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemButton from "@mui/material/ListItemButton";
import { Checkbox, Divider, List, ListItem, ListItemText } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
import styles from "./CollapsableFilterListSection.module.scss";
type PropsType = {
  title: string;
  childListItems: string[] | undefined;
  checked: string[] | undefined;
  setChecked: React.Dispatch<React.SetStateAction<string[] | undefined>>;
};
function CollapsableFilterListSection({
  checked,
  setChecked,
  title,
  childListItems,
}: PropsType) {
  const [openType, setOpenType] = useState(true);

  const handleClick = () => {
    setOpenType(!openType);
  };

  const handleToggle = (value: string) => () => {
    if (checked) {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked?.splice(currentIndex, 1);
      }
      setChecked(newChecked);
    }
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={title} />
        {openType ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider />
      <Collapse in={openType} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {childListItems?.map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <Fragment key={value}>
                <ListItem
                  key={value}
                  disablePadding
                  className={styles.yellowBg}
                >
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggle(value)}
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked?.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        className={`${styles.checkboxes} ${styles.yellowBg}`}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={value} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </Fragment>
            );
          })}
        </List>
      </Collapse>
    </>
  );
}

export default CollapsableFilterListSection;
