import React from "react";
import HighLightWords from "./Highlight";
import "./index.css";

function App() {
  return (
    <HighLightWords
      highLightClassName="font-bold text-[#0a66c2]"
      text="I Love React JS , React Is The Best"
      patterns={["React", "Best"]}
    />
  );
}

export default App;
