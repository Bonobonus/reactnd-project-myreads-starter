import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'
import Book from './Books'
import './App.css'

class BooksApp extends React.Component {
  state = {
    shelves: [
      {
        "id": "currentlyReading",
        "label": "Currently Reading"
      },
      {
        "id": "wantToRead",
        "label": "Want to Read"
      },
      {
        "id": "read",
        "label": "Read"
      },
      {
        "id": "none",
        "label": "None"
      }
    ],
    books: [],
    query: ""
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateQuery = (query) => {
    BooksAPI.search(query, 20).then((results) => {
      (!results["error"]) ? (
        this.setState({ query: query, books: results} )
      ) : (
        this.setState({ query: query, books: [] })
      )
    })
  }

  clearBooks() {
    this.setState({ books: [] })
  }

  onSelectShelf(bookId, shelf) {
    //BooksAPI.update(bookId, shelf)
  /*  this.setState((state) => ({
      books: state.books.map((b) => {
        if (b.id === bookId) b.shelf = shelf
      })
    })*/
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" key="mainPage" render={() => (
          <div>
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  {this.state.shelves.filter((shelf) => shelf.id !== "none").map((shelf) => (
                    <Shelf
                      key={`${shelf.id}_shelf`}
                      id={shelf.id}
                      label={shelf.label}
                      onSelectShelf={this.onSelectShelf}
                      booksInShelf={this.state.books.filter((book) => book.shelf === shelf.id)}
                      shelves={this.state.shelves}/>
                  ))}
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link className="open-search-link" to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
        //TODO: Make the search screen its own component
        <Route exact path="/search" key="searchPage" render={() => (
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
                      onSelectShelf={this.onSelectShelf}/>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}/>

      </div>
    )
  }
}

export default BooksApp
