import { useFetch } from "../../hooks/useFetch";

type Team = {
  id: number;
  logo: string;
  name: string;
}

export default function Teams() {
  // const { data: teams } = useFetch<Team[]>('https://api-basketball.p.rapidapi.com/teams?league=12&season=2021-2022');

  // return (
  //   <ul>
  //     {teams?.map((team) => {
  //       return (
  //         <li key={team.id}>
  //           <img src={team.logo} alt="Team logo" />
  //           <h1>{team.name}</h1>
  //         </li>
  //       );
  //     })}
  //   </ul>
  // );
}