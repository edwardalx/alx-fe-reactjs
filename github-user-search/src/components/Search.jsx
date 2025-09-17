import React, { useState } from "react";
import { useStore } from "../useStore/gitHubSrore";
import githubService from "../services/githubService";

function SearchForm() {
  const username = useStore((state) => state.username);
  const setUsername = useStore((state) => state.setUsername);
  const githubData = useStore((state) => state.githubData);
  const fetchData = useStore((state) => state.fetchData);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError("");

    try {
      const response = await githubService.fetchUserData(username);

      if (!response || !response.login) {
        setError("Looks like we cant find the user");
        fetchData({}); // clear old data
      } else {
        fetchData(response);
        console.log("Form ready data:", response);
      }
    } catch (err) {
      setError("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ceter-text">
      <form onSubmit={handleSubmit} className="center-form">
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          placeholder="input search here"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>

      <div>
        <h2>User detail</h2>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {githubData.login && !loading && (
          <>
            <p>avatar_url: {githubData.avatar_url}</p>
            <img
              src={githubData.avatar_url}
              alt="avatar"
              style={{ width: "50px" }}
            />
            <p>login: {githubData.login}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default SearchForm;
