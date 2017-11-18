import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onSelectShelf: PropTypes.func.isRequired,
    shelves: PropTypes.array.isRequired
  }

  setTargetShelf= (e) => {
    //e.preventDefault()
    BooksAPI.update(this.props.book, e.target.value)
  }

  render() {
    const book = this.props.book;

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book["imageLinks"]["thumbnail"]})`
          }}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>Move to...</option> //this is basically a static title
              {this.props.shelves.map((shelf) => (
                <option
                  key={shelf.id}
                  disabled={shelf.id === book["shelf"]}
                  onClick={this.setTargetShelf}>{shelf.label}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="book-title" key={book.title}>{book.title||"No title"}</div>
        <div className="book-authors" key={book.authors.join("_")||book.id+"_no_author"}>{book.authors.join(', ')||"No authors"}</div>
      </div>
    )
  }
}

export default Book;