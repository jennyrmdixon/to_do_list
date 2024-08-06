//PROJECTS
import { addProjLink } from "./gui";
import { getStoredProjs } from "./helpers";

export let allProjs = [];
export async function updateProjs() {
  await getStoredProjs;
  allProjs = getStoredProjs();
}

class Proj {
  constructor(name, desc, tasks) {
    this.name = name;
    this.desc = desc;
    this.tasks = tasks;
  }
}

export const createProj = (name, desc, tasks) => {
  if (!Array.isArray(tasks)) {
    tasks = [tasks];
  }
  let proj = new Proj(name, desc, tasks);
  allProjs.push(proj);
  addProjLink(proj);
}

