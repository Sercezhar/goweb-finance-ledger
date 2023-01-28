import { Link } from 'react-scroll';
import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link activeClass={styles.active} spy smooth to="home">
        Home
      </Link>
      <Link activeClass={styles.active} spy smooth to="about">
        About
      </Link>
      <Link activeClass={styles.active} spy smooth to="cases">
        Cases
      </Link>
      <Link activeClass={styles.active} spy smooth to="blog">
        Blog
      </Link>
      <Link activeClass={styles.active} spy smooth to="contact">
        Contact
      </Link>
    </nav>
  );
}

export default Navigation;
