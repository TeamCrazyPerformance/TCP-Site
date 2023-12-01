import React from "react";
import { Link } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.navContainer}`}>
          <div className={`${styles.logo}`}>
            <Link to="/">
              <img src="logo.png" alt="TCP LOGO" />
              <div className={`${styles.title}`}>TCP</div>
            </Link>
          </div>
          <div className={`${styles.menu}`}>
            <Link to="/about">소개</Link>
            <Link to="/project">프로젝트</Link>
            <Link to="/apllication">지원하기</Link>
          </div>
        </div>
      </div>
      <div className={`${styles.main}`}>{children}</div>
    </div>
  );
};

export default Layout;
