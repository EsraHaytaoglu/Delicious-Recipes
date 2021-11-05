import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppState }  from "../store"
import { getRecipes } from "../store/actions/repiceActions";
import Recipe from "./Recipe";

function RecipeList() {
  const { data: recipes } = useSelector(
    (state: AppState) => state.recipes
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
    console.log(recipes);
    

  }, []);
  return (
    <Container fluid="xl" className="container">
        <h1>recipe list </h1>
      <Row>
        <Col sm={4}><Recipe /></Col>
      </Row>
    </Container>
  );
}

export default RecipeList;
