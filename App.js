import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = <h1 id="heading">Helo...</h1>;

//React Functional component
const HeadingComponent = () => {
  return (
    <div id="container">
      <h1 className="heading">React Functional Component</h1>
    </div>
  );
};

//Component composition
const Title = () => (
  <h1 className="head" tabIndex="5">
    Hiii!!
  </h1>
);
const HeadingComponent2 = () => (
  <div id="container">
    <Title />
    <h2 className="heading">React</h2>
  </div>
);

//Javascript inside of jsx
const number = 1000;
const HeadingComponent3 = () => (
  <div id="container">
    {/* react element inside fucntion component -> {heading} */}
    {number}
    <h3>{200 + 300}</h3>
    <h2 className="heading">React</h2>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent3 />);
