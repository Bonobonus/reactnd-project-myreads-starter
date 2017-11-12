import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class ShelfChanger extends Component {
  /**
  static propTypes = {
    curShelf: PropTypes.string.isRequired,
    onShelfSelection: PropTypes.func
  };
  //TODO: get current shelf as a prop
  //TODO: get func to send new desired shelf to parent
  */

  shelves = [ //TODO: refactor this, should come from above
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
  ];

  render() {
    //const { shelves } = this.props;

    return(
      <div className="book-shelf-changer">
        <select>
          <option value="none" disabled>Move to...</option> //this is basically a static title
          {this.shelves.map((shelf) => (
            //TODO: add checkmark for current selected shelf and disable it
            <option key={shelf.id}>{shelf.label}</option>
          ))}
        </select>
      </div>
    )
  }
}

export default ShelfChanger;