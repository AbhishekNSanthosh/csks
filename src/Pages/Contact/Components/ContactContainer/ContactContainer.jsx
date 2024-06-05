import React from "react";
import styles from "./ContactContainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

export const ContactContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <span className={styles.title}>Contact</span>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <div className={styles.form}>
              <div className={styles.formRow}>
                <span className={styles.formTitle}>Give Us a Message</span>
              </div>
              <div className={styles.formItemRow}>
                <div className={styles.infoBox}>
                  <div className={styles.textBox}>
                    <input
                      type="text"
                      className={styles.inputField}
                      placeholder="Name"
                    />
                  </div>
                  <div className={styles.textBox}>
                    <input
                      type="text"
                      className={styles.inputField}
                      placeholder="Email"
                    />
                  </div>
                  <div className={styles.textBox}>
                    <input
                      type="text"
                      className={styles.inputField}
                      placeholder="Mobile Number"
                    />
                  </div>
                </div>
                <div className={styles.subjectBox}>
                  <input
                    type="text"
                    className={styles.inputField}
                    placeholder="Subject"
                  />
                </div>
                <div className={styles.txtArea}>
                  <textarea
                    type="text"
                    rows={8}
                    className={styles.inputField}
                    placeholder="Message"
                  />
                </div>
              </div>
              <div className={styles.formRow}></div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightRow}>
              <span className={styles.contactInfo}>Contact Info</span>
              <span className={styles.contactdesc}>
                Send a message through given form, If your enquiry is time
                sensitive please use below contact details.
              </span>
            </div>

            <div className={styles.rightRow}>
              <div className={styles.rightBox}>
                <div className={styles.colleft}>
                  <div className={styles.iconWrap}>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className={styles.icon}
                    />
                  </div>
                </div>
                <div className={styles.colRight}>
                  <span className={styles.rightTitle}>Post Address</span>
                  <span className={styles.rightInfo}>
                    Awamileaug Drive, Kensington London, UK
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.rightRow}>
              <div className={styles.rightBox}>
                <div className={styles.colleft}>
                  <div className={styles.iconWrap}>
                    <FontAwesomeIcon
                      icon={faPhone}
                      className={styles.icon}
                    />
                  </div>
                </div>
                <div className={styles.colRight}>
                  <span className={styles.rightTitle}>General Enquires</span>
                  <span className={styles.rightInfo}>
                  +48 500-130-0001
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.rightRow}>
              <div className={styles.rightBox}>
                <div className={styles.colleft}>
                  <div className={styles.iconWrap}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className={styles.icon}
                    />
                  </div>
                </div>
                <div className={styles.colRight}>
                  <span className={styles.rightTitle}>E-mail</span>
                  <span className={styles.rightInfo}>
                    info@gmail.com
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
