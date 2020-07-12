import React from "react";
import "./App.css";
import HackerNews from "./HackerNews";


function App() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
   <HackerNews />
  );
}

export default App;
