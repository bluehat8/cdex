'use client'


import type { NextPage } from "next";
import styles from "../styles/build-systematize-rectangles.module.css";

export type BuildSystematizeRectanglesType = {
  wE?: string;
  buildRWABasedFinancialEng?: string;
};

const BuildSystematizeRectangles: NextPage<BuildSystematizeRectanglesType> = ({
  wE,
  buildRWABasedFinancialEng,
}) => {
  return (
    <div className={styles.buildSystematizeRectangles}>
      <div className={styles.emailInput} />
      <div className={styles.wEFrame} />
      <h3 className={styles.we}>{wE}</h3>
      <div className={styles.recurringIncomeRectangle}>
        <div className={styles.buildRwaBased}>{buildRWABasedFinancialEng}</div>
      </div>
    </div>
  );
};

export default BuildSystematizeRectangles;
