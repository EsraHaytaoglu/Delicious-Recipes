import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { BsSuitHeart } from "react-icons/bs";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
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
  console.log(recipe.author);
  

  return (
    <Container fluid="xl" className="container">
      
        <Alert show={show}  className="alert">
          <Alert.Heading>Success
             </Alert.Heading>
          <p>
          This recipe added your fav list.
          </p>
          <hr />
          <div className="d-flex justify-content-end ">
            <span onClick={() => setShow(false)} className="alertSpan mr-2" >Close me</span>
            <Link to="/favs">
              <span className="alertSpan mb-0">Go to Fav List</span>
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
              handleClose()} } className="deleteAlert">Go to Home Page</Button>
            </Link>
          </Alert>
          )
        }
        {!show && !loading && !alert && recipe.author  && (
          <React.Fragment>
              <div className="card-container">
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle h6">
                      {recipe.totalTime} min
                    </span>
                    <div
                      className="right"
                      onClick={() => handleClick(recipe)}
                    >
                       <BsSuitHeart  size={28} color="black"/>
                    </div>
                    <span className="card-author subtle">{recipe.author}</span>
                    <h2 className="card-title">{recipe.name}</h2>
                    <div>{recipe.description}</div>
                    <h3>İçindekiler</h3>
                        <div className="card-description subtle" >
                          {recipe.ingredients}
                        </div>
                    <span className="card-tag card-circle subtle h1">
                      {recipe.servesNumber} serves
                    </span>
                  </div>
                  <img src={recipe.image} alt="" className="card-media" />
                  <div>
                    <Link to="/">
                      <button className="backBtn"> Back </button>
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
              <CommentList id={recipe.id} />
           
          </React.Fragment>
        )}
        {
          !recipe.author && !loading && !alert && (
            <Container className="center mt-5">
        <h3 > This recipe not found.</h3>
        <Link to="/"><div className="btn">Back</div></Link>
        </Container>
          )
        }
        {loading && <Loading />}
      
    </Container>
  );
}

export default RecipeDetail;
