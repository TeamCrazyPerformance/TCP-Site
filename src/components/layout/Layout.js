import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
            <Link to="/application">지원하기</Link>
          </div>
        </div>
      </div>
      <div className={`${styles.main}`}>{children}</div>
      <ToastContainer
        position="top-right" // 알람 위치 지정
        autoClose={3000} // 자동 off 시간
        hideProgressBar={false} // 진행시간바 숨김
        closeOnClick // 클릭으로 알람 닫기
        rtl={false} // 알림 좌우 반전
        pauseOnFocusLoss // 화면을 벗어나면 알람 정지
        draggable // 드래그 가능
        pauseOnHover // 마우스를 올리면 알람 정지
        theme="light"
        // limit={1} // 알람 개수 제한
      />
    </div>
  );
};

export default Layout;
