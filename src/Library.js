import React from 'react'
import { Route, Link } from 'react-router-dom'
import Shelf from './Shelf'
import PropTypes from 'prop-types'

const Library = props => {
  Library.propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    onSelectShelf: PropTypes.func.isRequired
  }

  return(
    <Route exact path="/" key="mainPage" render={() => (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {props.shelves.filter((shelf) => shelf.id !== "none").map((shelf) => (
                <Shelf
                  key={`${shelf.id}_shelf`}
                  id={shelf.id}
                  label={shelf.label}
                  onSelectShelf={props.onSelectShelf}
                  booksInShelf={props.books.filter((book) => book.shelf === shelf.id)}
                  shelves={props.shelves}/>
              ))}
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link className="open-search-link" to="/search">Add a book</Link>
        </div>
      </div>
    )}/>
  )
}

export default Library;