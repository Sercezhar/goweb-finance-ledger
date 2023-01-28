import Container from 'components/Container';
import styles from './BusinessCases.module.scss';
import BusinessCasesGallery from './BusinessCasesGallery';

function BusinessCases() {
  return (
    <section id="cases">
      <Container>
        <div className={styles.content}>
          <p className={styles.pretitle}>This is what we do</p>
          <h2 className={styles.title}>Busines Cases</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </p>

          <BusinessCasesGallery />
        </div>
      </Container>
    </section>
  );
}

export default BusinessCases;
