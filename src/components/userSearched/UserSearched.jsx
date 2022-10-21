import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "components/recipeCard/RecipeCard";
import styled from "styled-components";
function UserSearched() {
  const [cuisine, setCuisine] = useState([]);
  const param = useParams();

  const getCuisin = async (name) => {
    const localRecipes = localStorage.getItem(name);
    if (localRecipes) {
      const data = JSON.parse(localRecipes);
      setCuisine(data);
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOON_API_KEY}&query=${name}`
      );

      const recipes = await data.json();
      console.log(recipes);
      localStorage.setItem(name, JSON.stringify(recipes.results));
      setCuisine(recipes.results);
    }
  };
  useEffect(() => {
    getCuisin(param.search);
  }, [param.search]);
  return (
    <Grid>
      {cuisine.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </Grid>
  );
}
const Grid = styled.div`
  display: grid;
  margin-top: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
`;
export default UserSearched;
