import React, { useState, useEffect } from "react";
import Card from "./components/card";
// import data from "./api-data/data"; // This is the data which we have defined in the data.js file
import "./App.css";

function App() {
  // API call to fetch data
  // This is the data which we are fetching from the API
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/3cb3e644-d49a-4577-890f-59d7fc0b774e")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container">
      {data.map((cardData) => {
        return <Card props={cardData} />;
      })}
    </div>
  );
}

export default App;
