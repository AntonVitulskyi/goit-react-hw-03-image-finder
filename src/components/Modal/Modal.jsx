import PropTypes from 'prop-types';

import styles from '../../styles.module.css';

export default function Modal({ largeImageURL }) {
  return (
    <div className={styles.Overlay}>
      <div className={styles.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  largeImageURL: PropTypes.string,
};
