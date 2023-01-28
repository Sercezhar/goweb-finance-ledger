import icons from '../../assets/icons.svg';
import styles from './Logo.module.scss';

function Logo() {
  return (
    <a className={styles.logo} href="http://google.com">
      <svg>
        <use href={`${icons}#icon-book`}></use>
      </svg>
      <span className={styles.text}>
        <span>Finance</span> Ledger
      </span>
    </a>
  );
}

export default Logo;
