import { useEffect, useState } from "react";

type Team = {
  name: string;
  nickname: string;
  logo: string;
};

function App() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
        "X-RapidAPI-Key": "eb38d95969mshf802fa7076ec9abp19bbe5jsnb91973967047",
      },
    };

    fetch("https://api-nba-v1.p.rapidapi.com/teams?id=1", options)
      .then((response) => response.json())
      .then((data) => {
        setTeams(data.response);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <ul>
      {teams.map((team) => {
        return (
          <li key={team.name}>
            <img src={team.logo} alt="Team logo" />
            <strong>{team.name}</strong>
            <p>{team.nickname}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
