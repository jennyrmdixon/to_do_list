import { fullDeleteTask, deleteTaskFromArray } from "./tasks";
import { allProjects, deleteProject, moveTask } from "./projects";
import { findIndexById } from "./helpers";

const taskArea = document.getElementById("taskAreaContent");
const projectList = document.getElementById("projectList");

//DOM Utils
const createDeleteBtn = (element) => {
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add(element + "DeleteBtn");
  return deleteBtn;
};

const createEditBtn = (element) => {
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add(element + "EditBtn");
  //add project ID here
  return editBtn;
};

const createRemoveBtn = (project) => {
  let removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove From Project";
  removeBtn.classList.add("removeBtn");
  //Project ID will be used to identify which project task should be removed from
  removeBtn.setAttribute("data-project", project.id);
  return removeBtn;
};

const createAddTaskBtn = (project) => {
  let addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "Add Task";
  addTaskBtn.classList.add("addTaskBtn");
  //Project ID will be used to identify which project task should be added to
  addTaskBtn.setAttribute("data-project", project.id);
  return addTaskBtn;
};

const createProjectBtns = (project) => {
  let projectBtnDiv = document.createElement("div");
  projectBtnDiv.classList.add("projectBtnDiv");
  let projectDeleteBtn = createDeleteBtn("project");
  projectBtnDiv.appendChild(projectDeleteBtn);

  let projectEditBtn = createEditBtn("project");
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

  let projectDesc = document.createElement("p");
  projectDesc.textContent = project.desc;
  projectContainer.appendChild(projectDesc);

  projectContainer.setAttribute("id", project.id);

  if (project.id !== "default") {
    let projectBtns = createProjectBtns(project);
    projectContainer.appendChild(projectBtns);
  }
};

const displayTask = (task, project) => {
  let taskWrapper = document.createElement("div");
  taskWrapper.classList.add("taskWrapper");
  taskArea.appendChild(taskWrapper);

  let taskContainer = document.createElement("div");
  taskContainer.classList.add("taskContainer");
  taskWrapper.appendChild(taskContainer);

  let taskName = document.createElement("h3");
  taskName.textContent = task.name;
  taskContainer.appendChild(taskName);

  let taskDesc = document.createElement("p");
  taskDesc.textContent = task.desc;
  taskContainer.appendChild(taskDesc);

  taskContainer.setAttribute("id", task.id);

  taskContainer.appendChild(createDeleteBtn("task"));
  taskContainer.appendChild(createEditBtn("task"));

  if (project !== allProjects[0]) {
    taskContainer.appendChild(createRemoveBtn(project));
  }

  //Arrows
  let taskSideColumn = document.createElement("div");
  taskSideColumn.setAttribute("data-project", project.id);
  ("");
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
  projectList.appendChild(projectLink);
};
//END DOMUtils

//Init Dynamic Content on New Page Load

export function initDynamicContent() {
  //On new load, auto display all tasks
  displayProjectWithTasks(allProjects[0]);

  //On new load, auto display links to all projects
  (() => {
    for (let project of allProjects) {
      addProjectLink(project);
    }
  })();

  //Display project info after clicking on each page
  projectList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      let projectName = event.target.innerText;
      let projectIndex = allProjects.findIndex(
        (project) => project.name == projectName
      );
      displayProjectWithTasks(allProjects[projectIndex]);
    }
  });

  //Main Content Listeners

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("taskDeleteBtn")) {
      fullDeleteTask(event.target.parentNode.id);
      deleteNode(event.target.parentNode.id);
    }
  });
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("projectDeleteBtn")) {
    deleteProject(event.target.id);
    location.reload();
  }
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("removeBtn")) {
    //takes parameters for project id, task id
    let eventProjectId = findIndexById(
      allProjects,
      event.target.dataset.project
    );
    deleteTaskFromArray(
      allProjects[eventProjectId].tasks,
      event.target.parentNode.id
    );
    location.reload();
  }
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("taskArrow")) {
    let direction = event.target.dataset.direction;
    let projectId = event.target.parentNode.dataset.project;
    let taskId = event.target.dataset.task;
    moveTask(taskId, projectId, direction);
    location.reload();
  }
}); //end initDynamicContent
