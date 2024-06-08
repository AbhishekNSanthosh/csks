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

        <div className={styles.wrap}>
          <div className={styles.left}>
            <span className={styles.subTitle}>The Professional Execom</span>
            <p className={styles.desc}>
              The <b>Professional Execom</b> stands as a beacon of visionary
              leadership and unwavering dedication within the IEEE CS Kerala
              Chapter, guiding every endeavor with precision and expertise. The
              collective wisdom,composed of efficient professionals,forms the
              bedrock of our chapter's aspirations, propelling us towards
              unparalleled excellence. With their refined professionalism and
              strategic guidance, they guarantee the triumph and elevated
              standards of each initiative we undertake.
            </p>
          </div>
        </div>

        <div className={styles.wrap}>
          <div className={styles.left}>
            <span className={styles.subTitle}>The IEEE CS SYP</span>
            <p className={styles.desc}>
              The<b> IEEE CS SYP</b> is a dynamic hub of support and inspiration
              for emerging computer scientists. Our dedicated team empowers
              students and early-career graduates with exceptional resources and
              opportunities to excel both academically and professionally.
              Guided by visionary leadership and an unwavering commitment to
              excellence, we cultivate a thriving community where innovation
              flourishes, shaping the future of computer science.
            </p>
          </div>
        </div>

        <div className={styles.wrap}>
          <div className={styles.left}>
            <span className={styles.subTitle}>The IEEE CS SLT</span>
            <p className={styles.desc}>
            The<b> IEEE CS SLT</b> functions as the nexus for all student activities
              within our chapter. With their exceptional leadership, they
              provide unwavering support and ensure access to all necessary
              resources, fostering an environment conducive to excellence.
              Acting as the cornerstone of guidance, the SLT upholds the highest
              standards in every activity, thereby guaranteeing a thriving
              atmosphere where student success flourishes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
