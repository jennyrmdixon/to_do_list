import "./style.css";
import { allTasks } from "./tasks";
import { createProj, updateProjs, allProjs } from "./projects.js";
import { initDynamicContent } from "./gui.js";
import { initForms } from "./forms";

createProj("All Tasks", "An unfiltered view of all tasks", allTasks);
createProj("Test Project", "An unfiltered view of all tasks", []);
createProj("Test Project 2", "An unfiltered view of all tasks", []);
updateProjs();

document.addEventListener("DOMContentLoaded", function () {
  let checkAllTasks = setInterval(function () {
    if (localStorage.allTasks === JSON.stringify(allTasks)) {
      allProjs[0].tasks = allTasks;
      clearInterval(checkAllTasks);
      initDynamicContent();
      initForms();
    }
  }, 100); // Check every 100 milliseconds
})

