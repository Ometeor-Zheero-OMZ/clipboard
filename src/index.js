import "./style.css";

document.querySelector("#toggle").addEventListener("change", function () {
  if (this.checked) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});
