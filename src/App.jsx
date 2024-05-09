import BGChanger from "./Projects/BGChanger";
import Card from "./Projects/Card";
import CounterApp from "./Projects/CounterApp";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CounterApp />} />

      <Route path="/cards" element={<Card />} />

      <Route path="/bgchange" element={<BGChanger />} />
    </Routes>
  );
}

export default App;
