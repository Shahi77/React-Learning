/* Nested structures
<div id = "parent">
<div id="child">
<h1>Hiii!!</h1>
<h2>Hello!!</h2>
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
    [
      //Create array for siblings
      React.createElement(
        //h1 tag
        "h1",
        {},
        "Hiii!!"
      ),
      React.createElement(
        //h2 tag
        "h2",
        {},
        "Hello!!"
      ),
    ]
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
