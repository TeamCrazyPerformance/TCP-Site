import React, { useEffect } from "react";
import gsap from "gsap";
import SplitTextJS from "split-text-js";
import styles from "./Typography.module.css";

const Typography = ({ titles }) => {
  useEffect(() => {
    const titlesArray = gsap.utils.toArray(".animation");
    const t1 = gsap.timeline({ defaults: { duration: 1 } });

    titlesArray.forEach((title, index) => {
      const splitTitle = new SplitTextJS(title);
      if (index < titlesArray.length - 1) {
        t1.from(
          splitTitle.chars,
          {
            opacity: 0,
            y: 80,
            rotateX: -90,
            stagger: 0.02,
          },
          "<"
        ).to(
          splitTitle.chars,
          {
            opacity: 0,
            y: -80,
            rotateX: 90,
            stagger: 0.02,
          },
          "<1"
        );
      } else {
        t1.from(
          splitTitle.chars,
          {
            opacity: 0,
            y: 80,
            rotateX: -90,
            stagger: 0.02,
          },
          "<"
        ).to(
          splitTitle.chars,
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: 0.02,
          },
          "<1"
        );
      }
    });
  }, [titles]);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.textWrapper}`}>
        {titles.map((title, index) => (
          <p key={index} className="animation">
            {title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Typography;
