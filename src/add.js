import { createForm } from "./form";
import { toggleFormVisibility } from "./toggle";
import { handleFormSubmit } from "./submit";
import { taskForm } from "./taskForm";
import { taskSubmit } from "./taskSubmit";

export default function add() {
  let display = document.createElement("div");
  display.setAttribute("id", "add-project");

  let addBtn = document.createElement("button");
  addBtn.textContent = "Add New Project";
  display.appendChild(addBtn);

  let displayProjects = document.createElement("button");
  displayProjects.textContent = "Projects";
  display.appendChild(displayProjects);

  let tasks = document.createElement("button");
  tasks.textContent = "Tasks";
  display.appendChild(tasks);

  let form = createForm(); // Import the form creation logic
  form.style.display = "none";
  display.appendChild(form);

  let taskFormElement = taskForm();
  taskFormElement.style.display = "none";
  display.appendChild(taskFormElement);

  // Event to toggle form visibility
  addBtn.addEventListener("click", () => {
    toggleFormVisibility(form); // Import the toggle function
  });

  tasks.addEventListener("click", () => {
    toggleFormVisibility(taskFormElement);
  });

  // Handle form submission and creating a project card
  form.addEventListener("submit", (e) => {
    handleFormSubmit(e, form, display); // Import the submit handling function
  });

  taskFormElement.addEventListener("submit", (e) => {
    taskSubmit(e, taskFormElement, display);
  });

  return display;
}
