import Button from 'components/Button';
import styles from './Hero.module.scss';

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <h1 className={styles.title}>The Sky Is The Limit</h1>
        <p className={styles.text}>
          We provide world class financial assistance
        </p>

        <Button text="Read More" isIcon />
      </div>
    </section>
  );
}

export default Hero;
