import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Book from './components/Book';
import BookList from './components/BookList';

class SearchPage extends Component {
    state = {
        maxResults: 20,
        results: []
      }
       searchBooks = (event) => {
        const query = event.target.value.trim();
        if (query.length >= 3) {
          BooksAPI.search(query, this.state.maxResults)
            .then(results => {
              this.setState({ results })
            })
        }
      }


  render() {
    return (
        <div className="search-books">
        <div className='search-books-bar'>
          <Link className="close-search" to='/'/>
          <div className='search-books-input-wrapper'>
            <input 
                type='text' 
                placeholder='Search by title or author'
                value={this.state.query}
                onChange={this.searchBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
            <BookList list={this.state.results}/>
        </div>
      </div>
    )
  }
}
 export default SearchPage;