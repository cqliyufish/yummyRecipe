import React, { useEffect, useState } from "react";
import { Wrapper } from "./Veggie.style";
import RecipeCard from "components/recipeCard/RecipeCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// fetch API
function Veggie() {
  const [veggie, setVeggie] = useState([]);

  const getRecipt = async () => {
    const localRecipes = localStorage.getItem("veggie");

    if (localRecipes) {
      console.log("local");
      setVeggie(JSON.parse(localRecipes));
    } else {
      console.log("api");
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_API_KEY}&number=9&tags=vegetarian`
      );
      const { recipes } = await api.json();
      setVeggie(recipes);
      console.log(JSON.stringify(recipes));
      localStorage.setItem("veggie", JSON.stringify(recipes));
    }
  };

  useEffect(() => {
    getRecipt();
  }, []);

  return (
    <Wrapper>
      <h3>Our Vegetarian Picks</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {veggie.map((recipe) => {
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

export default Veggie;
