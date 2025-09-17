import axios from "axios";
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;


const githubApi = axios.create({
  baseURL: "https://api.github.com/users/",
  headers: {
          Authorization: `Bearer ${GITHUB_API_KEY}`,
        },
});

 const getRepos = async (username) => {
  try {
    if (username.length < 2){console.log("No username")}
    else{const response = await githubApi.get(`${username.trim()}`);
    return response.data;}
    
  } catch (error) {
    console.error("GitHub API error:", error.response?.status, error.message);
    return [];
  }
};

export default {GITHUB_API_KEY, getRepos}
