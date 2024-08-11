import "./style.css";
import { allTasks } from "./tasks";
import { createProject, updateProjects, allProjects } from "./projects.js";
import { initDynamicContent } from "./gui.js";
import { initForms } from "./forms";

// createProject("All Tasks", "An unfiltered view of all tasks", allTasks);
// createProject("Test Project", "An unfiltered view of all tasks", []);
// createProject("Test Project 2", "An unfiltered view of all tasks", []);
updateProjects();

document.addEventListener("DOMContentLoaded", function () {
  let checkAllTasks = setInterval(function () {
    if (localStorage.allTasks === JSON.stringify(allTasks) &&
    localStorage.allProjects === JSON.stringify(allProjects)) {
      allProjects[0].tasks = allTasks;
      clearInterval(checkAllTasks);
      initDynamicContent();
      initForms();
    }
  }, 100); // Check every 100 milliseconds
});
