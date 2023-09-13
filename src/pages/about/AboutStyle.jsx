import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  height: calc(100% - 100px);
  line-height: 1.6;
  background-color: #241c14;
  color: #d9d7d7;
  border-radius: 2000px 2000px 100px 100px;
  border: 6px solid #d9d7d7;
  font-family: 'Courier New', Courier, monospace;
  span {
    color: #fc8c04;
    font-family: "Girassol", sans-serif;
    font-size: 3rem;
    font-style: italic;
    
  }
`;
export const StyledImage = styled.img`
  width: 200px;
  margin: 2rem;
  margin: 2rem auto;
`;

export const HeaderContainer = styled.div`
  background-color: #544c49;
  border-radius: 1000px 150px 1000px 150px;
  font-size: 1.6rem;
  
  margin-top: 7rem;
`;

export const InfoContainer = styled.div`
  text-align: center;
  margin: 0 10px;
  max-width: 1000px;
  
  padding: 25px;
  padding-top: 0;
  border-radius: 2000px;
  /* a {
    color: #fc8c04;
  } */
`;
