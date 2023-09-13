import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 0 0 0 50px;
  font-size: 2rem;
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const MenuLink = styled(Link)`
  background-color: #fc8c04;
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #241c14;
  transition: all 0.3s ease-in;
  font-size: 2rem;
  font-family: "Georgia", serif;
  &:hover {
    color: #fc8c04;
    background-color: #241c14;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    border: 1px solid navy;
    border-radius: 10px;
    width: 91%;
  }
`;
export const Menu = styled.div`
  background: #ffc844;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* depends outer div style. without that would be under the banner */
  @media (max-width: 768px) {
    border: 5px solid black;
    margin: 0 40px;
    border-radius: 20px;
    overflow: hidden;
    /* display: none; */
    /* hides all, hamburger click wouldnt work. use hidden. */
    flex-direction: column;
    width: 100%;
    height: 200px;

    /* props, displaying=true */
    /* max-height: ${({ displaying }) => (displaying ? "300px" : "0")}; */

    /*  2. way */
    display: ${({ displaying }) => (displaying ? "flex" : "none")};
    /* hamburger click -> 300 px. next click -> no display */
    /* if wrote max-height:300px, would display always */
  }

  a {
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #241c14;
    transition: all 0.3s ease-in;
    font-size: 2.3rem;
    font-family: "Georgia", serif;
    &:hover {
      color: #ffc844;
      font-weight: bold;
      background-color: #241c14;
    }
    @media (max-width: 768px) {
      border: 1px solid navy;
      border-radius: 10px;
      width: 91%;
    }
  }
`;
export const Logo = styled(Link)`
  text-decoration: none;

  img {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  /* i {
    font-family: "Girassol", sans-serif;
  } */
  /* span {
    font-family: "Girassol", sans-serif;
  } */
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  margin: 20px 0;
  @media (max-width: 768px) {
    display: flex;
  }
`;
