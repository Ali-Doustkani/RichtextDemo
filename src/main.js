import "./main.scss";
import "./prism";
import { create } from "@alidoustkani/richtext";

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

var richtext = create(document.getElementById("richtext"), {
  defaultLink: "https://",
  decors: {
    important: "strong",
    emphasize: "em",
    highlight: {
      tag: "span",
      className: "highlight"
    },
    codeHighlight: {
      tag: "span",
      className: "code-highlight"
    },
    bigHeader: {
      parent: true,
      tag: "h1"
    },
    smallHeader: {
      parent: true,
      tag: "h2"
    },
    quote: {
      parent: true,
      tag: "q"
    },
    notebox: {
      parent: true,
      tag: "div",
      className: "notebox"
    }
  }
});

function wireClick(id, func) {
  document.getElementById(id).addEventListener("click", func);
}

wireClick("important", () => richtext.style("important"));
wireClick("emphasize", () => richtext.style("emphasize"));
wireClick("highlight", () => richtext.style("highlight"));
wireClick("codeHighlight", () => richtext.style("codeHighlight"));
wireClick("bigHeader", () => richtext.apply("bigHeader"));
wireClick("smallHeader", () => richtext.apply("smallHeader"));
wireClick("codeSnippet", () => richtext.applyCodebox());
wireClick("quote", () => richtext.apply("quote"));
wireClick("notebox", () => richtext.apply("notebox"));
wireClick("ol", () => richtext.applyOrderedList());
wireClick("ul", () => richtext.applyUnorderedList());
wireClick("image", () => richtext.selectImage());
wireClick("link", () => richtext.styleLink());
