import React, { useState } from "react";
import Menu from "../UIUX/Menubar";

const BGChanger = () => {
  const [color, setColor] = useState("olive");

  const colorChange = (color) => {
    setColor(color);
  };

  return (
    <div>
      <Menu />
      <h1 className="bg-cyan-600 text-white text-3xl text-center p-2">
        A BG Changer App with Vite
      </h1>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-14 inset-x-2 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => colorChange("red")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "red", color: "#FFFFFF" }}
            >
              Red
            </button>
            <button
              onClick={() => colorChange("blue")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "blue", color: "#FFFFFF" }}
            >
              Blue
            </button>
            <button
              onClick={() => colorChange("gray")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "gray", color: "#FFFFFF" }}
            >
              Gray
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BGChanger;
