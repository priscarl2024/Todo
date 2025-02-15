import { useState } from "react";

const Input = ({ onAddTask }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    if (input.trim()) {
      onAddTask(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Lägg till en ny uppgift..."
        value={input}
        onChange={handleChange}
        className="input-field"
      />
      <button type="submit">+</button>
    </form>
  );
};

export default Input;
