import useClickOutside from 'hooks/useClickOutside';
import { useEffect, useRef, useState } from 'react';
import styles from './BusinessCasesGalleryModal.module.scss';

function BusinessCasesGalleryModal({
  images,
  imageIndex,
  prevImage,
  nextImage,
  closeModal,
}) {
  const [isLoading, setIsLoading] = useState(true);
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
        <div
          className={styles.loader}
          style={{ display: isLoading ? 'block' : 'none' }}
        >
          <img
            src={require('../../../../assets/images/gallery/loading.gif')}
            alt="loader"
          />
        </div>

        <img
          style={{ display: isLoading ? 'none' : 'block' }}
          src={require(`../../../../assets/images/cases/${images[imageIndex].url}@2x.jpg`)}
          alt="people"
          onLoad={() => setIsLoading(false)}
        />

        <div style={{ display: isLoading ? 'none' : 'block' }}>
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
    </div>
  );
}

export default BusinessCasesGalleryModal;
