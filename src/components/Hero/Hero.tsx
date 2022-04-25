import { MainHeading } from "../../globalStyles";
import {
  ButtonWrapper,
  HeroVideo,
  HeroContainer,
  HeroSection,
  HeroText,
  HeroButton,
} from "./HeroStyles";
import ReactPlayer from "react-player";
import heroVideo from "../../basketball-nba.mp4";

export default function Hero() {
  return (
    <>
      <HeroSection>
        <HeroVideo>
          <section>
            <ReactPlayer
              url={heroVideo}
              playing
              loop
              muted
              width="100%"
              height="100%"
            />
          </section>
        </HeroVideo>
        <HeroContainer>
          <MainHeading>We are NBA</MainHeading>
          <HeroText>Get to know all the NBA teams and their players</HeroText>
          <ButtonWrapper>
            <HeroButton>Teams below</HeroButton>
          </ButtonWrapper>
        </HeroContainer>
      </HeroSection>
    </>
  );
}
