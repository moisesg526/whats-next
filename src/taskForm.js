export function taskForm() {
    let form = document.createElement("form");
  
    let create = document.createElement("label");
    create.textContent = "Create a new task";
  
    let title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "Title");
  
    let details = document.createElement("input");
    details.setAttribute("type", "text");
    details.setAttribute("name", "details");
    details.setAttribute("placeholder", "Project Description ...");
  
    const radioGroup = document.createElement("div");
    let priority = ["High", "Low"];
    priority.forEach((option) => {
      const label = document.createElement("label");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "options";
      radio.value = option;
      label.appendChild(radio);
      label.appendChild(document.createTextNode(option));
      radioGroup.appendChild(label);
    });
  
    let addBtn = document.createElement("button");
    addBtn.textContent = "Create";
  
    form.appendChild(create);
    form.appendChild(title);
    form.appendChild(details);
    form.appendChild(radioGroup);
    form.appendChild(addBtn);
  
    return form;
  }
  