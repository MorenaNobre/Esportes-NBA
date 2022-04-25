import {
  TeamsContainer,
  OurTeams,
  TeamWrapper,
  TeamCard,
  TeamLogo,
  TeamName,
} from "./TeamsNBAStyles";

export default function TeamsNBA() {
  return (
    <TeamsContainer id="teams">
      <OurTeams>Our Teams</OurTeams>
      <TeamWrapper>
        <TeamCard>
          <TeamLogo />
          <TeamName>Atlanta Hawks</TeamName>
        </TeamCard>
        <TeamCard>
          <TeamLogo />
          <TeamName>Boston Celtics</TeamName>
        </TeamCard>
        <TeamCard>
          <TeamLogo />
          <TeamName>Brooklyn Nets</TeamName>
        </TeamCard>
        <TeamCard>
          <TeamLogo />
          <TeamName>Charlotte Hornets</TeamName>
        </TeamCard>
      </TeamWrapper>
    </TeamsContainer>
  );
}
