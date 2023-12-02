import React from "react";
import styles from "./Footer.module.css"; // Import your styles if you have a separate CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Section 1</h3>
          <ul>
            <li>
              <a href="/">Link 1</a>
            </li>
            <li>
              <a href="/">Link 2</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Section 2</h3>
          <ul>
            <li>
              <a href="/">Link 3</a>
            </li>
            <li>
              <a href="/">Link 4</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSocial}>
          <h3>Follow Us</h3>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/twitter-icon.png" alt="Twitter" />
          </a>
          {/* Add more social media icons as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
