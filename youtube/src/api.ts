import axios from "axios";

export interface IgetVideo {}

export function videos() {
  return axios
    .get(
      `${process.env.REACT_APP_BASE_URL}?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_API_KEY}`
    )
    .then((res) => res);
}
