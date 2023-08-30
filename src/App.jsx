import React from "react";
import Card from "./components/Card.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const descs = ["Calculus hw", "walk the dog", "Clean my clothes", "Finish my script"];
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card description={descs}></Card>
    </div>
  );
}

export default App;
