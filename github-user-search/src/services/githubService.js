import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com/",
});

const fetchUserData = async (username) => {
  try {
    if (!username || username.trim().length < 2) {
      console.log("No username provided");
      return null;
    }

    const response = await githubApi.get(`users/${username.trim()}`);
    return response.data;
  } catch (error) {
    console.error("GitHub API error:", error.response?.status, error.message);
    return null; // return null instead of []
  }
};

const getQueryParam = async(username, location, repo)=>{
let query
if (username){query = username}
if (location){query = `${query}+location:${location}`}
if (repo){query = `${query}+repos:>=${repo}`}

try {
  !username||username.trim().length < 2 && console.log("No username provided");
  const response = await githubApi.get(`search/users?q=${query.trim()}`);
  return response.data
} catch (error) {
  console.error(`Request was not successful: `,error.response.status, error.message)
}


}

export  default { fetchUserData, getQueryParam };
