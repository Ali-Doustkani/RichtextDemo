import "./main.scss";

(function() {
  var richtext = Richtext.create(document.getElementById("richtext"), {
    defaultLink: "https://",
    decors: {
      bold: "b",
      italic: "i",
      highlight: {
        tag: "span",
        className: "text-highlight"
      },
      header: {
        parent: true,
        tag: "h1",
        className: "header-style"
      },
      notebox: {
        parent: true,
        tag: "div",
        className: "notebox"
      }
    }
  });
})();
