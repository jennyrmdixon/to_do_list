
import {allTasks} from "./tasks";
import { allProjects } from "./projects";

export async function initDynamicContent() {
    await allProjects; 
    await allTasks;

//Handle generating tasks and projects    

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

const displayTask = (task) => {

    let taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");
    taskArea.appendChild(taskContainer);
  
    let taskName = document.createElement("h3");
    taskName.textContent = task.name;
    taskContainer.appendChild(taskName);
  
    let taskDescription = document.createElement("p");
    taskDescription.textContent = task.description;
    taskContainer.appendChild(taskDescription)

}

const displayTasks = (project) => {
    for (var i = 0; i < project.tasks.length; i++) {
        displayTask(project.tasks[i])    
  }
  }

const clearProjectsTasks = () => {
    taskArea.textContent = '';
}

const displayProjectwithTasks = (project) => {
    clearProjectsTasks();
    displayProject(project);
    displayTasks(project);
}

//Default content on website

displayProjectwithTasks(allProjects[0]);

//Handle event listeners

const newTaskButton = document.getElementById("newTaskButton");

    newTaskButton.addEventListener("click", () => {
        taskFormContainer.classList.remove("hidden");
    })

    const projectList = document.getElementById("projectList");
        projectList.addEventListener('click', function(event) {
            if (event.target.tagName === 'LI') {
                let projectName = event.target.innerText;
                let projectIndex = (allProjects.findIndex(project => project.name == projectName));
                displayProjectwithTasks(allProjects[projectIndex]);
            }

        });

}



    //Add function to ask all projects to task create/edit form as a checkbox

    
    //On submit of any form (new task, new project, edited task, edited project): show that it's saved for a few seconds, then close original form
    //On clicking delete button:show message that it's deleted for a few seconds, then hide form

    //Display all projects in sidebar from array````````
    //Display array of all tasks on right content area
    //Display project: Name, description, display array of tasks



//Close form modals when button is presed



