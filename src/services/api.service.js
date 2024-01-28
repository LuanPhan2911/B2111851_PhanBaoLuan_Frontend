import axios from "axios";
const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
export default (baseUrl) => {
  return axios.create({
    baseURL: baseUrl,
    ...config,
  });
};
