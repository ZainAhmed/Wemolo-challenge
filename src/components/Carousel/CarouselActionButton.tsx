import React, { ReactNode } from "react";
import styles from "./CarouselActionButton.module.scss";
import { IconButton, IconButtonProps } from "@mui/material";

interface ButtonProps extends IconButtonProps {
  btnClass: string;
  icon: ReactNode;
}
function CarouselActionButton({
  children,
  btnClass,
  icon,
  ...restProps
}: ButtonProps) {
  return (
    <IconButton
      className={`${styles.embla__button}  ${btnClass}`}
      type="button"
      {...restProps}
    >
      {icon}
      {children}
    </IconButton>
  );
}

export default CarouselActionButton;
