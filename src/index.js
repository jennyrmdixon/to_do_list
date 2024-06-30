import "./style.css";
import { allTasks } from "./tasks";
import { createProject, updateProjects, allProjects } from "./projects.js";

createProject("All Tasks", "An unfiltered view of all tasks", allTasks);
createProject("Test Project", "An unfiltered view of all tasks", []);
createProject("Test Project 2", "An unfiltered view of all tasks", []);
updateProjects();

import { initDynamicContent } from "./gui.js";

//Wait for allTasks to poulate before loading content
document.addEventListener("DOMContentLoaded", function () {
  var checkAllTasks = setInterval(function () {
    if (localStorage.allTasks === JSON.stringify(allTasks)) {
      allProjects[0].tasks= allTasks;
      clearInterval(checkAllTasks);
      initDynamicContent();
    }
  }, 100); // Check every 100 milliseconds
});


//Jun 30 -
//Next up, refactor for better org