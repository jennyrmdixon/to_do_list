
import {allTasks} from "./tasks";
import { allProjects } from "./projects";

const taskArea = document.getElementById("taskAreaContent");

const displayProject = (project) => {
    let projectContainer = document.createElement("div");
    projectContainer.classList.add("projectContainer");
    taskArea.appendChild(projectContainer);
  
    let projectName = document.createElement("h2");
    projectName.textContent = project.name;
    projectContainer.appendChild(projectName);
  
    let projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;
    projectContainer.appendChild(projectDescription)
}

const displayAllProjects = async () => {
  await allProjects; // Wait for allProjects to be resolved
 for (const project of allProjects){
displayProject(project)
}
}

displayAllProjects();


//Project template: Includes name, description, tasks, then delete and edit buttons
//Add task template: Includes name, description, then delete and edit buttons

//Add function: refresh GUI: takes paramater of a project and displays everything 
//Have a variable to track current project, start on all 
//Run function to re-create GUI on: edit/add form click, deleting item, clicking a new project
//export function to draw GUI for first time



const newTaskButton = document.getElementById("newTaskButton");

//Don't need to export GUI Listeners(?)
export function addGUIListeners() {

    newTaskButton.addEventListener("click", () => {
        taskFormContainer.classList.remove("hidden");
    })
    //Add function to ask all projects to task create/edit form as a checkbox

    
    //On submit of any form (new task, new project, edited task, edited project): show that it's saved for a few seconds, then close original form
    //On clicking delete button:show message that it's deleted for a few seconds, then hide form

    //Display all projects in sidebar from array````````
    //Display array of all tasks on right content area
    //Display project: Name, description, display array of tasks

}

//Close form modals when button is presed



