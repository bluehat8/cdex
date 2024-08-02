'use client'

import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "../styles/email-address.module.css";

export type EmailAddressType = {
  name1?: string;
  enterYourName?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
};

const EmailAddress: NextPage<EmailAddressType> = ({
  name1,
  enterYourName,
  propHeight,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles.emailAddress}>
      <div className={styles.name}>
        <span>{name1}</span>
        <span className={styles.span}>*</span>
      </div>
      <div className={styles.enterYourNameWrapper} style={frameDivStyle}>
        <div className={styles.enterYourName}>{enterYourName}</div>
      </div>
    </div>
  );
};

export default EmailAddress;
