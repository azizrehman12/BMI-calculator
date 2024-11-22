import React, { useState } from "react";
import "./App.css";

import './index.css'

function App() {
  // State management
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // Calculate BMI
  const calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter both weight and height!");
      return;
    }

    const bmiValue = (weight / (height * height)) * 703; // Formula for BMI (weight in lbs and height in inches)
    setBmi(bmiValue.toFixed(1)); // One decimal place

    // Set message based on BMI value
    if (bmiValue < 18.5) {
      setMessage("You are underweight.");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage("You are at a healthy weight.");
    } else {
      setMessage("You are overweight.");
    }
  };

  // Reload/reset the form
  const reload = () => {
    setWeight(0);
    setHeight(0);
    setBmi("");
    setMessage("");
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs):</label>
            <input
              type="number"
              placeholder="Enter weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (in):</label>
            <input
              type="number"
              placeholder="Enter height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="button">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
