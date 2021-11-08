import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store";
import { getRecipes } from "../store/actions/repiceActions";
import { Recipe } from "../types/recipes";
import SingleRecipe from "./Recipe";

function RecipeList() {
  const data = useSelector((state: AppState) => state.recipes.data);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getRecipes());
    console.log(data.feed );
  }, []);
  return (
    <Container fluid="xl" className="container">
      <h1>recipe list </h1>
      <Row>
        <Col sm={4}>
          <SingleRecipe />
        </Col>
      </Row>
    </Container>
  );
}

export default RecipeList;
