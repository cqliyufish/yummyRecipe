import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import "./Recipe.style.css";
function Recipe() {
  const param = useParams();
  const [recipe, setRecipe] = useState({});
  const [activeBtn, setActiveBtn] = useState("instructions");

  const getCuisin = async (id) => {
    const localRecipes = localStorage.getItem(id);
    if (localRecipes) {
      console.log("local");
      const data = JSON.parse(localRecipes);
      console.log(data);
      setRecipe(data);
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_SPOON_API_KEY}`
      );
      console.log("api");
      console.log(data);
      const recipe = await data.json();
      console.log(recipe);
      localStorage.setItem(id, JSON.stringify(recipe));
      setRecipe(recipe);
    }
  };

  useEffect(() => {
    getCuisin(param.id);
    console.log(param);
  }, [param.id]);

  return (
    <DetailWrapper>
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <Info>
        <Button
          className={activeBtn === "instructions" ? "active" : " "}
          onClick={() => setActiveBtn("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeBtn === "ingredients" ? "active" : " "}
          onClick={() => setActiveBtn("ingredients")}
        >
          Ingredients
        </Button>
        {activeBtn === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
            <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }} />
          </div>
        )}
        {activeBtn === "ingredients" && (
          <ul>
            {recipe.extendedIngredients.map((item) => (
              <li key={item.id}>{item.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin: 10rem auto;
  width: 80%;
  display: flex;
  div {
    flex: 1;
  }
  .active {
    color: white;
    background: linear-gradient(35deg, #494949, #313131);
  }
  h2 {
    margin-bottom: 2rem;
  }
  h3,
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  img {
    width: 20rem;
    height: 20rem;
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  flex: 1;
`;
export default Recipe;
