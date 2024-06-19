import { allTasks, createTask, fullDeleteTask } from "./tasks";
import { allProjects } from "./projects";

export async function initDynamicContent() {
  await allProjects;
  await allTasks;
  await createTask;
  await fullDeleteTask;


  //Handle generating tasks and projects

  const taskArea = document.getElementById("taskAreaContent");

  //*Put this out in DOMUTILS*/

  const createDeleteBtn = () => {
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");
    return deleteBtn;
  };

  const createEditBtn = () => {
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    return editBtn;
  };

  const displayProject = (project) => {
    let projectContainer = document.createElement("div");
    projectContainer.classList.add("projectContainer");
    taskArea.appendChild(projectContainer);

    let projectName = document.createElement("h2");
    projectName.textContent = project.name;
    projectContainer.appendChild(projectName);

    let projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;
    projectContainer.appendChild(projectDescription);
  };

  const displayTask = (task) => {
    let taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");
    taskArea.appendChild(taskContainer);

    let taskName = document.createElement("h3");
    taskName.textContent = task.name;
    taskContainer.appendChild(taskName);

    let taskDescription = document.createElement("p");
    taskDescription.textContent = task.description;
    taskContainer.appendChild(taskDescription);

    taskContainer.setAttribute("id", task.id);

    taskContainer.appendChild(createDeleteBtn());
    taskContainer.appendChild(createEditBtn());
  };

  const displayTasks = (project) => {
    for (var i = 0; i < project.tasks.length; i++) {
      displayTask(project.tasks[i]);
    }
    
  };

  const clearProjectsTasks = () => {
    taskArea.textContent = "";
  };

  const deleteNode = (id) => {
    let element = document.getElementById(id);
    element.remove();
  }


  //END DOMUtils
  const displayProjectwithTasks = (project) => {
    clearProjectsTasks();
    displayProject(project);
    displayTasks(project);
  };

  //Default content on website

  displayProjectwithTasks(allProjects[0]);

  // Populate form fields
  let select = document.getElementById("selectProject");

  const clearProjectOptions = () => {
    select.textContent = "";
  };

  const displayProjectOptions = () => {
    console.log(select);
    for (let i = 0; i < allProjects.length; i++) {
      let project = allProjects[i];
      let projectOption = document.createElement("option");
      projectOption.textContent = project.name;
      projectOption.value = i;
      select.appendChild(projectOption);
    }
  };

  //Hadle event listeners

  const newTaskButton = document.getElementById("newTaskButton");
  const taskFormCloseButton = document.getElementById("taskFormClose");
  const taskFormContainer = document.getElementById("taskFormContainer");
  const projectList = document.getElementById("projectList");
  const taskForm = document.getElementById("taskForm");

  //Task Form

  newTaskButton.addEventListener("click", () => {
    taskFormContainer.classList.remove("hidden");
    clearProjectOptions();
    displayProjectOptions();
  });

  taskFormCloseButton.addEventListener("click", () => {
    taskFormContainer.classList.add("hidden");
  });



  document.addEventListener("click", function (event) {
    if (event.target.classList.contains('deleteBtn')) {
        fullDeleteTask(event.target.parentNode.id);
        deleteNode(event.target.parentNode.id);
        // add logic to delete from project
    }
  });


  projectList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      let projectName = event.target.innerText;
      let projectIndex = allProjects.findIndex(
        (project) => project.name == projectName
      );
      displayProjectwithTasks(allProjects[projectIndex]);
    }
  });

  const addTasktoProject = (task) => {
    let selectProject = document.getElementById("selectProject").value;
    allProjects[selectProject].tasks.push(task);
  };

  //Combine this with project listener?
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let taskName = document.getElementById("taskName").value;
    let taskDescription = document.getElementById("taskDescription").value;
    createTask(taskName, taskDescription);
    addTasktoProject(allTasks[allTasks.length - 1]);
  });
}


export const addProjectLink = (project) => {
  let projectLink = document.createElement("li");
  projectLink.classList.add("projectLink");
  projectLink.setAttribute("role", "button");
  projectLink.textContent = project.name;
  projectList.appendChild(projectLink);
};

//Add function to ask all projects to task create/edit form as a checkbox

//On submit of any form (new task, new project, edited task, edited project): show that it's saved for a few seconds, then close original form
//On clicking delete button:show message that it's deleted for a few seconds, ,then hide form

//Display all projects in sidebar from array````````
//Display array of all tasks on right content area
//Display project: Name, description, display array of tasks

//Close form modals when button is presed
