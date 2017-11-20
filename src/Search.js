import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Books'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import { Debounce } from 'react-throttle'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      results: []
    }
  }

  static propTypes = {
    shelves: PropTypes.array.isRequired,
    onSelectShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }

  updateResults = (results) => {
    let res = results.map((x) => Object.assign(x, this.props.books.find((y) => y.id === x.id)))
    this.setState({ results: res.sort(sortBy("title")) })
  }

  searchAgain = (query) => {
    query && BooksAPI.search(query, 20).then((results) => !results["error"] && this.updateResults(results))
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <Debounce time="200" handler="onChange">
              <input
                type="text"
                value={this.state.query}
                onChange={(event) =>
                  this.searchAgain(event.target.value)}
                placeholder="Search by title or author"/>
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          <ul className="books-grid">
            {this.state.results.map((book) => (
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