import React from "react";
import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImgContainer,
  IngredContainer,
  Nutrients,
} from "./DetailsStyle";
import vegetables from "../../assets/images/recipe.png";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  //! send with useNavigate, welcome with useLocation
  // navigate("/details", { state: { i } });
  const selectedRecipe = location.state.recipe;
  console.log(selectedRecipe);
  return (
    <DetailContainer>
      <HeaderContainer>
        <div>
          <h1> {selectedRecipe.label}</h1>
          {selectedRecipe.dietLabels.map((i) => (
            <span>#{i} </span>
          ))}
        </div>

        <img src={vegetables} alt="vegetables" />
      </HeaderContainer>
      <DetailPart>
        <div>
          {" "}
          <ImgContainer>
            <img src={selectedRecipe.image} alt={selectedRecipe.label} />
          </ImgContainer>
          <IngredContainer>
            <h1>Ingredients</h1>
            {selectedRecipe.ingredientLines.map((item, indeks) => (
              <div key={indeks}>
                <p>
                  {indeks + 1}) <span>{item}</span>
                </p>
              </div>
            ))}
          </IngredContainer>
        </div>
        <Nutrients>
          <h1>Nutrients</h1>
          <p>
            {selectedRecipe.totalNutrients.ENERC_KCAL.label} :{" "}
            <span>
              {Math.round(selectedRecipe.totalNutrients.ENERC_KCAL.quantity)}
              {selectedRecipe.totalNutrients.ENERC_KCAL.unit}
            </span>
          </p>
          <hr />
          {selectedRecipe.digest.slice(0, 4).map((item, index) => (
            <div>
              <p key={index}>
                {item.label} :{" "}
                <span>
                  {Math.round(item.total)}
                  {item.unit}
                </span>
              </p>
              <hr />
            </div>
          ))}
          <p>
            {selectedRecipe.totalNutrients.CA.label} :{" "}
            <span>
              {" "}
              {Math.round(selectedRecipe.totalNutrients.CA.quantity)}
              {selectedRecipe.totalNutrients.CA.unit}
            </span>
          </p>
          <hr />
          <p>
            {selectedRecipe.totalNutrients.CHOCDF.label} :{" "}
            <span>
              {Math.round(selectedRecipe.totalNutrients.CHOCDF.quantity)}
              {selectedRecipe.totalNutrients.CHOCDF.unit}
            </span>
          </p>
          <hr />
          <p>
            {selectedRecipe.totalNutrients.CHOLE.label} :{" "}
            <span>
              {Math.round(selectedRecipe.totalNutrients.CHOLE.quantity)}
              {selectedRecipe.totalNutrients.CHOLE.unit}
            </span>
          </p>
          <hr />

          <p>
            Total Weight : <span>{Math.round(selectedRecipe.totalWeight)}</span>
          </p>
          <hr />
          <p>
            Calories : <span>{Math.round(selectedRecipe.calories)}</span>
          </p>
          <hr />
        </Nutrients>
      </DetailPart>
    </DetailContainer>
  );
};

export default Details;
