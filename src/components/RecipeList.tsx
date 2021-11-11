import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../store";
import { getRecipes } from "../store/actions/repiceActions";
import Loading from "../utils/Loading";
import Header from "./Header";
import SingleRecipe from "./Recipe";

function RecipeList() {
  const data = useSelector((state: AppState) => state.recipes.data);
  const loading = useSelector((state: AppState) => state.recipes.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, []);
  return (
    <React.Fragment>
    <Header />
    {loading && (
      <Loading />
    )}
    
    <Container fluid="xl" className="container">
      <Row xs={1} md={3}>
        {data.map((recipe, i)=> (
          <SingleRecipe key={i} recipe={recipe} />
        ))}
          
      </Row>
    </Container>
    </React.Fragment>
  );
}

export default RecipeList;
