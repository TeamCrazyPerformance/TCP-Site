import Title from "../../assets/Title/Title";
import Intro from "../../assets/Intro/Intro";
import styles from "./Home.module.css";
import Footer from "../../assets/Footer/Footer";
import Contact from "../../assets/Contact/Contact";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <Title />
      </div>
      <div className={styles.section}>
        <Intro />
      </div>
      <div className={styles.section}>
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
