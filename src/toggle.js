export function toggleFormVisibility(form) {
    const formDisplay = window.getComputedStyle(form).display;
    if (formDisplay === "none") {
      form.style.display = "flex";
    } else {
      form.style.display = "none";
    }
  }