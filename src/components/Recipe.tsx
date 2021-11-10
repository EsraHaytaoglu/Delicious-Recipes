
import { FunctionComponent } from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsClock } from "react-icons/bs";
import { FaUsers } from 'react-icons/fa';



import "../css/recipe.css";
import { Recipe } from "../types/recipes";

interface IRecipeProps {
  recipe: Recipe
}

const SingleRecipe: FunctionComponent<IRecipeProps> = (props) => {
  const { recipe } =props;
  return (
    <Col>
      <div className="card">
        <Image
          src={recipe.image}
          className="header"
        />
        <div className="text">
          <h1 className="food">{recipe.name}</h1>
          <i className="fa fa-clock-o"><BsClock />  {recipe.totalTime} min </i>
          <i className="fa fa-users">
            <FaUsers /> Serves {recipe.servesNumber}
          </i>
          <p className="info">
            {recipe.directions[0] + "..."}
            
          </p>
        </div>
        <Link to={`/${recipe.id}`}>
        <div className="btn">
          Let's Cook!
        </div>
        </Link>
      </div>
    </Col>
  );
};

export default SingleRecipe;
