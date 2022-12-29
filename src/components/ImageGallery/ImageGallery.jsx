
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import styles from '../../styles.module.css'


export class ImageGallery extends Component {
  state = {};

  render() 
  
  {
    return <ul className={styles.ImageGallery}>
     { this.props.foundImages.map(image => (
    <ImageGalleryItem
    key={image.id}
    largeImageURL={image.largeImageURL}
    webformatURL={image.webformatURL}
    id={image.id}
    />
     ))
    
     }
    </ul>
  }
}
