import React from 'react'
import { Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import SearchPage from './components/SearchPage';
// import * as BooksAPI from './BooksAPI'
import './App.css'

const App = () => (
  <div className="app">
    <Route exact path='/' component={MainPage}/>
    <Route path='/search' component={SearchPage}/>
  </div>
)

export default App
