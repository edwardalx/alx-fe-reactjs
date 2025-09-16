import axios from "axios";
export const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;


const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

export const getRepos = async () => {
  try {
    const response = await githubApi.get("/user/repos");
    return response.data;
  } catch (error) {
    console.error("GitHub API error:", error.response?.status, error.message);
    return [];
  }
};
