import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com/",
});

export const fetchUserData = async (username) => {
  try {
    if (!username || username.trim().length < 2) {
      console.error("No username provided");
      return null;
    }

    const response = await githubApi.get(`users/${username.trim()}`);
    return response.data;
  } catch (error) {
    console.error("GitHub API error:", error.response?.status, error.message);
    return null;
  }
};

export const getQueryParam = async (username, location, minRepos) => {
  if (!username || username.trim().length < 2) {
    console.error("No username provided");
    return null;
  }

  let query = username.trim();
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  try {
    const response = await githubApi.get(`search/users?q=${query}`);
    console.log("GitHub request URL:", response.config?.url);
    return response.data;
  } catch (error) {
    console.error("Request was not successful:", error.response?.status, error.message);
    return null;
  }
};
