import { useState } from "react";
import { Button } from "@/components/ui/button";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  // let counter = 15;

  const addValue = () => {
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
  };

  const removeValue = () => {
    setCounter((prevCount) => prevCount - 1);
    setCounter((prevCount) => prevCount - 1);
    setCounter((prevCount) => prevCount - 1);
    setCounter((prevCount) => prevCount - 1);
  };

  return (
    <>
      <div className="m-20 flex flex-col justify-center items-center gap-4">
        <div className="flex flex-row justify-center items-center gap-4 m-4">
          <h1 className="text-2xl text-cyan-500 font-medium">
            React Course: {counter}
          </h1>
          <h2 className="text-2xl text-green-500 font-medium">
            Counter Value: {counter}
          </h2>
          <p className="text-2xl text-blue-500 font-medium">
            Footer: {counter}
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-4 m-2">
          <Button variant="default" onClick={addValue} className="font-medium">
            Add Counters
          </Button>
          <Button
            variant="default"
            onClick={removeValue}
            className="font-medium"
          >
            Remove Counters
          </Button>
        </div>
      </div>
    </>
  );
};

export default CounterApp;
