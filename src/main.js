import "./main.scss";
import "./prism";

function showTabPage(e) {
  document
    .querySelectorAll(".tab section")
    .forEach(el => (el.style.display = "none"));
  document.getElementById(e.target.dataset.page).style.display = "flex";
}

function wireTab(el) {
  el.addEventListener("change", showTabPage);
}

document.querySelectorAll('.tab input[type="radio"]').forEach(wireTab);

// (function() {
//   var richtext = Richtext.create(document.getElementById("richtext"), {
//     defaultLink: "https://",
//     decors: {
//       bold: "b",
//       italic: "i",
//       highlight: {
//         tag: "span",
//         className: "text-highlight"
//       },
//       header: {
//         parent: true,
//         tag: "h1",
//         className: "header-style"
//       },
//       notebox: {
//         parent: true,
//         tag: "div",
//         className: "notebox"
//       }
//     }
//   });
// })();
