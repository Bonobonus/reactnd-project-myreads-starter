import React from 'react'
import { Route, Link } from 'react-router-dom'
import Shelf from './Shelf'
import Book from './Books'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class Search extends React.Component {
  static propTypes = {
    shelves: PropTypes.array.isRequired,
    onSelectShelf: PropTypes.func.isRequired,
    //clearBooks: PropTypes.func.isRequired
  }

  state = {
    books: [],
    query: ""
  }

  updateQuery = (query) => {
    this.setState({ query })
    BooksAPI.search(query, 20).then((results) => !results["error"] && this.updateResults(results))
  }

  updateResults = (results) => {
    this.setState({ books: results })
  }

  /*componentDidMount() {
    this.props.clearBooks()
  }*/

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={this.state.query}
              onChange={(event) =>
                this.updateQuery(event.target.value)}
              placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ul className="books-grid">
            {this.state.books.map((book) => (
              <li key={book.id} className="book-list-item">
                <Book
                  book={book}
                  shelves={this.props.shelves}
                  onSelectShelf={this.props.onSelectShelf}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Search;