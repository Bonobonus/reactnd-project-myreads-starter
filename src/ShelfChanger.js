import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShelfChanger extends Component {
  static propTypes = {
    curShelf: PropTypes.string.isRequired,
    onSelectShelf: PropTypes.func.isRequired
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
    ]
  }

  render() {
    return(
      <div className="book-shelf-changer">
        <select>
          <option value="none" disabled>Move to...</option> //this is basically a static title
            {this.state.shelves.map((shelf) => (
              <option key={shelf.id} disabled={shelf.id === this.props.id}>{shelf.label}</option>
            ))}
        </select>
      </div>
    )
  }
}

export default ShelfChanger;