import React, { useState } from "react";

import Header from "../../components/header/Header";
import RecipeCard from "./RecipeCard";
import { HomeImg, ImgDiv, MainContainer } from "./HomeStyle";
import pan from "../../assets/images/pan.png";
import axios from "axios";

const APP_ID = "6b115e43";

const APP_KEY = "6525e4236766f637e69059bfc442415a";

const Home = () => {
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState("Breakfast");
  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    const response = await axios.get(url);
    setRecipes(response.data.hits);
  };

  return (
    <div>
      <Header setQuery={setQuery} setMeal={setMeal} getData={getData} />
      {recipes.length > 0 ? (
        <MainContainer>
          {recipes.map((i, index) => (
            <RecipeCard key={index} recipe={i.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={pan} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
