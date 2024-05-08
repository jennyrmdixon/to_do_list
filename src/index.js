import './style.css';
import {allTasks} from "./tasks";
import {createProject} from "./projects.js"
createProject("Default Project", "Sample description 1", allTasks);
createProject("Sample Project2", "Sample description2", allTasks);

import {addGUIListeners} from "./gui.js";



addGUIListeners();

