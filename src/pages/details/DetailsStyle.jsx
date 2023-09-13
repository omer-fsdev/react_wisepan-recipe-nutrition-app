import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fcb812;
  border-radius: 50px 0 0 50px;
  min-height: calc(100vh - 75px);
  /* height: fit-content; */
  padding: 5px;
  font-family: "Courier New", monospace;
`;

export const DetailPart = styled.div`
  display: flex;
  /* flex-direction: row; */
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: stretch;
  margin: 25px;
  margin-top: 0;
  border: 2px solid #fc8c04;
  border-radius: 0 0 0 50px;
  font-family: "Georgia", serif;
  background-color: white;
  padding: 90px 0;
  /* height: calc(100vh - 300px); */
  div {
  }
  @media (max-width: 1250px) {
    border: 1px solid #fc8c04;
  }
`;

export const ImgContainer = styled.div`
  background-color: #d9d7d7;
  padding: 10px;
  border-radius: 30px;
  margin: auto;
  width: 350px;

  img {
    border-radius: 20px;
    border: 1px solid #241c14;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const HeaderContainer = styled.div`
  background-color: #241c14;
  color: #dbd2c5;
  border: 2px solid #d9d7d7;
  border-radius: 50px 0 0 0;
  display: flex;
  justify-content: space-evenly;
  margin: 25px;
  align-items: center;
  padding: 20px;

  h1 {
    font-size: 3rem;
    text-align: center;
    text-transform: capitalize;
  }
  span {
    font-style: italic;
    font-size: 2rem;
    color: #ffc844;
    padding-left:20px;
    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      padding-left: 0;
    }
  }

  img {
    height: 120px;
    margin: 10px 0;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const IngredContainer = styled.div`
  max-width: 500px;
  font-size: 2rem;
  margin: 2rem;

  h1 {
    color: #544c49;
    text-align: center;
  }
  span {
    color: #fc8c04;
  }
`;

export const Nutrients = styled.div`
  width: 400px;
  font-size: 1.8rem;

  h1 {
    color: #544c49;
    text-align: center;
  }
  span {
    color: #fc8c04;
  }
  p {
    display: flex;
    justify-content: space-between;
  }
`;
