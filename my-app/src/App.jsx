import { useState } from "react";
import "./App.css";
import DecreaseButton from "./components/DecreaseButton";
import IncreaseButton from "./components/IncreaseButton";
import Restart from "./components/Restart";

const App = () => {
  const [value, setValue] = useState(0);

  const decreaseOne = () => {
    const newValue = value - 1;
    setValue(newValue);
  };

  const increaseOne = () => {
    const newValue = value + 1;
    setValue(newValue);
  };

  const nullValue = () => {
    setValue(0);
  };

  return (
    <div className="container">
      <h1>Počítadlo</h1>
      <h2>{value}</h2>
      <DecreaseButton xxx={decreaseOne} />
      <IncreaseButton yyy={increaseOne} />
      <Restart restart={nullValue} />
    </div>
  );
};

export default App;
