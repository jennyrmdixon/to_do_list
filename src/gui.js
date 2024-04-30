//*Create task in GUI/
/*Clear tasks*.
/*Replace with appropriate list of tasks when:
/***When clicking on a new project */
/**After adding or editing a task */

const newTaskButton = document.getElementById("newTaskButton");

export function addGUIListeners() {

    newTaskButton.addEventListener("click", () => {
        taskFormContainer.classList.remove("hidden");
    });
    //On submit: show that it's saved for a few seconds
    //Close out task, clear out saved message


    //Edit task:
    //Listen for task edit form
    //close task form

    //Display array of all tasks on right content area
    //By default, show all tasks
    //Add lisenter to check for 

}


 console.log("test gui");
