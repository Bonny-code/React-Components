import React from "react";
import ReactDOM from "react-dom";

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const name = "Ebot";
  const ika = 25;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Big Fish" age={26 + 6} />
      <Hello name={name} age={ika} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
