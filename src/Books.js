import React from 'react'
import PropTypes from 'prop-types'

const Book = props => {
  Book.propTypes = {
    book: PropTypes.object.isRequired,
    onSelectShelf: PropTypes.func.isRequired,
    shelves: PropTypes.array.isRequired
  }

  const setTargetShelf = e => (props.onSelectShelf(props.book, e.target.value))

  return(
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{
          width: 128,
          height: 193,
          backgroundImage: (props.book["imageLinks"]) ? `url(${props.book["imageLinks"]["thumbnail"]})` : 'Sorry, no image'
        }}></div>
        <div className="book-shelf-changer">
          <select onChange={setTargetShelf.bind(this)} defaultValue={props.book["shelf"] || "none"}>
            <option value="none" disabled>Move to...</option> //this is basically a static title
            {props.shelves.map((shelf) => (
              <option
                key={shelf.id}
                value={shelf.id}
                disabled={shelf.id === props.book["shelf"]}>{shelf.label}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="book-title" key={props.book.title}>{props.book.title||"No title"}</div>
      <div className="book-authors" key={props.book.id}>{props.book.authors ? props.book.authors.join(', ') : "Unknown author"}</div>
    </div>
  )
}


export default Book;