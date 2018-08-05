import React from 'react';
import Book from './components/Book.js';
import { PropTypes } from 'prop-types';


 const BookList = (props) => (
  <ol className="books-grid">
    { 
      props.list.map((book) => 
        <Book
          book={book}
          handleShelfUpdate={props.handleShelfUpdate} 
        />
      )
    }
  </ol>
)
BookList.propTypes = {
    list: PropTypes.array.isRequired,
    handleShelfUpdate: PropTypes.func.isRequired
  }
  
 export default BookList;