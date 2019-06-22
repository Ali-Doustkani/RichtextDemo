import "./main.scss";
import "./prism";
import { create } from "@alidoustkani/richtext";

function showTabPage(e) {
  document
    .querySelectorAll(".tab section")
    .forEach(el => (el.style.display = "none"));
  document.getElementById(e.target.dataset.page).style.display = "flex";
  if (e.target.id === "editor-tab") {
    document.getElementById("richtext").firstChild.focus();
  }
}

document.querySelectorAll('.tab input[type="radio"]').forEach(function(el) {
  el.addEventListener("change", showTabPage);
});

const richtext = create(document.getElementById("richtext"), {
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
wireClick("fullscreen", fullscreen);

function fullscreen() {
  const header = document.querySelector("header").style;
  header.display = toggle(header.display, "block", "none");

  const tabs = document.querySelector("main>div").style;
  tabs.display = toggle(tabs.display, "block", "none");

  const main = document.querySelector("main").style;
  main.minWidth = toggle(main.minWidth, "60%", "90%");

  const richtextArea = document.querySelector("#richtext-area").style;
  richtextArea.marginTop = toggle(richtextArea.marginTop, "", "20px");

  const fullscreen = document.querySelector("#fullscreen>i");
  fullscreen.className = toggle(
    fullscreen.className,
    "fas fa-arrows-alt",
    "fas fa-compress-arrows-alt"
  );
}

function toggle(style, value, other) {
  return style === "" || style === value ? other : value;
}
