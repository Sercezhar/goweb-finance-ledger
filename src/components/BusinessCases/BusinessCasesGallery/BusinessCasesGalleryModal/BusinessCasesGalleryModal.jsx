import styles from './BusinessCasesGalleryModal.module.scss';

function BusinessCasesGalleryModal({
  images,
  imageIndex,
  prevImage,
  nextImage,
  closeModal,
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageModal}>
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
