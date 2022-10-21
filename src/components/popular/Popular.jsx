import React, { useEffect, useState } from "react";
import { Wrapper, Card, Gradient } from "./Popular.style";
import RecipeCard from "components/recipeCard/RecipeCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// fetch API
function Popular() {
  const [popular, setPopular] = useState([]);

  const getRecipt = async () => {
    const localRecipes = localStorage.getItem("popular");

    if (localRecipes) {
      console.log("local");
      setPopular(JSON.parse(localRecipes));
    } else {
      console.log("api");
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_API_KEY}&number=9`
      );
      const { recipes } = await api.json();
      setPopular(recipes);
      console.log(JSON.stringify(recipes));
      localStorage.setItem("popular", JSON.stringify(recipes));
    }
  };

  useEffect(() => {
    getRecipt();
  }, []);

  return (
    <Wrapper>
      <h3>Popular Picks</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}

export default Popular;
