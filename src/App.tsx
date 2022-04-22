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
        "X-RapidAPI-Key": "XxXxXxXxXxX",
      },
    };

    fetch(
      "https://api-nba-v1.p.rapidapi.com/teams",
      options
    )
      .then((response) => response.json())
      .then(data => {
        setTeams(data)
      })
      .catch((err) => console.error(err));
  }, []);
  
  return (
    <ul>
      {teams.map(team => {
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
