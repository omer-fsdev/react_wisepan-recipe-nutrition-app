import styled from "styled-components";

export const LoginContainer = styled.div`
  background-image: url("https://picsum.photos/1600/900");
  border-radius: 50px 0 0 0;
  background-repeat: no-repeat;
  height: 80vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 550px;
  min-width: 550px;
  height: 500px;
  background-color: rgb(252, 140, 4, 0.5);
  border-radius: 30%;
  border: 2px solid #e1f1dd;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.h1`
  color: #241c14;
  font-family: "Courier New", monospace;
  font-size: 2.5rem;
`;

export const StyledInput = styled.input`
  height: 50px;
  font-size: 2rem;
  width: 250px;
  border-radius: 10px;
  /* font-family: "Girassol", sans-serif; */
  /* girasson makes all letters uppercase */
  background-color: rgba(0, 0, 0, 0.7);
  border: none;
  color: white;
  margin: 1rem;
  text-indent: 18px;
`;

export const StyledForm = styled.form`
  background: #ffc844;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  font-size: 2rem;
  font-family: "Courier New", monospace;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  color: white;
  border: 1px solid #dbd2c5;
  cursor: pointer;
  margin: 1rem;
  transition: all 0.3s ease-in;
  &:hover {
    color: #fc8c04;
    background-color: #241c14;
    font-weight: bold;
  }
`;

export const StyledImg = styled.img`
  width: 90px;
`;
