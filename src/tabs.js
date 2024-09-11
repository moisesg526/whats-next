import add from "./add"

export default function tabs() {
  let nav = document.createElement("nav");

  let add = document.createElement("button");
  add.setAttribute("id", "add");
  add.textContent = "Add Project";
  nav.appendChild(add);
  add.addEventListener("click", function () {
    if (add.style.display === "none") {
      add.style.display = "block";
    } else {
      add.style.display = "none";
    }
  });

  let projects = document.createElement("button");
  projects.setAttribute("id", "projects");
  projects.textContent = "Projects";
  nav.appendChild(projects);

  return nav;
}
