import React from 'react'
import ListFilms from './components/ListFilms';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  return (
    <>
      <Pagination />
      <ListFilms />
    </>
  );
}

export default App;
