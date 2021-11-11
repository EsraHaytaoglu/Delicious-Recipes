import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import LikeList from './components/LikeList';
import CommentForm from './components/CommentForm';

function App() {
  return (
    <React.Fragment>
      
       <Routes>
        <Route path="/"  element={<RecipeList />} />
        <Route path="/:id"  element={<RecipeDetail />} />
        <Route path="/favs"  element={<LikeList />} />
        <Route path="/addComment"  element={<CommentForm />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
