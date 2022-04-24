import { useEffect, useState } from "react";

export function useFetch<T = unknown>(url: string) {
  // const [data, setData] = useState<T | null>(null);

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
  //       "X-RapidAPI-Key": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  //     },
  //   };

  //   fetch(url, options)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data.response);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  // return { data };
}
