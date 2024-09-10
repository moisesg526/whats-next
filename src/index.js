import tabs from "./tabs";
import add from "./add";
import "./style.css";

function content() {
  let content = document.querySelector(".content");
  let header = document.createElement("header");
  content.appendChild(header);

  let h1 = document.createElement("h1");
  h1.textContent = "Whats Next!";
  header.appendChild(h1);
  content.appendChild(tabs());
  content.appendChild(add());

  return content;
}

content();
