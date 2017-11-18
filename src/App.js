import React from 'react'
import { Route, Switch } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Library from './Library'
import Search from './Search'
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
    ]
  }

  getBooks = (books) => {
    this.setState({ books })
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
        //<Switch>
        <Route exact path="/" key="library" render={() => (
          <Library
            onSelectShelf={this.onSelectShelf}
            shelves={this.state.shelves}/>
        )}/>
        <Route exact path="/search" key="search" render={() => (
          <Search
            onSelectShelf={this.onSelectShelf}
            shelves={this.state.shelves}/>
        )}/>
        //</Switch>
      </div>
    )
  }
}

export default BooksApp
