import { Link } from "react-router-dom";
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.introContainer}>
        <div className={styles.wrap}>
          <div className={`${styles.word}`}>
            <span className={styles.capital}>T</span>
            <span className={styles.lowwer}>eam</span>
          </div>

          <div className={`${styles.word}`}>
            <span className={styles.capital}>C</span>
            <span className={styles.lowwer}>razy</span>
          </div>

          <div className={`${styles.word}`}>
            <span className={styles.capital}>P</span>
            <span className={styles.lowwer}>erformance</span>
          </div>
        </div>
        <div className={styles.wrapArticle}>
          <h1>Team Crazy Performance</h1>

          <p>
            안녕하세요, Team Crazy Performance(TCP)입니다! 우리는 열정적이고
            혁신적인 개발자들의 모임으로, 뛰어난 성과와 협업을 통해 개발
            분야에서 독특한 성과를 이뤄낸 팀입니다.
          </p>

          <h2>우리의 비전과 목표:</h2>
          <p>
            Team Crazy Performance은 기술의 미래를 선도하며 열정적인 개발자들을
            키워내는 것을 목표로 삼고 있습니다. 우리는 개발 분야에서의 창의적인
            솔루션을 찾고자 하며, 팀원 간의 협업을 통해 서로의 능력을 최대한
            발휘하고자 합니다.
          </p>

          <h2>Team Crazy Performance에서의 기회:</h2>
          <p>
            TCP에 참여함으로써, 당신은 개발 능력을 향상시키는 동시에 팀원 간의
            조화로운 협업 경험을 쌓을 수 있습니다. 우리는 열린 소통과 지속적인
            성장을 중시하며, 팀원 모두가 자신의 독특한 역량을 발휘할 수 있는
            플랫폼을 제공하고 있습니다.
          </p>
        </div>
      </div>
      <div className={`${styles.apBtn}`}>
        <Link to="/application">지원하기</Link>
      </div>
    </div>
  );
};

export default Intro;
