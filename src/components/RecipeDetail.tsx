import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { BsSuitHeart } from "react-icons/bs";
import { Alert, Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "../css/detail.css";
import { AppState } from "../store";
import { deleteRecipe, getRecipe } from "../store/actions/repiceActions";
import { Recipe } from "../types/recipes";
import { addFavList } from "../store/actions/favActions";
import Loading from "../utils/Loading";
import CommentList from "./CommentList";

function RecipeDetail() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const recipe = useSelector((state: AppState) => state.recipes.currentRecipe);
  const loading = useSelector((state: AppState) => state.recipes.loading);
  const navigate = useNavigate();
  const [alert, setAlert] = useState<boolean>(false);

  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    dispatch(getRecipe(Number(id)));
  }, []);

  const handleClick = (recipe: Recipe) => {
    dispatch(addFavList(recipe));
    setShow(true);
  };

  const handleDelete = (id: Recipe["id"]) => {
    dispatch(deleteRecipe(id));
    setAlert(true)
   
  };

  const handleClose = () => {
    navigate("/");
  }

  return (
    <React.Fragment>
      <Row>
        <Alert show={show} variant="success" className="container">
          <Alert.Heading>Success </Alert.Heading>
          <p>
          This recipe added your fav list.
          </p>
          <hr />
          <div className="d-flex justify-content-end ">
            <Button onClick={() => setShow(false)}>Close me</Button>
            <Link to="/favs">
              <Button>Go to Fav List</Button>
            </Link>
          </div>
        </Alert>
        {
          alert &&  (
            <Alert show={alert}  variant="success" >
            <Alert.Heading>Success!</Alert.Heading>
            <p>
              This recipe deleted.
            </p>
            <Link to="/">
              <Button onClick={() =>{handleClick(recipe)
              handleClose()} }>Go to Home Page</Button>
            </Link>
          </Alert>
          )
        }
        {!show && !loading && !alert && (
          <React.Fragment>
            <Col>
              <div className="card-container">
                <div className="card u-clearfix">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {recipe.totalTime} min
                    </span>
                    <button
                      className="right"
                      onClick={() => handleClick(recipe)}
                    >
                      Beğen <BsSuitHeart />
                    </button>
                    <span className="card-author subtle">{recipe.author}</span>
                    <h2 className="card-title">{recipe.name}</h2>
                    <div>{recipe.description}</div>
                    <h3>İçindekiler</h3>

                    {recipe.ingredients.map((ing, i) => {
                      return (
                        <div className="card-description subtle" key={i}>
                          {ing.split("")}
                        </div>
                      );
                    })}
                    <span className="card-tag card-circle subtle">
                      {recipe.servesNumber} serves
                    </span>
                  </div>
                  <img src={recipe.image} alt="" className="card-media" />
                  <div>
                    <Link to="/">
                      <button className="backBtn right"> Back </button>
                    </Link>
                    <button
                      className="delBtn"
                      onClick={() => handleDelete(recipe.id)}
                    >
                      Delete{" "}
                    </button>{" "}
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <CommentList id={recipe.id} />
            </Col>
          </React.Fragment>
        )}
        {loading && <Loading />}
      </Row>
    </React.Fragment>
  );
}

export default RecipeDetail;
