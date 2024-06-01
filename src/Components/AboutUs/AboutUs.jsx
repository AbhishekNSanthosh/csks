import React from "react";
import about from "../../assets/about.jpg";
import styles from "./AboutUs.module.css";

export const AboutUsComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>About Us</div>
        <div className={styles.wrap}>
          <div className={styles.left}>
            <span className={styles.subTitle}>
              IEEE Computer Society Kerala Chapter
            </span>
            <p className={styles.desc}>
              The IEEE Computer Society is the world’s leading membership
              organization dedicated to computer science and technology. Serving
              more than 60,000 members, the IEEE Computer Society is the trusted
              information, networking, and career-development source for a
              global community of technology leaders that includes researchers,
              educators, software engineers, IT professionals, employers, and
              students. The IEEE Computer Society Kerala Chapter has 145
              professional members and 2051 student members. Winner of{" "}
              <b>
                IEEE CS(Global) Outstanding Chapter Award '2018 and Early Career
                Professionals Engagement in Outstanding Chapter Award Program
                2022.
              </b>
            </p>
          </div>
          <div className={styles.right}>
            <img src={about} alt="" className={styles.img} />
          </div>
        </div>
      </div>
    </div>
  );
};
