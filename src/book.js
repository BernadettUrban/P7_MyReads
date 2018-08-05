import React from 'react';
import { PropTypes } from 'prop-types';

 const Book = (props) => {
  const { book: { imageLinks,  title, authors, shelf }, handleShelfUpdate } = props;
  const thumbnail = imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : null;
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${thumbnail}')`}}></div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={(event => handleShelfUpdate(props.book, event.target.value))}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors && authors.join(', ')}</div>
      </div>
    </li>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleShelfUpdate: PropTypes.func.isRequired
}

 export default Book;