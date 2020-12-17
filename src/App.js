import React, { useState } from "react";
import Map from "./components/Map";
import MapAll from "./components/MapAll";

function App() {
  const [isQuiz, setIsQuiz] = useState(true);
  return isQuiz ? (
    <Map setIsQuiz={setIsQuiz} />
  ) : (
    <MapAll setIsQuiz={setIsQuiz} />
  );
}

export default App;
