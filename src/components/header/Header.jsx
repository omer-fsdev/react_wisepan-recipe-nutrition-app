import React from "react";
import {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  // MainHeader,
  Select,
} from "./HeaderStyle";

const Header = ({ setQuery, setMeal, getData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <HeaderContainer>
      {/* <MainHeader>RECIPE&NUTRITION APP</MainHeader> */}
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          type="text"
          placeholder="search..."
          onChange={(e) => setQuery(e.target.value)}
        ></FoodInput>
        <Select
          name="mealTypes"
          id="mealTypes"
          onChange={(e) => setMeal(e.target.value)}
        >
          <option value="breakfast">Breakfast</option>
          <option value="brunch">Brunch</option>
          <option value="lunch">Lunch/Dinner</option>
          <option value="snack">Snack</option>
          <option value="teatime">Tea Time</option>
        </Select>
        <Button type="submit">Search</Button>
      </FormContainer>
    </HeaderContainer>
  );
};
export default Header;
