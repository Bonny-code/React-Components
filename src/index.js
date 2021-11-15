//Functional Components in React
/*
import React from "react";
import ReactDOM from "react-dom";

const Greetings = (props) => {
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
      <Greetings name="Big Fish" age={26 + 6} />
      <Greetings name={name} age={ika} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

//class Components in react.

class Hello extends React.Component {
  render() {
    const name = this.props.name;
    const age = this.props.age;
    const bornYear = () => new Date().getFullYear() - age;

    return (
      <div>
        <p>
          Hello {name}, you are {age} years old <br />
          So you were probably born {bornYear()}
        </p>
      </div>
    );
  }
}


*/
//COUNTER
/*
const App = (props) => {
  const { counter } = props;
  return <div>{counter.value}</div>;
};

const counter = {
  value: 1,
};

const renderoi = () => {
  ReactDOM.render(<App counter={counter} />, document.getElementById("root"));
};

setInterval(() => {
  renderoi();
  counter.value += 1;
}, 1000);

*/

class App extends React.Component {
     constructor(props) {
       super(props)
       this.state = {
         counter = 1
       }
       setInterval( () => {
         this.setState({counter: this.state.counter + 1})
       }, 1000)
     }

 render() {
   return (
     <div>{this.state.counter}</div>
   )
 }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)