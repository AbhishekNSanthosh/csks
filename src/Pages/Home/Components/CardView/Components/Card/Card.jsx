import React from "react";
import styles from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

export const Card = ({ icon, title, desc }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <FontAwesomeIcon icon={icon} className={styles.icon} />
        </div>
        <div className={styles.row}>
          <span className={styles.title}>{title}</span>
        </div>
        <div className={styles.row}>
          <p className={styles.desc}>
            There are thousands of IEEE Student Branches throughout the world
            and likely one near you. It’s your connection to local
            professionals, academics and the IEEE organization at a large scale.
          </p>
        </div>
      </div>
    </div>
  );
};
