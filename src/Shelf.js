import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Books'

class Shelf extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSelectShelf: PropTypes.func.isRequired,
    booksInShelf: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired
  }

  render() {
    const { id, label } = this.props;

    return(
      <div className="bookshelf" key={id}>
        <h2 className="bookshelf-title">{label}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.booksInShelf.map((book) => (
              <li key={book.id} className="book-list-item">
                <Book
                  book={book}
                  onSelectShelf={this.props.onSelectShelf}
                  shelves={this.props.shelves}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf;