import React from "react";
import ReactDOM from "react-dom";
import AnimatedCard from "./components/animatedCard";

import "./styles.css";

function App() {
  return <AnimatedCard />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
