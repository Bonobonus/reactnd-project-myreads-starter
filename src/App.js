import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'
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
      }
    ],
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  //TODO: setState to change a Book's Shelf
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
                  {this.state.shelves.map((shelf) => (
                    <Shelf
                      key={`${shelf.id}_shelf`}
                      id={shelf.id}
                      label={shelf.label}
                      onSelectShelf={this.onSelectShelf}/>
                  ))}
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link className="open-search-link" to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
        <Route exact path="/search" key="searchPage" render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )}/>

      </div>
    )
  }
}

export default BooksApp
