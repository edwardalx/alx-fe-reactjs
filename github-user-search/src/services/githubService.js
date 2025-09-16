const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

axios.get("https://api.github.com/user/repos", {
  headers: {
    Authorization: `token ${GITHUB_API_KEY}`
  }
});
