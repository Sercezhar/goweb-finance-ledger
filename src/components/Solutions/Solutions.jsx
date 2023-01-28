import Button from 'components/Button';
import Container from 'components/Container';
import ResponsiveImage from 'components/ResponsiveImage';
import styles from './Solutions.module.scss';

function Solutions() {
  return (
    <section className={styles.section} id="about">
      <Container resetPadding grid>
        <ResponsiveImage folder="home" imgName="people" alt="people" />

        <div className={styles.content}>
          <p className={styles.pretitle}>What you are looking for</p>
          <h2 className={styles.title}>We provide bespoke solutions</h2>
          <p className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>

          <Button text="Read More" secondClass="solutions" />
        </div>
      </Container>
    </section>
  );
}

export default Solutions;
