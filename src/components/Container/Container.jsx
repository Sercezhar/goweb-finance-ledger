import classNames from 'classnames/bind';
import styles from './Container.module.scss';

let cx = classNames.bind(styles);

function Container({ children, resetPadding = false, grid = false }) {
  let containerClasses = cx({
    container: true,
    resetPadding: resetPadding,
    grid: grid,
  });

  return <div className={containerClasses}>{children}</div>;
}

export default Container;
