import classNames from 'classnames/bind';
import Container from 'components/Container';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './Appbar.module.scss';

let cx = classNames.bind(styles);

function Appbar() {
  const [isBackground, setIsBackground] = useState(false);

  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (isTablet ? window.scrollY > 70 : window.scrollY > 120) {
        setIsBackground(true);
      } else {
        setIsBackground(false);
      }
    });
  }, [isBackground, isTablet]);

  let appbarClasses = cx({
    appbar: true,
    background: isBackground,
  });

  return (
    <div className={appbarClasses}>
      <Container>
        <div className={styles.content}>
          <Logo />
          <Navigation />
        </div>
      </Container>
    </div>
  );
}

export default Appbar;
