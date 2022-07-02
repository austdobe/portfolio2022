import axios from "axios";
import { store } from "../store/store";

export const getAllRepos = () => {
  axios
    .get(`https://api.github.com/users/austdobe/repos`)
    .then((response) => {
      store.projects = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getStatsRepos = () => {
  axios
    .get(`https://api.github.com/users/austdobe/stats/code_frequency`)
    .then((response) => {
      console.log(response)
      
      // store.projects = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getRepoLanguages = (repo) => {
  axios
    .get(`https://api.github.com/repos/austdobe/${repo}/languages`)
    .then((response) => {
      store.languages = Object.keys(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};




