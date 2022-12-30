import PropTypes from 'prop-types';
import { Component } from 'react';

import styles from '../../styles.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onClickCloseModal();
      }
    });
    window.addEventListener('click', event => {
      if (event.target.dataset.name === 'Overlay') {
        this.props.onClickCloseModal();
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('click', window);
    document.removeEventListener('keydown', window);
  }

  render() {
    return (
      <div data-name="Overlay" className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src={this.props.modalImage} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modalImage: PropTypes.string,
  onClickCloseModal: PropTypes.func
};
