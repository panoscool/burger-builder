import axios from "axios";

const instance = axios.create({
  baseURL: "https://cool-burger-builder.firebaseio.com/"
});

export default instance;
