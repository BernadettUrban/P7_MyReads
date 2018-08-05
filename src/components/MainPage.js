import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookList from 'BookList';
import * as BooksAPI from './BooksAPI';

const Shelf = {
  CURRENTLY_READING: 'currentlyReading',
  WANT_TO_READ: 'wantToRead',
  READ: 'read'
}
 
class MainPage extends Component {

  state = {
    books: []
  }
   componentDidMount = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }


  render() {
    return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <BookList list={this.state.books.filter(book => book.shelf === Shelf.CURRENTLY_READING)}/>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <BookList list={this.state.books.filter(book => book.shelf === Shelf.WANT_TO_READ)}/>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <BookList list={this.state.books.filter(book => book.shelf === Shelf.READ)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 export default MainPage;