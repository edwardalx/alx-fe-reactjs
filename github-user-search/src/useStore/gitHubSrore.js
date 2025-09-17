import { create } from 'zustand';

export const useStore = create((set) => ({
    username:" ",
  githubData: [],
  fetchData: (newGithubData) => set({ githubData: newGithubData }),
  setUsername: (newUsername) => set({ username: newUsername }),
}));