import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import {useNavigate} from 'react-router-dom';

import { AppState } from "../store";
import { addComment } from "../store/actions/commentActions";
import { Link } from "react-router-dom";
import "../App.css"


function CommentForm() {
  const recipe = useSelector((state: AppState) => state.recipes.currentRecipe);
  const recipeId = recipe.id;
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik ({
    initialValues: {
      author: "",
      body: "",
    },
     onSubmit: (values)  => {
       const form ={author: values.author, body: values.body, postId:recipeId }
       console.log(form);
       dispatch(addComment(form));
       setShow(true)

    },
  });
  
  const close = () => {
    setShow(false);
    navigate(`/${recipeId}`)

  }
  
  return (
    <Container fluid="xl" className="container ">
      <Alert show={show} variant="success"  className="container">
      <Alert.Heading>Success </Alert.Heading>
        <p>Your comment saved.</p>
        <div className="d-flex justify-content-end">
          <Button onClick={close}>Close</Button>
        </div>
      </Alert>
      { !show && (
        <div className="comment-container card u-clearfix mx-auto">
        <Form onSubmit={formik.handleSubmit}>
          <h3>Comment Form </h3>
          <Form.Group className="mb-3">
            <Form.Label>Author Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="esra"
              id="author"
              name="author"
              onChange={formik.handleChange}
              value={formik.values.author}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Comment content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              id="body"
              name="body"
              onChange={formik.handleChange}
              value={formik.values.body}
            />
          </Form.Group>
          <Button className="ml-0" type="submit">
            Submit
          </Button>
          <Link to={`/${recipeId}`}>
            <Button className="ml-4 ">Back</Button>
          </Link>
        </Form>
      </div>
      )}
    </Container>
  );
}

export default CommentForm;
