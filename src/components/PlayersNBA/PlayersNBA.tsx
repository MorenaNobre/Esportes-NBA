import {
  PlayersContainer,
  OurPlayers,
  PlayerWrapper,
  PlayerCard,
  PlayerLogo,
  PlayerName,
} from "./PlayersNBAStyles";

export default function PlayerNBA() {
  return (
    <PlayersContainer id="players">
      <OurPlayers>Our Players</OurPlayers>
      <PlayerWrapper>
        <PlayerCard>
          <PlayerLogo />
          <PlayerName>Atlanta Hawks</PlayerName>
        </PlayerCard>
        <PlayerCard>
          <PlayerLogo />
          <PlayerName>Boston Celtics</PlayerName>
        </PlayerCard>
        <PlayerCard>
          <PlayerLogo />
          <PlayerName>Brooklyn Nets</PlayerName>
        </PlayerCard>
        <PlayerCard>
          <PlayerLogo />
          <PlayerName>Charlotte Hornets</PlayerName>
        </PlayerCard>
      </PlayerWrapper>
    </PlayersContainer>
  )
}