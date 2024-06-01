import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { navbarLinks } from "../../Utils/Constants";

export const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarWrapper}>
        <div className={styles.navbarLeft}>
          <img src={logo} alt="" className={styles.logo} />
        </div>
        <div className={styles.navbarCenter}>
          {navbarLinks?.map((navItem) => (
            <div className={styles.navbarLinkBox}>
                <a href={navItem?.link} className={styles.linkName}>{navItem?.title}</a>
            </div>
          ))}
        </div>
        <div className={styles.navbarRight}>
            <button className={styles.join}>
                Join Whatsapp Channel
            </button>
        </div>
      </div>
    </div>
  );
};
