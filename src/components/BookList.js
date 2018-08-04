import React from 'react';
import Book from './components/Book.js';
import { PropTypes } from 'prop-types';


 const BookList = (props) => (
  <ol className="books-grid">
    { 
      props.list.map((book) => 
        <Book
          imgLink={book.imageLinks}
          key={book.id}
          title={book.title}
          authors={book.authors}  
        />
      )
    }
  </ol>
)
BookList.propTypes = {
    list: PropTypes.array.isRequired
  }
  
 export default BookList;