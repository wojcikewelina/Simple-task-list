import React, { useState } from "react";

const FormSection = (props) => {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddTask(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <p>My goal</p>
      <input type="text" onChange={inputHandler} value={inputValue} />
      <button>Add Goal</button>
    </form>
  );
};

export default FormSection;
