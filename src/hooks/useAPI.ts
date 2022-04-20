import { useEffect, useState } from "react";
import axios from "axios";

export function useAPI<T = unknown>(url: string) {
  const axios = require("axios");
  const [data, setData] = useState<T | null>(null)

  const options = {
    method: "GET",
    url: "https://api-basketball.p.rapidapi.com/teams",
    headers: {
      "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
      "X-RapidAPI-Key": "eb38d95969mshf802fa7076ec9abp19bbe5jsnb91973967047",
    },
  };

  useEffect(() => {
    axios.get(options)
      .then(() => {
        setData(data)
      });
  }, []);

  // axios.request(options);
  return { data }

}
