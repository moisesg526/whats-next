import form from "./form";
import projects from "./projects";

export default function tabs() {
  let nav = document.createElement("nav");
  nav.appendChild(form());

  let projects = document.createElement("button");
  projects.setAttribute("id", "projects");
  projects.textContent = "Projects";
  nav.appendChild(projects);

  return nav;
}
