export function handleFormSubmit(e, form, display) {
  e.preventDefault(); // Prevent page reload on submit

  const formData = new FormData(form);
  const title = form.querySelector("input[name='title']");
  const details = form.querySelector("input[name='details']");

  // Import the ProjectCard and create a new project
  import("./projects").then((module) => {
    const object = new module.ProjectCard(formData);

    let projectCard = document.createElement("div");
    projectCard.setAttribute("class", "project-card");

    let h1Title = document.createElement("h1");
    h1Title.textContent = object.title;
    projectCard.appendChild(h1Title);

    let pDescription = document.createElement("p");
    pDescription.textContent = object.details;
    projectCard.appendChild(pDescription);

    // Create delete button
    let deleteBtn = document.createElement("p");
    deleteBtn.setAttribute("id", "deleteBtn");
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click", () => {
      deleteItem(deleteBtn);
    });

    projectCard.appendChild(deleteBtn);

    // Append the project card to display
    display.appendChild(projectCard);

    // Clear form fields
    title.value = "";
    details.value = "";
  });

  // Function to delete project card
  function deleteItem(btn) {
    btn.parentElement.remove();
  }
}
