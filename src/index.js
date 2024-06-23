import "./style.css";
import { allTasks } from "./tasks";
import { createProject, updateProjects, allProjects } from "./projects.js";
import { initDynamicContent } from "./gui.js";
import { populateStorage, updateStorage } from "./helpers";


createProject("All Tasks", "An unfiltered view of all tasks", allTasks);
createProject("Test Project", "An unfiltered view of all tasks", []);
createProject("Test Project 2", "An unfiltered view of all tasks", []);
updateProjects();

document.addEventListener("DOMContentLoaded", function () {
  initDynamicContent();
});




//Jun 23
//Continue work on storage: Plan out to make storage persist (currently it gets overriden due to allTaks variables being cleared on load / allTasks update)
//Plan how to pouplate when new tasks are created

//When application runs for first time, update allTasks based on pouplated data