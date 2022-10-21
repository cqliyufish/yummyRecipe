import React from "react";
import { Card, Gradient, Title } from "./RecipeCard.style";
import { useNavigate } from "react-router-dom";
function RecipeCard({ recipe }) {
  const { title, image, id } = recipe;
  const navigate = useNavigate();
  const handleClick = (e) => {
    console.log(id);
    navigate("/recipe/" + id);
  };
  return (
    <Card onClick={handleClick}>
      <img src={image} alt={title} />
      <Gradient />
      <Title>{title}</Title>
    </Card>
  );
}

export default RecipeCard;
