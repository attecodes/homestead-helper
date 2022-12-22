import React, { FC, HTMLProps } from "react";

import styles from "./styles.module.css";

type Props = HTMLProps<HTMLDivElement>;

export const GridContainer: FC<Props> = (props) => {
  return (
    <div {...props} className={`${styles.gridContainer} ${props.className}`}>
      {props.children}
    </div>
  );
};
