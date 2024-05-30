import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GlobalStyles } from "../GlobalStyle.styled";

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #000000 no-repeat cover;
  position: fixed;
  width: 100%;
  top: 0;
  height: 100%;
  transition: 0.4s ease-in-out;
`;

export const StyledContainer = styled.div`
  max-width: 1128px;
  width: 100%;
  margin: 0 auto;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const StyledCloseWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
  cursor: pointer;
`;

export const StyledCloseIcon = styled.div`
  margin: 0 5px 0 0;
  max-width: 30px;
  width: 100%;
  height: 30px;
  color: #ffffff;
`;

export const StyledCloseText = styled.div`
  font-family: "Graphik";
  font-size: 18px;
  line-height: 5.61;
  text-align: left;
  color: #f9f9f9;
  margin: 0 0 0 15px;
  position: relative;
  top: -2px;
`;

export const StyledImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 20px 0 0 360px;
`;

export const StyledImage = styled.img`
  max-width: 202px;
  width: 100%;
  height: auto;
  display: block;

  @media screen and (max-width: 767px) {
    margin: -33px 0 0 -180px;
    max-width: 150px;
    width: 100%;
  }
`;

export const StyledFullNavbarListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

export const StyledFullNavbarList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-around;
    width: 100%;
    list-style: none;
    align-items: center;
    margin: 91px 0 0 -14px;
  }

  li {
    font-family: "Graphik-Bold";
    font-size: 45px;
    font-weight: bold;
    line-height: 1.73;
    text-align: left;
    color: #ffffff;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:before {
      content: "";
      background-color: #d8cf91;
      height: 4px;
      width: 0;
      transition: 0.4s ease-in-out;
      position: absolute;
      bottom: 60px;
      left: -90px;
    }

    &:hover:before {
      width: 20%;
    }

    &:hover {
      color: #ffffff;
      font-size: 50px;
      margin: 20px;
    }
  }

  @media screen and (max-width: 767px) {
    margin: -40px 0 0;

    ul {
      flex-direction: column;
      align-items: flex-start;
      margin: 0 0 0 -10px;
    }

    li {
      font-size: 42px;
    }
  }
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 150px -15px 0 -15px;

  @media screen and (max-width: 767px) {
    margin: 80px 0 0;
  }
`;

export const StyledSocialMedia = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 767px) {
    margin: -20px 0 0;
  }
`;

export const FacebookIcon = styled(FaFacebook)`
  margin: 0 23px 50px;
  color: #ffffff;
  height: 50px;
  width: 50px;

  @media screen and (max-width: 767px) {
    height: 28px;
    max-width: 28px;
    width: 100%;
  }
`;

export const InstagramIcon = styled(FaInstagram)`
  margin: 0 23px 50px;
  color: #e4405f;
  height: 50px;
  width: 50px;

  @media screen and (max-width: 767px) {
    height: 28px;
    max-width: 28px;
    width: 100%;
  }
`;
