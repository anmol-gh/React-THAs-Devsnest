import Boxes from "./chessboard.jsx";
import "./app.css";

function Day16() {
  return ( 
    <div className="container">
      {/* <Boxes /> */}
      {[...Array(81)].map((i) => (
        <Boxes />
      ))}
    </div>
  );
}

export default Day16;
