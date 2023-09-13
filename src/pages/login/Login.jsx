import React, { useState } from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyle";
import cookkid from "../../assets/images/cookkid.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState();
  const [passw, setPassw] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", user);
    localStorage.setItem("passw", passw);
    navigate("/home");
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={cookkid} />
        <Header>Welcome to Wise-Pan</Header>
        {/* <Header>{"<WisePan/>"}Recipe</Header> */}
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="Username"
            required
            onChange={(e) => setUser(e.target.value)}
          />

          <StyledInput
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassw(e.target.value)}
          />

          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
