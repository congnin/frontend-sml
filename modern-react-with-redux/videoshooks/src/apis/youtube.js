import axios from "axios";

const KEY = "AIzaSyBucMTFNz6erbvtlGY-pGeRUfxGm-jJ3Sk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
