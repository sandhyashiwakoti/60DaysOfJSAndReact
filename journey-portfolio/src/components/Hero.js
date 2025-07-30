import styles from "./Hero.module.css";

// 1. Receive the onScrollClick function as a prop
function Hero({ onScrollClick }) {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>The Journey Is The Reward</h1>
      <p className={styles.subtitle}>
        A 60-Day Adventure of JavaScript and React
      </p>
      <p className={styles.subtitle}> By Sandhya Shiwakoti</p>

      {/* 3. The onClick event is now attached to the scroll indicator */}
      <div className={styles.scrollIndicator} onClick={onScrollClick}>
        Scroll Down to See My Progress ↓
      </div>
    </section>
  );
}

export default Hero;
