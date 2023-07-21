import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.Header}>
      <div className={styles.title}>
        <center>
          Train Information
        </center>
      </div>
    </div>
  );
};

export default Header;
