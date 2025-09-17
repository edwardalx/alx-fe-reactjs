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
  const [location, setLocation] = useState("");
  const [repository, setRepository] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError("");
    setUsername("");

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
        {/* Added mb-4 for gap between form groups */}
        <div className="horizontal-label mb-4">
          <label htmlFor="search" className="mb-2">
            Search
          </label>
          <input
            type="text"
            id="search"
            placeholder="input search here"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-1 placeholder-gray-400"
          />
        </div>

        <div className="horizontal-label mb-4">
          <label htmlFor="search">Location</label>
          <input
            type="text"
            id="location"
            placeholder="input location here"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="horizontal-label mb-4">
          <label htmlFor="repositories">Repository</label>
          <input
            type="number"
            id="repositories"
            placeholder="input repository here"
            value={repository}
            onChange={(e) => setRepository(e.target.value)}
          />
        </div>

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
