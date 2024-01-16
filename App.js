/* Nested structures
<div id = "parent">
<div id="child">
<h1>Hiii!!</h1>
</div>
</div>
 */
const parent = React.createElement(
  //Prent div
  "div",
  { id: "parent" },
  React.createElement(
    //Child div
    "div",
    { id: "child" },
    React.createElement(
      //h1 tag
      "h1",
      {},
      "Hiii!!"
    )
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
