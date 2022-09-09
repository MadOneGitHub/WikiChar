import React from "react";
import LeftPanel from "../LeftPanel/LeftPanel";
import MainContent from "../MainContent/MainContent";
import Navbar from "../Navbar/Navbar";
import styles from "./MainComponent.module.css";

const MainComponent = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <Navbar />
        <div className={styles.content}>
          <LeftPanel />
          <MainContent />
        </div>
      </div>
    </>
  );
};

export default MainComponent;
