import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Muhammad Rayhan";
  const absence = "20";
  const grade = "XI RPL";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Ini App</p>
        <p>{name}</p>
        <p>{absence}</p>
        <p>{grade}</p>
      </header>
    </div>
  );
}

const AppVar = () => {
  const name = "Muhammad Rayhan";
  const absence = "20";
  const grade = "XI RPL";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Ini AppVar</p>
        <p>{name}</p>
        <p>{absence}</p>
        <p>{grade}</p>
      </header>
    </div>
  );
};

class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Muhammad Rayhan",
      absence: 20,
      grade: "XI RPL",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>Ini AppClass</p>
          <p>{this.state.name}</p>
          <p>{this.state.absence}</p>
          <p>{this.state.grade}</p>
        </header>
      </div>
    );
  }
}

export { App, AppVar, AppClass };
