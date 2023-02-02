import React, { useState } from "react";
import FormSection from "./FormSection";
import "./styles.css";

export default function App() {
  const [arreyOfTasks, setArreyOfTasks] = useState([]);

  const addTaskHandler = (enteredTask) => {
    setArreyOfTasks([...arreyOfTasks, enteredTask]);
    console.log(arreyOfTasks);
  };

  return (
    <div className="App">
      <FormSection onAddTask={addTaskHandler} />
      <ul>
        {arreyOfTasks.length === 0 && <p>Brak elementów</p>}
        {arreyOfTasks.length > 0 &&
          arreyOfTasks.map((element) => <li>{element}</li>)}
      </ul>
    </div>
  );
}
