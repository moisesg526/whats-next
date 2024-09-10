import "./style.css";
export default function add() {
  let display = document.createElement("div");
  display.setAttribute("id", "add-project");

  let form = document.createElement("form");
  form.setAttribute("method", "post");

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

  form.appendChild(create);
  form.appendChild(title);
  form.appendChild(details);

  display.appendChild(form);

  return display;
}
