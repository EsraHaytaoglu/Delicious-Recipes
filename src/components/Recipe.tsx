import { FunctionComponent, useEffect } from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsClock, BsBookmarkHeart } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

import "../css/recipe.css";
import { Recipe } from "../types/recipes";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store";
import { getFavs } from "../store/actions/favActions";

interface IRecipeProps {
  recipe: Recipe;
}

const SingleRecipe: FunctionComponent<IRecipeProps> = (props) => {
  const { recipe } = props;
  const dispatch = useDispatch();
  const favList = useSelector((state: AppState) => state.favList.data);
  console.log(favList, "favListtttt");
  useEffect(() => {
    dispatch(getFavs());
  }, []);

  return (
    <Col>
      <div className="ListCard">
        <Image src={recipe.image} className="header" />
        <div className="text">
          <h1 className="food">{recipe.name}</h1>
          <i className="fa fa-clock-o">
            <BsClock /> {recipe.totalTime} min{" "}
          </i>
          <i className="fa fa-users">
            <FaUsers /> Serves {recipe.servesNumber}
          </i>
          {favList !== undefined &&
            favList.map(
              (fav) =>
                fav.id === recipe.id && (
                  <i className="kalp">
                    <BsBookmarkHeart size={20} />
                  </i>
                )
            )}
          <p className="info">{recipe.directions.substring(0, 100) + "..."}</p>
        </div>
        <Link to={`/${recipe.id}`}>
          <div className="btn">Let's Cook!</div>
        </Link>
      </div>
    </Col>
  );
};

export default SingleRecipe;
