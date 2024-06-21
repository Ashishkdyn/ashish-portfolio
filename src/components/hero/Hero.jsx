import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ashish</h1>
        <p className={styles.description}>
          I'm a React developer. Reach out if you'd like to learn more!
        </p>
        {/* <a href="mailto:myemail@email.com" className={styles.contactBtn}> */}
        <a
          href="https://www.linkedin.com/in/ashishkadyan/"
          target="blank"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage3.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
