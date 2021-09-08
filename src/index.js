import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
export const BASE_URL = 'https://api.nasa.gov/planetary/apod';
export const API_KEY = 'GwSVd9ZJavVXhsDeLb4zIpkgFra4JWWSZxEuLFcy';

ReactDOM.render(<App />, document.getElementById("root"));
