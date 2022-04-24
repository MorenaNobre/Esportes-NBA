import { useFetch } from "../../hooks/useFetch";

type Player = {
  firstname: string;
  lastname: string;
  birth: {
    date: string;
  }
  height: {
    meters: string;
  }
  weight: {
    kilograms: string;
  }
  team: number;
};

export default function Players() {
  // const { data: players } = useFetch<Player[]>(
  //   "https://api-nba-v1.p.rapidapi.com/players?id=265"
  // );

  // return (
  //   <ul>
  //     {players?.map((player) => {
  //       return (
  //         <li key={player.firstname}>
  //           <h1>{player.firstname}</h1>
  //           <h1>{player.lastname}</h1>
  //           <h1>{player.birth.date}</h1>
  //           <h1>{player.height.meters}</h1>
  //           <h1>{player.weight.kilograms}</h1>
  //         </li>
  //       );
  //     })}
  //   </ul>
  // );
}
