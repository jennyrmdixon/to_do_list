//*Create task in GUI/
/*Clear tasks*.
/*Replace with appropriate list of tasks when:
/***When clicking on a new project */
/**After adding or editing a task */

const newTaskButton = document.getElementById("newTaskButton");
const taskFormContainer = document.getElementById("taskFormContainer");
const taskForm = document.getElementById("taskForm");

export default function addEventListeners() {

    newTaskButton.addEventListener("click", () => {
        taskFormContainer.classList.remove("hidden");
    });


    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(taskForm);
        const data = Object.fromEntries(formData);
        taskForm.classList.remove("hidden");
        console.log(data);
    })
}