import Container from 'components/Container';
import styles from './OurTeam.module.scss';
import OurTeamList from './OurTeamList';

function OurTeam() {
  return (
    <section className={styles.section} id="contact">
      <Container>
        <div className={styles.content}>
          <p className={styles.pretitle}>Who we are</p>
          <h2 className={styles.title}>Our Professional Team</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </p>

          <OurTeamList />
        </div>
      </Container>
    </section>
  );
}

export default OurTeam;
