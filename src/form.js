export default function add() {
  let display = document.createElement("div");
  display.setAttribute("id", "add-project");

  let toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Add New Project";
  display.appendChild(toggleBtn);

  let form = document.createElement("form");

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
    if (form.style.display === "none") {
      form.style.display = "flex";
    } else {
      form.style.display = "none";
    }
  });

  return display;
}
