import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "typeface-roboto";

// Creating a root for the React application using the root element in the HTML
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the App component inside the root in strict mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Function call to start measuring performance in the app
// Pass a function to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
