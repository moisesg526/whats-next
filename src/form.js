export default function add() {
  let display = document.createElement("div");
  display.setAttribute("id", "add-project");

  let toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Add New Project";
  display.appendChild(toggleBtn);

  let form = document.createElement("form");
  form.style.display = "none";

  let create = document.createElement("label");
  create.textContent = "Create a new project";

  let title = document.createElement("input");
  title.setAttribute("type", "text");
  title.setAttribute("name", "title");
  title.setAttribute("placeholder", "Title");

  let details = document.createElement("input");
  details.setAttribute("type", "text");
  details.setAttribute("name", "details");
  details.setAttribute("placeholder", "Project Description ...");

  let addBtn = document.createElement("button");
  addBtn.textContent = "Create";

  form.appendChild(create);
  form.appendChild(title);
  form.appendChild(details);
  form.appendChild(addBtn);
  display.appendChild(form);

  toggleBtn.addEventListener("click", () => {
    const formDisplay = window.getComputedStyle(form).display;

    if (formDisplay === "none") {
      form.style.display = "flex";
    } else {
      form.style.display = "none";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    import("./projects").then((module) => {
      const object = new module.ProjectCard(formData);
      console.log(object);

      let projectCard = document.createElement("div");
      projectCard.setAttribute("class", "project-card");

      let h1Title = document.createElement("h1");
      h1Title.textContent = object.title;
      projectCard.appendChild(h1Title);

      let pDescription = document.createElement("p");
      pDescription.textContent = object.details;
      projectCard.appendChild(pDescription);

      display.appendChild(projectCard);
    });
  });

  return display;
}
