import React from 'react'
import PropTypes from 'prop-types'
import Book from './Books'

const Shelf = props => {
  Shelf.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSelectShelf: PropTypes.func.isRequired,
    booksInShelf: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired
  }

  return(
    <div className="bookshelf" key={props.id}>
      <h2 className="bookshelf-title">{props.label}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.booksInShelf.map((book) => (
            <li key={book.id} className="book-list-item">
              <Book
                book={book}
                onSelectShelf={props.onSelectShelf}
                shelves={props.shelves}/>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Shelf;