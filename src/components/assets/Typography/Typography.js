import React, { useEffect } from "react";
import gsap from "gsap";
import SplitTextJS from "split-text-js";
import styles from "./Typography.module.css";

const Typography = ({ titles }) => {
  useEffect(() => {
    const titlesArray = gsap.utils.toArray(".animation");
    const t1 = gsap.timeline({
      defaults: { duration: 1 },
      repeat: -1,
      repeatDelay: 2,
    });

    const animateTitles = () => {
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
    };

    const repeatAnimation = () => {
      t1.clear();
      animateTitles();

      // Repeat the animation
      gsap.fromTo(
        t1,
        { time: 0 },
        { time: t1.totalDuration(), onComplete: repeatAnimation }
      );
    };

    // Set up initial animation
    animateTitles();

    // Set up repeat every 3 seconds
    gsap.to(t1, {
      repeat: -1,
      repeatDelay: 3,
      onComplete: repeatAnimation,
    });

    // Cleanup
    return () => {
      t1.kill();
    };
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
