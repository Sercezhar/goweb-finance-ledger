import Socials from 'components/Socials';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Socials />

      <p className={styles.copyright}>Copyright © 2021 - FinanceLedger</p>
    </footer>
  );
}

export default Footer;
