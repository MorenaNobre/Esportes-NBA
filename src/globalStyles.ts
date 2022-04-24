import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const MainHeading = styled.h1`
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  margin-bottom: 2rem;
  color: red;
  width: 100%;
  letter-spacing: 4px;
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  margin: 8px;
  margin-bottom: 8px;
  margin-top: 8px;
  color: red;
  letter-spacing: 0.4rem;
  line-height: 1.06;
  text-align: center;
  width: 100%;
`;
export const TextWrapper = styled.span`
  color: red;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 4px;
  padding: 1rem;
  margin: 8px;
  margin-bottom: 8px;
  margin-top: 8px;
`;
export const Section = styled.section`
  padding: 140px 0;
  margin: 20px;
  background: red;
  width: auto;
  height: auto;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 8px;
  margin: 8px;
  width: auto;
  height: auto;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 8px;
  margin: 8px;
  width: auto;
  height: auto;
`;

export const Button = styled.button`
  border-radius: 4px;
  background: none;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  color: red;
  outline: none;
  border: 2px solid red;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:before {
    background: red;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover:before {
    height: 500%;
  }

  &:hover {
    color: black;
  }
`;

export default GlobalStyle;
