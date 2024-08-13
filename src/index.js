import "./style.css";
import { allTasks } from "./tasks";
import { updateProjects, createProject, allProjects } from "./projects.js";
import { initDynamicContent } from "./gui.js";
import { initForms } from "./forms";

//Load from storage
updateProjects();

document.addEventListener("DOMContentLoaded", function () {
  let checkAllTasks = setInterval(function () {
    //Wait for  storage to populate
    if (
      localStorage.allTasks === JSON.stringify(allTasks) &&
      localStorage.allProjects === JSON.stringify(allProjects)
    ) {
      clearInterval(checkAllTasks);
      //If no projects exist yet, create default All Tasks project
      if (allProjects[0] === undefined) {
        createProject("All Tasks", "An unfiltered view of all tasks", allTasks);
      }
      //Add all stored tasks to All Tasks
      allProjects[0].tasks = allTasks;
      //Init page
      initDynamicContent();
      initForms();
    }
  }, 100); // Check every 100 milliseconds
});
