import classNames from 'classnames/bind';
import icons from '../../assets/icons.svg';
import styles from './Button.module.scss';

let cx = classNames.bind(styles);

function Button({
  text = 'Click me',
  type = 'button',
  callback = null,
  secondClass = null,
  isIcon = false,
}) {
  let buttonClasses = cx('button', secondClass);

  const iconArrow = (
    <svg width="9" height="19">
      <use href={`${icons}#icon-arrow-right`}></use>
    </svg>
  );

  return (
    <button className={buttonClasses} type={type} onClick={callback}>
      {isIcon ? iconArrow : null}
      {text}
    </button>
  );
}

export default Button;
