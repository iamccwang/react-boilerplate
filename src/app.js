import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/style.scss";

const render = (
    <div>
        <h1>React Boilerplate</h1>
        <p>This is my react boilerplate</p>
    </div>
);

ReactDOM.render(render, document.getElementById("app"));