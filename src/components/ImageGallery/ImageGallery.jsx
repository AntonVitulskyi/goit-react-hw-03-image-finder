import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import styles from '../../styles.module.css'


export class ImageGallery extends Component {
  state = {};

  render() {
    return <ul className={styles.ImageGallery}>
    <ImageGalleryItem/>

    </ul>;
  }
}
