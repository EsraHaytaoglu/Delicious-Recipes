import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../store";
import { getRecipes } from "../store/actions/repiceActions";
import SingleRecipe from "./Recipe";

function RecipeList() {
  const data = useSelector((state: AppState) => state.recipes.data);
  const dispatch = useDispatch();
  console.log(data);

  useEffect(() => {
    dispatch(getRecipes());
  }, []);
  return (
    <Container fluid="xl" className="container">
      <Row xs={1} md={3}>
        {data.map((recipe, i)=> (
          <SingleRecipe key={i} recipe={recipe} />
        ))}
          
      </Row>
    </Container>
  );
}

export default RecipeList;
