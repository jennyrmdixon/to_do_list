import { fullDeleteTask } from "./tasks";
import { allProjs } from "./projects";

const taskArea = document.getElementById("taskAreaContent");


//DOM Utils
const createDeleteBtn = () => {
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("deleteBtn");
  return deleteBtn;
};

const createEditBtn = () => {
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("editBtn");
  return editBtn;
};

const displayProj = (proj) => {
  let projWrap = document.createElement("div");
  projWrap.classList.add("projWrap");
  taskArea.appendChild(projWrap);

  let projName = document.createElement("h2");
  projName.textContent = proj.name;
  projWrap.appendChild(projName);

  let projDesc = document.createElement("p");
  projDesc.textContent = proj.desc;
  projWrap.appendChild(projDesc);
};

const displayTask = (task) => {
  let taskWrap = document.createElement("div");
  taskWrap.classList.add("taskWrap");
  taskArea.appendChild(taskWrap);

  let taskName = document.createElement("h3");
  taskName.textContent = task.name;
  taskWrap.appendChild(taskName);

  let taskDesc = document.createElement("p");
  taskDesc.textContent = task.desc;
  taskWrap.appendChild(taskDesc);

  taskWrap.setAttribute("id", task.id);

  taskWrap.appendChild(createDeleteBtn());
  taskWrap.appendChild(createEditBtn());
};

const displayTasks = (proj) => {
  for (let i = 0; i < proj.tasks.length; i++) {
    displayTask(proj.tasks[i]);
  }
};

const clearProjTasks = () => {
  taskArea.textContent = "";
};

const deleteNode = (id) => {
  let element = document.getElementById(id);
  element.remove();
};

export const displayProjWithTasks = (proj) => {
  clearProjTasks();
  displayProj(proj);
  displayTasks(proj);
};

//END DOMUtils

export function initDynamicContent() {
  const projList = document.getElementById("projList");

  //On new load, auto display new tasks
  displayProjWithTasks(allProjs[0]);

  //Display project info after clicking on each page
  projList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      let projName = event.target.innerText;
      let projIndex = allProjs.findIndex(
        (proj) => proj.name == projName
      );
      displayProjWithTasks(allProjs[projIndex]);
    }
  });

  //Main Content Listeners

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("deleteBtn")) {
      fullDeleteTask(event.target.parentNode.id);
      deleteNode(event.target.parentNode.id);
    }
  });


}
//end initDynamicContent


export const addProjLink = (proj) => {
  let projLink = document.createElement("li");
  projLink.classList.add("projLink");
  projLink.setAttribute("role", "button");
  projLink.textContent = proj.name;
  projList.appendChild(projLink);
};
