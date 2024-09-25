export function createForm() {
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

  return form;
}
