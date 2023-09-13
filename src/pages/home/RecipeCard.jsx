import { useNavigate } from "react-router-dom";
import { Button, Cards, RecipeHeader, RecipeImage } from "./HomeStyle";

const RecipeCard = ({ recipe }) => {
  // console.log(recipe)
  let navigate = useNavigate();
  return (
    <Cards>
      <RecipeHeader>{recipe.label}</RecipeHeader>

      <RecipeImage src={recipe.image} />
      <Button
        onClick={() => {
          navigate("/details", { state: { recipe } });
        }}
      >
        Details
      </Button>
    </Cards>
  );
};

export default RecipeCard;
