import Typography from "../Typography/Typography";
import styles from "./Title.module.css";

const Title = () => {
  const titles = ["Team", "Crazy", "Performance", "TCP"];
  return (
    <div className={`${styles.wrap}`}>
      <div className={`${styles.typoWrap}`}>
        <Typography titles={titles} />
      </div>
    </div>
  );
};

export default Title;
