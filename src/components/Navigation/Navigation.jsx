import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';
import styles from './Navigation.module.scss';

function Navigation() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const scrollOffset = isMobile ? -120 : -70;

  return (
    <nav>
      <ul className={styles.navigation}>
        <li className={styles.navLink}>
          <Link
            activeClass={styles.active}
            offset={scrollOffset}
            spy
            smooth
            to="home"
            href="#home"
          >
            Home
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link
            activeClass={styles.active}
            offset={scrollOffset}
            spy
            smooth
            to="about"
            href="#about"
          >
            About
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link
            activeClass={styles.active}
            offset={scrollOffset}
            spy
            smooth
            to="cases"
            href="#cases"
          >
            Cases
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link
            activeClass={styles.active}
            offset={scrollOffset}
            spy
            smooth
            to="blog"
            href="#blog"
          >
            Blog
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link
            activeClass={styles.active}
            spy
            smooth
            to="contact"
            href="#contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
