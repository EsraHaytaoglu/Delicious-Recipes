import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { BsClock } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "../css/like.css";
import { AppState } from "../store";
import { deleteFav, getFavs } from "../store/actions/favActions";
import { Recipe } from "../types/recipes";


function LikeList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const FavRecipes = useSelector((state: AppState) => state.favList.data);

  console.log(FavRecipes , "FavRecipes");
  
  useEffect(() => {
    dispatch(getFavs())
  }, [])


  const deleteClick = (id : Recipe['id']) => {
    dispatch(deleteFav(id));
    navigate('/favs')
  };

  return (
    <Container fluid="xl" className="container">
      <h1>My Favorite Recipes</h1>
      {FavRecipes.length === 0 && (
        <Container className="center">
        <h3 > No fav recipes </h3>
        <Link to="/"><div className="btn">Back</div></Link>
        </Container>
      ) }
      {FavRecipes.length !== 0 && 
           FavRecipes.map((favRecipe, i) => (
            <div className="container mt-5 mb-5 bg " key={i}>
            <div className="d-flex justify-content-center row">
              <div className="col-md-10">
                <div className="row p-2  border rounded">
                  <div className="col-md-3 mt-1">
                    <img
                      className="img-fluid img-responsive rounded product-image"
                      src={favRecipe.image} style={{ height: 200}}
                    />
                  </div>
                  <div className="col-md-6 mt-1">
                    <h5 className="text-danger pl-5">{favRecipe.name}</h5>
                    <div className="d-flex flex-row">
                      <div className="ratings mr-2">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <span> {favRecipe.author} </span>
                    </div>
                    <div className="mt-1 mb-1 spec-1">
                      <div>
                        {" "}
                        <BsClock /> {favRecipe.totalTime} min
                      </div>
                      <span className="text-danger pl-3">Ingredients</span>
                      <div>
                        {favRecipe.ingredients}
                        <br />
                      </div>
                    </div>
                    <div className="mt-1 mb-1 spec-1">
                      <div> {favRecipe.ingredients + "..."}</div>
                      <span className="text-danger pl-3">
                        Directions
                        <br />
                      </span>
                    </div>
                    <p className="text-justify text-truncate para mb-0">
                      {favRecipe.directions + "..."}
                      <br />
                      <br />
                    </p>
                  </div>
                  <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div className="d-flex flex-row align-items-center">
                      <h4 className="mr-1">
                        {" "}
                        <BsClock /> {favRecipe.totalTime}{" "}
                      </h4>
                      <span className="strike-text">min</span>
                    </div>
                    <h6 className="text-light">
                      {" "}
                      <FaUsers /> Serves {favRecipe.servesNumber}
                    </h6>
                    <div className="d-flex flex-column mt-4">
                      <Link to="/">
                        <button className="btn btn-primary btn-sm " type="button">
                          Back to Home Page
                        </button>
                      </Link>
                      <button
                        className="btn btn-outline-primary btn-sm mt-2"
                        type="button"
                        onClick={() => deleteClick(favRecipe.id)}
                      >
                        Remove to favs
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          )) }
      </Container>
  );
}

export default LikeList;
