import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

import "./Search.css"

const Search = ({ handlerSearch }) => {
  const [characters, setCharacters] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();

    handlerSearch(characters);
  };
  const handlerInput = (e) => {
    setCharacters(e.target.value);
  };
  return (
    
    <Row className="justify-content-center">
     
      <Col md={6}>
      <h3 className="title-search"> ¿A que personaje querés parecerte hoy? </h3>
        <Form onSubmit={handlerSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Buscar por nombre"
              onChange={handlerInput}
            />
          </Form.Group>
          <Button type="submit">Buscar</Button>
        </Form>
      </Col>
    </Row>
  );
};

export default React.memo(Search);