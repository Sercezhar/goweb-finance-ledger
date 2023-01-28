import ResponsiveImage from 'components/ResponsiveImage';
import Socials from 'components/Socials';
import styles from './OurTeamList.module.scss';

function OurTeamList() {
  return (
    <ul className={styles.team}>
      <li className={styles.item}>
        <div className={styles.image}>
          <ResponsiveImage folder="team" imgName="person1" alt="man" />

          <div className={styles.overlay}>
            <Socials secondClass="team" />
          </div>
        </div>

        <h3>John Doe</h3>
        <p>President</p>
      </li>
      <li className={styles.item}>
        <div className={styles.image}>
          <ResponsiveImage folder="team" imgName="person2" alt="woman" />

          <div className={styles.overlay}>
            <Socials secondClass="team" />
          </div>
        </div>

        <h3>Jane Doe</h3>
        <p>Vice President</p>
      </li>
      <li className={styles.item}>
        <div className={styles.image}>
          <ResponsiveImage folder="team" imgName="person3" alt="man" />

          <div className={styles.overlay}>
            <Socials secondClass="team" />
          </div>
        </div>

        <h3>Steve Smith</h3>
        <p>Marketing Head</p>
      </li>
    </ul>
  );
}

export default OurTeamList;
