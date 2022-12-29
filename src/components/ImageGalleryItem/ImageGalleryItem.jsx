import PropTypes from 'prop-types';
import * as basicLightbox from 'basiclightbox'
import styles from '../../styles.module.css'
import Modal from 'components/Modal/Modal';

export default function ImageGalleryItem({id, webformatURL, largeImageURL}) {

const openModal = () => {
  basicLightbox.create(`
  <div className=${styles.Overlay}>
  <div className=${styles.Modal}>
    <img src=${largeImageURL} width="800px" height="600px" alt="" />
  </div>
</div>
`).show()

}

  return (
    <li onClick={openModal} className={styles.ImageGalleryItem}>
      <img className={styles.ImageGalleryItemImage} data-bigimage={largeImageURL} src={webformatURL} alt="" />
    </li>
  );
}
