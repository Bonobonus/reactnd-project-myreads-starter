import React from 'react'
//import * as BooksAPI from './BooksAPI'
import Book from './Books'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
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
    books: [ //TODO: implement BooksAPI.getAll to populate the initial state
      {
        "title": "To Kill a Mockingbird",
        "cover": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
        "authors": "Harper Lee",
        "curShelf": "currentlyReading"
      },
      {
        "title": "Ender's Game",
        "cover": "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
        "authors": "Orson Scott Card",
        "curShelf": "currentlyReading"
      },
      {
        "title": "1776",
        "cover": "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
        "authors": "David McCullough",
        "curShelf": "wantToRead"
      },
      {
        "title": "Harry Potter",
        "cover": "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
        "authors": "J. K. Rowling",
        "curShelf": "read"
      }
    ]
  }

  //TODO: setState to change a Book's Shelf

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  //TODO: implement BooksAPI.search
                  //TODO: manage routes
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              <div>
                {this.state.shelves.map((shelf) => (
                  <div className="bookshelf" key={shelf.id}>
                    <h2 className="bookshelf-title">{shelf.label}</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {this.state.books.filter((b) => b.curShelf === shelf.id).map((b) => (

                          <li key={b.title} className="book-list-item">
                            <Book book={b}/>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
              {//TODO: make this button work with Routes
              }
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
