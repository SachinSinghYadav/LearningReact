const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h2", {}, "THis is h2"),
    React.createElement("h3", {}, "THis is h3"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
