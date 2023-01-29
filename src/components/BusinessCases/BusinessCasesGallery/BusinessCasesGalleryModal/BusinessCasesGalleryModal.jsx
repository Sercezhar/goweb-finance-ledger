import useClickOutside from 'hooks/useClickOutside';
import { useEffect, useRef } from 'react';
import styles from './BusinessCasesGalleryModal.module.scss';

function BusinessCasesGalleryModal({
  images,
  imageIndex,
  prevImage,
  nextImage,
  closeModal,
}) {
  const modalRef = useRef(null);

  useClickOutside(modalRef, closeModal);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        closeModal();
      }

      if (imageIndex < images.length - 1 && event.code === 'ArrowRight') {
        nextImage();
      }

      if (imageIndex > 0 && event.code === 'ArrowLeft') {
        prevImage();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageModal} ref={modalRef}>
        <img
          src={require(`../../../../assets/images/cases/${images[imageIndex].url}@2x.jpg`)}
          alt="people"
        />

        <div className={styles.details}>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            sunt.
          </div>
          <div className={styles.numerosity}>
            Image {imageIndex + 1} of {images.length}
          </div>
        </div>

        <button
          className={styles.buttonClose}
          type="button"
          onClick={closeModal}
        ></button>

        {imageIndex > 0 ? (
          <div className={styles.wrapperPrev} onClick={() => prevImage()}>
            <button className={styles.buttonPrev} type="button"></button>
          </div>
        ) : null}

        {imageIndex < images.length - 1 ? (
          <div className={styles.wrapperNext} onClick={() => nextImage()}>
            <button className={styles.buttonNext} type="button"></button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default BusinessCasesGalleryModal;
