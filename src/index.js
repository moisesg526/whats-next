import "./style.css";

function content() {
  let content = document.querySelector(".content");
  let header = document.createElement("header");
  content.appendChild(header);

  let h1 = document.createElement("h1");
  h1.textContent = "Whats Next!";
  content.appendChild(h1);
}

content();
