import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./cards.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { products } from "../../../Data/Data";
const Cards = (Title, Text, Img) => {
  return (
    <Card className="Card">
      <Card.Img variant="top" src={Img} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{Text}</Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
