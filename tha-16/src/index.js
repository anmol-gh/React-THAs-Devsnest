import React from "react";
import ReactDOM from "react-dom";
import Boxes from "./components/chessboard.jsx";
import Container from "./components/container.jsx";
import "./components/app.css";
import Iterate from "./components/day-17";

ReactDOM.render(
  <>
    <Iterate></Iterate>
    {/* <Boxes></Boxes> */}
  </>,
  document.getElementById("root")
);
