import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
//import "./index.css";
//import App from "./App";
//import reportWebVitals from "./reportWebVitals";

type FormElem = React.FormEvent<HTMLFormElement>;

export default function App(): JSX.Element {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (argument: FormElem): void => {
    argument.preventDefault();
    setValue("");
  };

  const sum = (a: number, b: number): number => a + b;

  return (
    <Fragment>
      <h1>Todo List {sum(15, 15)}</h1>
      <form>
        <input
          type="text"
          value={value}
          onChange={(argument) => setValue(argument.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
    </Fragment>
  );
}

const root = document.getElementById("app-root");

ReactDOM.render(<App />, root);
