import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  background: #fcb812;
  border-radius: 50px 0 0 0;
`;

// export const MainHeader = styled.h2`
//   margin-top: 1rem;
//   font-size: 3rem;
//   background-color: yellow;
// `;

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 2px solid #dbd2c5;
  border-radius: 10px;
  background-color:#241c14;
 margin: 70px auto;
  padding: 10px;
  gap: 6px;
`;

export const FoodInput = styled.input`
  height: 4rem;

  border: none;
  border-radius: 5px;
  text-indent: 15px;
  font-size: 2rem;
  background-color: #dbd2c5;
  color: #241c14;
  font-family: "Courier New", monospace;
  font-weight: bold;
`;

export const Button = styled.button`
  background-color: #fc8c04;
  color: #241c14;
  padding: 5px;
  /* outline: none; */
  height: 4rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 2rem;
  font-family: "Courier New", monospace;
  font-weight: bold;

  &:hover {
    background-color: #241c14;
    color: #fc8c04;
    transition: all 0.3s ease-in;
    border: 1px solid #dbd2c5;
  }
`;

export const Select = styled.select`
  background-color: #ffc844;
  border-radius: 5px;
  padding: 5px;
  height: 4rem;
  border: none;
  font-size: 2rem;
  font-family: "Courier New", monospace;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
 
  &:hover {
    transition: all 0.3s ease-in;
    border: 1px solid #dbd2c5;
  }
`;
