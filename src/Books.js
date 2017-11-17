import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onSelectShelf: PropTypes.func.isRequired
  }

  render() {
    const book = this.props.book;

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book["imageLinks"]["thumbnail"]})`
          }}></div>
          <div><ShelfChanger
            curShelf={book["shelf"]}
            onSelectShelf={this.props.onSelectShelf}/>
          </div>
        </div>
        <div className="book-title" key={book.title}>{book.title}</div>
        <div className="book-authors" key={book.authors.join("_")}>{book.authors.join(', ')}</div>
      </div>
    )
  }
}

export default Book;