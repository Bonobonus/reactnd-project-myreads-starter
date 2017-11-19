import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onSelectShelf: PropTypes.func.isRequired,
    shelves: PropTypes.array.isRequired
  }

  state = {
    s: ""
  }

  setTargetShelf = (e) => {
    this.props.onSelectShelf(this.props.book, e.target.value)
  }

  render() {
    const book = this.props.book;

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: (book["imageLinks"]) ? `url(${book["imageLinks"]["thumbnail"]})` : 'Sorry, no image'
          }}></div>
          <div className="book-shelf-changer">
            <select onChange={this.setTargetShelf.bind(this)} defaultValue="none">
              <option value="none" disabled>Move to...</option> //this is basically a static title
              {this.props.shelves.map((shelf) => (
                <option
                  key={shelf.id}
                  value={shelf.id}
                  disabled={shelf.id === book["shelf"]}>{shelf.label}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="book-title" key={book.title}>{book.title||"No title"}</div>
        <div className="book-authors" key={book.id}>{book.authors ? book.authors.join(', ') : "Unknown author"}</div>
      </div>
    )
  }
}

export default Book;