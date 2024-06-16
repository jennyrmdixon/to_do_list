import "./style.css";
import { allTasks } from "./tasks";
import { createProject } from "./projects.js";
import { initDynamicContent } from "./gui.js";
import { uId } from "./helpers.js"


createProject("Test Project", "An unfiltered view of all tasks", allTasks[0]);
createProject("All Tasks", "An unfiltered view of all tasks", allTasks);

document.addEventListener("DOMContentLoaded", function () {
  initDynamicContent();
});

console.log(uId())