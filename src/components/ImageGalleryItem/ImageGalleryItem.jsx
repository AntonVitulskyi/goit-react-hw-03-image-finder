import PropTypes from 'prop-types';
import styles from '../../styles.module.css';

import { Component } from 'react';
import Modal from 'components/Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    modalIsOpen: false,
  };

  onClickOpenModal = () => {
    this.setState({ modalIsOpen: true });
  };

  onClickCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.onClickCloseModal();
      }
    });
    window.addEventListener('click', event => {
      if (event.target.className === 'styles_Overlay__pZRPG') {
        this.onClickCloseModal();
      }
    });
  }

  render() {
    const { largeImageURL, webformatURL } = this.props;
    return (
      <>
        <li onClick={this.onClickOpenModal} className={styles.ImageGalleryItem}>
          <img
            className={styles.ImageGalleryItemImage}
            data-bigimage={largeImageURL}
            src={webformatURL}
            alt=""
          />
        </li>
        {this.state.modalIsOpen && (
          <Modal
            onClickCloseModal={this.onClickCloseModal}
            largeImageURL={largeImageURL}
          />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string,
  webformatURL: PropTypes.string,
  id: PropTypes.number
}