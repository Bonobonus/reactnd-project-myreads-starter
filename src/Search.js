import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Books'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class Search extends React.Component {
  static propTypes = {
    shelves: PropTypes.array.isRequired,
    onSelectShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }

  state = {
    results: [],
    query: ""
  }

  updateQuery = (query) => {
    this.setState({ query })
    BooksAPI.search(query, 20).then((results) => !results["error"] && this.updateResults(results))
  }

  updateResults = (results) => {
    //this.setState({ books: results })
    this.setState({ results: results.map((x) => Object.assign(x, this.props.books.find((y) => y.id === x.id))) })
  }

  /*componentDidMount() {
    this.state.results && this.updateQuery("")
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