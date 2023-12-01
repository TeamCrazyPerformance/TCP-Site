import Title from "../../assets/Title/Title";
import Intro from "../../assets/Intro/Intro";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <Title />
      </div>
      <div className={styles.section}>
        <Intro />
      </div>
    </div>
  );
};

export default Home;
