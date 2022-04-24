import { Container, MainHeading } from "../../globalStyles";
import { HeroVideoContainer, HeroSection, HeroText, HeroButton } from "./HeroStyles";
import ReactPlayer from "react-player";
import heroVideo from "../../basketball-nba.mp4";

export default function Hero() {
  return (
    <>
      <HeroSection>
        <HeroVideoContainer>
          <ReactPlayer
            url={heroVideo}
            playing
            loop
            muted
            width="100%"
            height="100%"
          />
        </HeroVideoContainer>
        <Container>
          <MainHeading>We are NBA</MainHeading>
          <HeroText>Get to know all the NBA teams and their players</HeroText>
          <HeroButton>Teams below</HeroButton>
        </Container>
      </HeroSection>
    </>
  );
}
