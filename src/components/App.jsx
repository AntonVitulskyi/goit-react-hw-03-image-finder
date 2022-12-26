import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import {PixabayApi} from '../pixabay-api'
import Button from './Button/Button';

export class App extends Component {
  state = {
    inputQuery: '',
  };

  render() {
    return (
<>
<Searchbar />
<ImageGallery/>
<Button/>

</>
    );
  }
}
