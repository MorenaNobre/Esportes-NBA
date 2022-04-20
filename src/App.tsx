import axios from "axios"
import api from "./services/api"
// import { useAPI } from "./hooks/useAPI";

// type Team = {
//   name: string;
//   nickname: string;
//   logo: string;
// };

function App() {
  // const { data } = useAPI<Team[]>("https://api-basketball.p.rapidapi.com/teams")
  // const { data } = useAPI<Team[]>("options")

  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://api-basketball.p.rapidapi.com/teams",
    headers: {
      "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
      "X-RapidAPI-Key": "eb38d95969mshf802fa7076ec9abp19bbe5jsnb91973967047",
    },
  };

  axios
    .request(options)
    .then(function (response:Response) {
      console.log(options);
    })
    .catch(function (error:Error) {
      console.error(error);
    });

  return (
    <>
      <h1>Hello World!</h1>
      {/* <ul>
        {data?.map((team) => {
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
