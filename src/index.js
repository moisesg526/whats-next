// import tabs from "./tabs";
import "./style.css";
import add from "./add";

function content() {
  let content = document.querySelector(".content");

  let header = document.createElement("header");
  content.appendChild(header);

  let h1 = document.createElement("h1");
  h1.textContent = "Whats Next!";
  header.appendChild(h1);

  let contentBody = document.createElement("div");
  contentBody.setAttribute("class", "contentBody");
  content.appendChild(contentBody);

  contentBody.appendChild(add());

  return content;
}

content();
