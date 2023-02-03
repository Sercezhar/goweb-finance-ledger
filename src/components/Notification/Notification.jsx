import classNames from 'classnames/bind';
import Button from 'components/Button';
import { forwardRef, useImperativeHandle, useReducer, useState } from 'react';
import styles from './Notification.module.scss';

let cx = classNames.bind(styles);

function Notification(props, ref) {
  const [isVisible, setIsVisible] = useState(false);
  const [text, updateText] = useReducer(
    (state, updates) => ({ ...state, ...updates }),
    { title: '', message: '' }
  );

  useImperativeHandle(ref, () => ({
    showNotification(title, message) {
      updateText({ title, message });
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    },
  }));

  let notificationClasses = cx({
    backdrop: true,
    visible: isVisible,
  });

  return (
    <div className={notificationClasses}>
      <div className={styles.notification}>
        <h3 className={styles.title}>{text.title}</h3>
        <p className={styles.message}>{text.message}</p>
        <Button
          text="OK"
          secondClass="form"
          callback={() => {
            setIsVisible(false);
            document.body.style.overflow = 'auto';
          }}
        />
      </div>
    </div>
  );
}

export default forwardRef(Notification);
