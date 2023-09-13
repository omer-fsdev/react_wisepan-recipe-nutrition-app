import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: row; */
  justify-content: center;
  /* height: fit-content; */
  background-color: #ffc844;
`;

export const Cards = styled.div`
  height: 400px;
  background: #241c14;
  color: #dbd2c5;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Courier New", monospace;
  margin: 10px;
  box-shadow: 8px 8px 5px #fc8c04;
  &:hover {
    box-shadow: 8px 8px 5px #dbd2c5;
    transition: all 0.3s ease-in;
  }
`;

export const RecipeHeader = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  height: 23%;
`;
export const RecipeImage = styled.img`
  height: 200px;
  border-radius: 10px;
  border: 1px solid #dbd2c5;
`;

export const Button = styled.button`
  background-color: #fc8c04;
  padding: 5px;
  /* outline: none; */
  width: 200px;
  border: 1px solid #dbd2c5;
  margin: 20px 0 10px 0;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.3rem;
  font-family: "Courier New", monospace;
  color: #241c14;
  font-weight: bold;
  transition: all 0.3s ease-in;
  &:hover {
    color: #fc8c04;
    background-color: #dbd2c5;
  }
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
`;

export const HomeImg = styled.img`
  width: 80%;
  max-width: 750px;
`;
