import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import LikeList from './components/LikeList';
import CommentForm from './components/CommentForm';
import RecipeForm from './components/RecipeForm';
import Header from './components/Header';

function App() {
  return (
    <React.Fragment>
      <Header />
       <Routes>
        <Route path="/"  element={<RecipeList />} />
        <Route path="/:id"  element={<RecipeDetail />} />
        <Route path="/favs"  element={<LikeList />} />
        <Route path="/addComment"  element={<CommentForm />} />
        <Route path="/add"  element={<RecipeForm />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
