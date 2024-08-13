import { allTasks } from "./tasks";
import { allProjects } from "./projects";

export const uId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const findById = (array, idNum) => {
  return array.findIndex((x) => x.id === idNum);
};

export const updateStorage = () => {
  localStorage.setItem("allTasks", JSON.stringify(allTasks));
  localStorage.setItem("allProjects", JSON.stringify(allProjects));
};

export const getStoredTasks = () => {
  return JSON.parse(localStorage.allTasks);
};

export const getStoredProjects = () => {
  console.log(JSON.parse(localStorage.allProjects));
  return JSON.parse(localStorage.allProjects);
};
