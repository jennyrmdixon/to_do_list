import './style.css';
import {allTasks} from "./tasks";
import {createProject} from "./projects.js"
createProject("Test Project", "An unfiltered view of all tasks", allTasks);
createProject("All Tasks", "An unfiltered view of all tasks", allTasks);
import {initDynamicContent} from "./gui.js";



document.addEventListener('DOMContentLoaded', function() {
    initDynamicContent();
});


