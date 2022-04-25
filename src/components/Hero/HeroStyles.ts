import styled from "styled-components";
import { Button } from "../../globalStyles";

export const HeroSection = styled.section`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

export const HeroVideo = styled.div`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  top: 0;
  position: absolute;
  z-index: -1;
  &:before {
    background: rgba(0, 0, 0, 0.5);
    content: "";
    height: 110%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }
`;

export const HeroText = styled.p`
  margin-bottom: 35px;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`;

export const HeroButton = styled(Button)`
  color: #05ea91;
  &:before {
    height: 0%;
    background: #05ea91;
  }
  &:hover:before {
    height: 500%;
    color: white;
  }
  &:hover {
    color: white;
  }
`;
