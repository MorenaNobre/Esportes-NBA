import { useEffect, useState } from "react";

type Team = {
  name: string;
  nickname: string;
  logo: string;
};

function App() {
  const [teams, setTeams] = useState<Team[]>([]);

  // useEffect(() => {
  //   fetch("https://api-nba-v1.p.rapidapi.com/teams")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setTeams(data);
  //     });
  // }, []);

  return (
    <>
      <h1>Hello World!</h1>
      {/* <ul>
        {teams.map((team) => {
          return (
            <li key={team.name}>
              <img src={team.logo} alt="team logo" />
              <strong>{team.name}</strong>
              <p>{team.nickname}</p>
            </li>
          );
        })}
      </ul> */}
    </>
  );
}

export default App;
