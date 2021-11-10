import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BsSuitHeart } from  "react-icons/bs";

import "../css/detail.css"
import { AppState } from "../store";
import { getRecipe } from "../store/actions/repiceActions";


function RecipeDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const recipe = useSelector((state: AppState) => state.recipes.currentRecipe);
    console.log(recipe);
    useEffect(() => {
        dispatch(getRecipe(Number(id)));
      }, []);
    
    return (
        <div className="card-container">
  <div className="card u-clearfix">
    <div className="card-body">
      <span className="card-number card-circle subtle">{recipe.totalTime} min</span>
      <div className="right"><BsSuitHeart /></div>
      <span className="card-author subtle">{recipe.author }</span>
      <h2 className="card-title">{recipe.name}</h2>
      <div>{recipe.description}</div>
      <h3 >İçindekiler</h3>

     <div className="card-description subtle">{recipe.ingredients[0]}</div>
      <span className="card-tag card-circle subtle">{recipe.servesNumber} serves</span>
    </div>
    <img src={recipe.image} alt="" className="card-media" />
  </div>
</div>
    )
}

export default RecipeDetail
