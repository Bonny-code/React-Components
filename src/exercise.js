/*
import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Contents = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Total {props.total}</p>
    </div>
  );
};

const App = () => {
  const course = "Superadvanced web and mobile programming";
  const part1 = "Basics of React";
  const exercises1 = 8;
  const part2 = "Using props";
  const exercises2 = 10;
  const part3 = "Component states";
  const exercises3 = 12;

  return (
    <div>
      <Header course={course} />,
      <Contents
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      ,
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

*/

class Henkilo {
  constructor(nimi, ika) {
    this.nimi = nimi;
    this.ika = ika;
  }
  tervehdi() {
    console.log("hello, my name is", this.nimi);
  }
}

const arto = new Henkilo("Arto Hellas", 35);
arto.tervehdi();

const jami = new Henkilo("Jami Kousa", 21);
jami.tervehdi();
