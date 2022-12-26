import PropTypes from 'prop-types';

import styles from '../../styles.module.css'

export default function ImageGalleryItem({}) {
  return (
    <li className={styles.ImageGalleryItem}>
      <img className={styles.ImageGalleryItemImage} src="" alt="" />
    </li>
  );
}
