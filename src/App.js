import "./styles.css";
import { generateData } from "./Script.js";

const Dot = ({ x, y }) => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      transform: `translate(${x}px, -${y}px)`,
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      backgroundColor: "#ff5733"
    }}
  />
);

const App = () => {
  const randomValues = generateData();
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      {randomValues.map((item, index) => (
        <Dot key={item.Date} x={index * 13} y={item.yPos + 4} />
      ))}
      <div className={"line"}></div>
    </div>
  );
};

export default App;
