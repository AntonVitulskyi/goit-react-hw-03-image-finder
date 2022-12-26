import { Component } from 'react';
import styles from '../../styles.module.css'

export class Searchbar extends Component {
  state = {
  };

  render() {
    return (
<header className={styles.Searchbar}>
  <form className={styles.SearchForm}>
    <button type="submit" className={styles.SearchFormButton}>
      <span className={styles.SearchFormButtonLabel}></span>
    </button>

    <input
      className={styles.SearchFormInput}
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    );
  }
}
