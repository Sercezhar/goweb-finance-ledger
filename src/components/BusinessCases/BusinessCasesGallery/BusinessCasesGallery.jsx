import ResponsiveImage from 'components/ResponsiveImage';
import { useState } from 'react';
import styles from './BusinessCasesGallery.module.scss';
import BusinessCasesGalleryModal from './BusinessCasesGalleryModal';
import images from './images';

function BusinessCasesGallery() {
  const [imageIndex, setImageIndex] = useState(0);
  const [isModal, setIsModal] = useState(false);

  function handleOnImageClick(index) {
    setImageIndex(index);
    setIsModal(true);
    document.body.style.overflow = 'hidden';
  }

  function prevImage() {
    imageIndex === 0
      ? setImageIndex(images.length - 1)
      : setImageIndex(prevState => prevState - 1);
  }

  function nextImage() {
    imageIndex === images.length - 1
      ? setImageIndex(0)
      : setImageIndex(prevState => prevState + 1);
  }

  return (
    <div>
      {isModal ? (
        <BusinessCasesGalleryModal
          images={images}
          imageIndex={imageIndex}
          prevImage={prevImage}
          nextImage={nextImage}
          closeModal={() => {
            setIsModal(false);
            document.body.style.overflow = 'auto';
          }}
        />
      ) : null}

      <ul className={styles.gallery}>
        {images.map(({ url }, index) => (
          <li
            className={styles.item}
            key={index}
            onClick={() => handleOnImageClick(index)}
          >
            <ResponsiveImage folder="cases" imgName={url} alt="people" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BusinessCasesGallery;
