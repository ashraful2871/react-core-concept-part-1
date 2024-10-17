import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";
import Actor from "./Actor";
import singer from "./Singer";
import Singer from "./Singer";
import BookStore from "./BookStore";

function App() {
  const actors = ["shakib", "soriful raj", "jasim", "rubel", "salman shah"];

  const books = [
    { id: 1, name: "physics", price: 100 },
    { id: 2, name: "biology", price: 110 },
    { id: 3, name: "chemistry", price: 150 },
    { id: 4, name: "Math", price: 200 },
  ];

  const singers = [
    { id: 1, name: "Dr Mahfujur", age: 68 },
    { id: 2, name: "Eva Rahman", age: 38 },
    { id: 3, name: "Shuvro", age: 58 },
    { id: 4, name: "priotm", age: 28 },
  ];
  return (
    <>
      <h2>Vite + React</h2>
      <BookStore books={books}></BookStore>
      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}

      <Actor name="Bappa raj"></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}
      {/* <Todo task="learn react" isDone={true}></Todo>
      <Todo task="core concept" isDone={false}></Todo>
      <Todo task="try jsx" isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="17"></Device>
      <Device name="watch" price="3"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={12} score="54"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  );
}
function Device(props) {
  // console.log(props);
  return (
    <h2>
      this device: {props.name} Price: {props.price}
    </h2>
  );
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: "shakib", age: 12 };
  return (
    <h3>
      i am {person.name} person with age {age + money}
    </h3>
  );
}

const { grade, score } = {
  grade: "7",
  score: "99",
};

function Student({ grade = 1, score = 0 }) {
  // console.log(grade, score);
  return (
    <div className="student">
      <h3>this is a student</h3>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid blue",
    borderRadius: "20px",
  };
  return (
    <div style={developerStyle}>
      <h5>devu devu</h5>
      <p>coding: </p>
    </div>
  );
}
export default App;
