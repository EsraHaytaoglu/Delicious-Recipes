import React from 'react';
import { Route } from 'react-router-dom';


import './App.css';
import Header from './components/Header';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <React.Fragment>
      <Header />
      <RecipeList />
    </React.Fragment>
  );
}

export default App;
