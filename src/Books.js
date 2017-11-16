import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger'

class Book extends Component {
  /**
  static propTypes = {
    curShelf: PropTypes.string.isRequired
  };
  //TODO: the book needs to know its own shelf
  */
  //TODO: send shelf change event to the parent

  render() {
    const book = this.props.book;

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.cover})`
          }}></div>
          <div><ShelfChanger/></div>
          {//TODO: send the book's current shelf to the selector
          }
        </div>
        <div className="book-title" key={book.title}>{book.title}</div>
        <div className="book-authors" key={book.authors.join("_")}>{book.authors.join(', ')}</div>
      </div>
    )
  }
}

export default Book;