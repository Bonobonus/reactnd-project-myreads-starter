import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Library from './Library'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  constructor(props) {
    super(props)
    this.onSelectShelf = this.onSelectShelf.bind(this)
  }

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
    books: []
  }

  getBooks() {
    BooksAPI.getAll().then((books) => (
      this.setState({ books })
    ))
  }

  componentDidMount() {
    this.getBooks()
  }

  onSelectShelf(book, shelf) {
    BooksAPI.update(book, shelf).then((books) => this.getBooks())
  }


  render() {
    return (
      <div className="app">
        <Switch>
        <Route exact path="/" key="library" render={() => (
          <Library
            onSelectShelf={this.onSelectShelf}
            shelves={this.state.shelves}
            books={this.state.books}/>
        )}/>
        <Route exact path="/search" key="search" render={({ history }) => (
          <Search
            onSelectShelf={this.onSelectShelf}
            shelves={this.state.shelves}
            books={this.state.books}/>
        )}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
