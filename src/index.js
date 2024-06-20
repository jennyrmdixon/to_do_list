import "./style.css";
import { allTasks } from "./tasks";
import { createProject } from "./projects.js";
import { initDynamicContent } from "./gui.js";

createProject("All Tasks", "An unfiltered view of all tasks", allTasks);
createProject("Test Project", "An unfiltered view of all tasks", allTasks[0]);
createProject("Test Project 2", "An unfiltered view of all tasks", allTasks[0]);


document.addEventListener("DOMContentLoaded", function () {
  initDynamicContent();
});

