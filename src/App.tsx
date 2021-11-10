import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';


function App() {
  return (
    <React.Fragment>
       <Header />
       <Routes>
        <Route path="/"  element={<RecipeList />} />
        <Route path="/:id"  element={<RecipeDetail />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
