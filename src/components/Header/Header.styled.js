import styled from "styled-components";
import { Mainlogo } from "../../assets";

export const StyledSection = styled.section`
  padding: 0;
`;

export const StyledWrapper = styled.div`
  margin: 0;
`;

export const StyledHeaderDrag = styled.div`
  width: 100%;

  &::before {
    display: table;
    content: "";
  }
`;

export const StyledInner = styled.div`
  width: 100%;
  height: 100%;
  height: 771px;
  outline: none;
`;

export const StyledBanner = styled.div`
  background: url(${Mainlogo})
    center/cover;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 991px) {
    background: url(${Mainlogo}) center/cover;
  }
`;

export const StyledAboutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 773px;
  text-decoration: none;
  :link{
    text-decoration: none !important;
  }
`;

export const StyledAbout = styled.span`
  font-family: "Graphik-Black";
  font-size: 13px;
  font-weight: bold;
  max-width: 37px;
  width: 100%;
  line-height: 1.31;
  color: #ffffff;
  text-decoration: none;
  border: 1px solid #ffffff;
  border-radius: 25px;
  padding: 22px 96px;
  text-decoration: none;
`;
