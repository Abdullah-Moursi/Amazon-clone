import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-fe330.cloudfunctions.net/api",
  // "http://localhost:5001/challenge-fe330/us-central1/api",
});

export default instance;
