import { fullDeleteTask, deleteTaskFromArray } from "./tasks";
import { allProjects, deleteProject, moveTask } from "./projects";
import { findIndexById } from "./helpers";

const taskArea = document.getElementById("taskAreaContent");
const projectList = document.getElementById("projectList");

//DOM Utils
const createDeleteBtn = (elementType, element) => {
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add(elementType + "DeleteBtn");
  //ID used to delete specific project or task
  if (elementType === "task") {
    deleteBtn.setAttribute("data-task", element.id);
  } else if (elementType === "project") {
    deleteBtn.setAttribute("data-project", element.id);
  }
  return deleteBtn;
};

const createEditBtn = (elementType, project, task) => {
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add(elementType + "EditBtn");
  //ID used to track current project page for refresh logic
  editBtn.setAttribute("data-project", project.id);
  if (elementType === "task"){
    editBtn.setAttribute("data-task", task.id);
  }
  return editBtn;
};

const createRemoveBtn = (project, task) => {
  let removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove From Project";
  removeBtn.classList.add("removeBtn");
  //ID used to track current project page for refresh logic
  removeBtn.setAttribute("data-project", project.id);
  removeBtn.setAttribute("data-task", task.id);
  return removeBtn;
};

const createAddTaskBtn = (project) => {
  let addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "Add Task";
  addTaskBtn.classList.add("addTaskBtn");
  //ID used to track current project page for refresh logic
  addTaskBtn.setAttribute("data-project", project.id);
  return addTaskBtn;
};

const createProjectBtns = (project) => {
  let projectBtnDiv = document.createElement("div");
  projectBtnDiv.classList.add("projectBtnDiv");

  let projectDeleteBtn = createDeleteBtn("project", project);
  projectBtnDiv.appendChild(projectDeleteBtn);

  let projectEditBtn = createEditBtn("project", project);
  projectBtnDiv.appendChild(projectEditBtn);

  let addTaskBtn = createAddTaskBtn(project);
  projectBtnDiv.appendChild(addTaskBtn);

  return projectBtnDiv;
};

const displayProject = (project) => {
  let projectContainer = document.createElement("div");
  projectContainer.classList.add("projectContainer");
  taskArea.appendChild(projectContainer);

  let projectName = document.createElement("h2");
  projectName.textContent = project.name;
  projectContainer.appendChild(projectName);
  projectName.setAttribute("data-project", project.id);
  projectName.setAttribute("id", "projectName");

  let projectDesc = document.createElement("p");
  projectDesc.textContent = project.desc;
  projectContainer.appendChild(projectDesc);

  projectContainer.setAttribute("id", project.id);

  //Leave buttons off of default project to prevent editing or deleting
  if (project.id !== "default") {
    let projectBtns = createProjectBtns(project);
    projectContainer.appendChild(projectBtns);
  }
};

const displayTask = (task, project) => {
  let taskWrapper = document.createElement("div");
  taskWrapper.setAttribute("id", "wrapper" + task.id);
  taskWrapper.classList.add("taskWrapper");
  taskArea.appendChild(taskWrapper);

  let taskContainer = document.createElement("div");
  taskContainer.classList.add("taskContainer");
  taskWrapper.appendChild(taskContainer);

  let taskNameWrapper = document.createElement("div");
  taskNameWrapper.classList.add("taskNameWrapper");
  taskContainer.appendChild(taskNameWrapper);

  let taskColor = document.createElement("span");
  taskColor.textContent = "●";
  taskColor.setAttribute("data-color", task.color);
  taskNameWrapper.appendChild(taskColor);

  let taskName = document.createElement("h3");
  taskName.textContent = task.name;
  taskNameWrapper.appendChild(taskName);

  let taskDesc = document.createElement("p");
  taskDesc.textContent = task.desc;
  taskContainer.appendChild(taskDesc);
  taskContainer.setAttribute("id", task.id);

  //displayTask - Buttons
  taskContainer.appendChild(createDeleteBtn("task", task));
  taskContainer.appendChild(createEditBtn("task", project, task));
  //Leave 'remove from project' button off of task if the current project is default. 
  if (project.id !== "default") {
    taskContainer.appendChild(createRemoveBtn(project, task));
  }

  //displayTask - Arrows
  let taskSideColumn = document.createElement("div");
  taskSideColumn.setAttribute("data-project", project.id);
  taskWrapper.appendChild(taskSideColumn);

  let taskUpButton = document.createElement("div");
  taskUpButton.textContent = "⌃";
  taskUpButton.classList.add("taskArrow");
  taskUpButton.setAttribute("data-direction", "up");
  taskUpButton.setAttribute("data-task", task.id);
  taskSideColumn.appendChild(taskUpButton);

  let taskDownButton = document.createElement("div");
  taskDownButton.textContent = "⌄";
  taskDownButton.classList.add("taskArrow");
  taskDownButton.setAttribute("data-direction", "down");
  taskDownButton.setAttribute("data-task", task.id);
  taskSideColumn.appendChild(taskDownButton);
};

const displayTasks = (project) => {
  for (let i = 0; i < project.tasks.length; i++) {
    displayTask(project.tasks[i], project);
  }
};

const clearProjectTasks = () => {
  taskArea.textContent = "";
};

const deleteNode = (id) => {
  let element = document.getElementById(id);
  element.remove();
};

export const displayProjectWithTasks = (project) => {
  clearProjectTasks();
  displayProject(project);
  displayTasks(project);
};

export const addProjectLink = (project) => {
  let projectLink = document.createElement("li");
  projectLink.classList.add("projectLink");
  projectLink.setAttribute("role", "button");
  projectLink.textContent = project.name;
  projectLink.setAttribute("data-project", project.id);
  projectList.appendChild(projectLink);
};

export const refreshPage = (projectId) => {
  displayProjectWithTasks(allProjects[findIndexById(allProjects, projectId)]);
};

export function refreshProjectLinks() {
  projectList.textContent = "";
  for (let project of allProjects) {
    addProjectLink(project);
  }
}
//END DOMUtils

//Init Dynamic Content on New Page Load

export function initDynamicContent() {
  //On new load, auto display all tasks
  displayProjectWithTasks(allProjects[0]);

  //On new load, auto display links to all projects
  refreshProjectLinks();

  //Display project info after clicking on each page
  projectList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      let projectIndex = findIndexById(
        allProjects,
        event.target.dataset.project
      );
      displayProjectWithTasks(allProjects[projectIndex]);
    }
  });

  //Main Content Listeners
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("taskDeleteBtn")) {
      //Delete based on task ID
      fullDeleteTask(event.target.dataset.task);
      //Immediately delete container node on GUI
      deleteNode(event.target.parentNode.parentNode.id);
    }
  });
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("projectDeleteBtn")) {
    deleteProject(event.target.dataset.project);
    displayProjectWithTasks(allProjects[0]);
    refreshProjectLinks();
  }
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("removeBtn")) {
    let eventProjectIndex = findIndexById(
      allProjects,
      event.target.dataset.project
    );
    deleteTaskFromArray(
      allProjects[eventProjectIndex].tasks,
      event.target.dataset.task
    );
    refreshPage(event.target.dataset.project);
  }
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("taskArrow")) {
    let direction = event.target.dataset.direction;
    let projectId = event.target.parentNode.dataset.project;
    let taskId = event.target.dataset.task;
    moveTask(taskId, projectId, direction);
    refreshPage(projectId);
  }
}); //end initDynamicContent
