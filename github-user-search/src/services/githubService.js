import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com/users/",
});

const fetchUserData = async (username) => {
  try {
    if (!username || username.trim().length < 2) {
      console.log("No username provided");
      return null;
    }

    const response = await githubApi.get(`${username.trim()}`);
    return response.data;
  } catch (error) {
    console.error("GitHub API error:", error.response?.status, error.message);
    return null; // return null instead of []
  }
};

export default { fetchUserData };
