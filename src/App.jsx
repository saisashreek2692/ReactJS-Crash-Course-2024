import { Routes, Route } from "react-router-dom";
import Menubar from "./UIUX/Menubar";
import BGChanger from "./Projects/BGChanger";
import Card from "./Projects/Card";
import CounterApp from "./Projects/CounterApp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menubar />} />
      <Route path="/counter" element={<CounterApp />} />
      <Route path="/cards" element={<Card />} />
      <Route path="/bgchange" element={<BGChanger />} />
    </Routes>
  );
}

export default App;
