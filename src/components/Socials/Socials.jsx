import classNames from 'classnames/bind';
import icons from '../../assets/icons.svg';
import styles from './Socials.module.scss';

let cx = classNames.bind(styles);

function Socials({ secondClass = null }) {
  let socialsClasses = cx('socials', `${secondClass}`);

  return (
    <ul className={socialsClasses}>
      <li className={styles.item}>
        <a href="http://www.facebook.com" aria-label="facebook">
          <svg width="35" height="35">
            <use href={`${icons}#icon-facebook`}></use>
          </svg>
        </a>
      </li>
      <li className={styles.item}>
        <a href="http://www.twitter.com" aria-label="twitter">
          <svg width="35" height="35">
            <use href={`${icons}#icon-twitter`}></use>
          </svg>
        </a>
      </li>
      <li className={styles.item}>
        <a href="http://www.youtube.com" aria-label="youtube">
          <svg width="40" height="35">
            <use href={`${icons}#icon-youtube`}></use>
          </svg>
        </a>
      </li>
      <li className={styles.item}>
        <a href="http://www.linkedin.com" aria-label="linkedin">
          <svg width="31" height="35">
            <use href={`${icons}#icon-linkedin`}></use>
          </svg>
        </a>
      </li>
    </ul>
  );
}

export default Socials;
